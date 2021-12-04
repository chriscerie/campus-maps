import express from 'express';
import { Error } from 'mongoose';
import requireLogin from '../middlewares/requireLogin';
import requireAdmin from '../middlewares/requireAdmin';
import Location, { ILocation } from '../models/locationsModel';
import LocationEdit, { ILocationEdit } from '../models/locationEditsModel';

const router = express.Router();

// Get location information
router.get('/v1/locations/loc/:id', (req, res) => {
  Location.findOne({ id: req.params.id }, (err: Error, location: ILocation) => {
    if (err) {
      res.status(404).send(err);
    } else if (!location) {
      res.status(404).send('Location not found');
    } else {
      res.status(200).send(location);
    }
  });
});

// Find or create location
router.post('/v1/locations/loc/:id', (req, res) => {
  Location.findOne({ id: req.params.id }, (err: Error, location: ILocation) => {
    if (!err && location) {
      // Location exists
      res.status(200).send(location);
    } else {
      // Create new location
      new Location({
        id: req.params.id,
        name: req.body.name,
        type: req.body.type,
        description: `No description found for ${req.body.name}. Consider contributing to Campus Maps by submitting a description.`,
        tile: req.body.tile,
      }).save((err: Error, location: ILocation) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(location);
        }
      });
    }
  });
});

// Gets list of all location edits
router.get('/v1/locations/loc-edit', (req, res) => {
  LocationEdit.find({}, (err: Error, locationEdits) => {
    if (!err && locationEdits) {
      res.status(200).send(locationEdits);
    }
  });
});

function processRooms(rooms: ILocationEdit['rooms']) {
  if (rooms && rooms.length > 0) {
    rooms = rooms.map((room) => {
      // Remove spaces on edges
      room.room_name = room.room_name.trim();

      // Remove duplicate spaces
      room.room_name = room.room_name.replace(/\s\s+/g, ' ');

      // Capitalize all letters
      room.room_name =
        room.room_name.charAt(0).toUpperCase() + room.room_name.slice(1);

      // Remove all non-alphanumeric characters except for spaces and dashes
      room.room_name = room.room_name.replace(/[^a-zA-Z0-9 -]/g, '');

      // Set room_id to room_name lowercase and replace spaces with dashes
      room.room_id = room.room_name.toLowerCase().replace(/ /g, '-');

      return room;
    });

    // Remove all empty and duplicate rooms
    rooms = rooms.filter((room, index) => {
      return room.room_name !== '' && rooms.indexOf(room) === index;
    });
  }

  return rooms;
}

// Adds location edit
router.post('/v1/locations/loc-edit/:id', requireLogin, (req, res) => {
  Location.findOne({ id: req.params.id }, (err: Error, location: ILocation) => {
    if (!err && location) {
      req.body.rooms = processRooms(req.body.rooms);

      LocationEdit.findOne(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        { author_id: req.user._id, id: req.params.id },
        (err: Error, locationEdit: ILocationEdit) => {
          if (!err && locationEdit) {
            // Location edit for this user and location already exists. Update it instead.
            (locationEdit.name = req.body.name),
              (locationEdit.type = req.body.type),
              (locationEdit.description = req.body.description),
              (locationEdit.address1 = req.body.address1),
              (locationEdit.address2 = req.body.address2),
              (locationEdit.city = req.body.city),
              (locationEdit.state = req.body.state),
              (locationEdit.zip_code = req.body.zip_code),
              (locationEdit.rooms = req.body.rooms),
              locationEdit.save((err: Error, locationEdit: ILocationEdit) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                } else {
                  res.status(201).send(locationEdit);
                }
              });
          } else {
            // No location edit for this user and location exists. Create a new one.
            new LocationEdit({
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              author_id: req.user._id,
              id: req.params.id,
              name: req.body.name,
              type: req.body.type,
              description: req.body.description,
              address1: req.body.address1,
              address2: req.body.address2,
              city: req.body.city,
              state: req.body.state,
              zip_code: req.body.zip_code,
              rooms: req.body.rooms,
            }).save((err: Error, locationEdit: ILocationEdit) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
              } else {
                res.status(201).send(locationEdit);
              }
            });
          }
        }
      );
    } else {
      res.status(404).send('Location not found');
    }
  });
});

// Accepts or denies location edit
// decision: 'Accept' | 'Deny'
router.post('/v1/locations/moderation/:id', requireAdmin, (req, res) => {
  LocationEdit.findOne(
    { _id: req.params.id },
    (err: Error, locationEdit: ILocationEdit) => {
      if (!err && locationEdit) {
        if (req.body.decision === 'Accept') {
          const rooms = processRooms(locationEdit.rooms);

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Location.findOne(
            { id: locationEdit.id },
            (err: Error, location: ILocation) => {
              if (!err && location) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                location.name = locationEdit.name;
                location.type = locationEdit.type;
                location.description = locationEdit.description;
                location.address1 = locationEdit.address1;
                location.address2 = locationEdit.address2;
                location.city = locationEdit.city;
                location.state = locationEdit.state;
                location.zip_code = locationEdit.zip_code;
                location.rooms = rooms;
                location.save((err: Error, location: ILocation) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send(err);
                  } else {
                    // Delete location edit
                    locationEdit.remove((err: Error) => {
                      if (err) {
                        console.log(err);
                        res.status(500).send(err);
                      } else {
                        res.status(201).send(location);
                      }
                    });
                  }
                });
              } else {
                res.status(404).send('Location not found');
              }
            }
          );
        } else {
          // Delete location edit
          locationEdit.remove((err: Error) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              res.status(201).send(locationEdit);
            }
          });
        }
      } else {
        res.status(404).send('Location edit not found');
      }
    }
  );
});

export default router;
