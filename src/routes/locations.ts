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

// Adds location edit
router.post('/v1/locations/loc-edit/:id', requireLogin, (req, res) => {
  Location.findOne({ id: req.params.id }, (err: Error, location: ILocation) => {
    if (!err && location) {
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
