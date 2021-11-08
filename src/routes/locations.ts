import express from 'express';
import { Error } from 'mongoose';
import Location, { ILocation } from '../models/locationsModel';

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
        description: `${req.body.name} is a location.`,
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

export default router;
