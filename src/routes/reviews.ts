import express from 'express';
import { Error } from 'mongoose';
import requireLogin from '../middlewares/requireLogin';
import Location, { ILocation } from '../models/locationsModel';
import Review, { IReview } from '../models/reviewsModel';

const router = express.Router();

// Get location reviews
// filter_by: 'author' | 'location'
router.get('/v1/reviews/:id', (req, res) => {
  Review.find(
    {
      [req.body.filter_by === 'author' ? 'author_id' : 'location_id']:
        req.params.id,
    },
    (err: Error, reviews: Array<IReview>) => {
      if (!err && reviews) {
        res.status(200).send(reviews);
      } else {
        res.status(404).send('Reviews not found');
      }
    }
  );
});

// Create or edit review for location
router.post('/v1/review/:id', requireLogin, (req, res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user_id = req.user._id;

  Location.findOne({ id: req.params.id }, (err: Error, location: ILocation) => {
    if (!err && location) {
      Review.findOne(
        { author_id: user_id, location_id: req.params.id },
        (err: Error, review: IReview) => {
          if (!err && review) {
            // User already has review for location. Edit review instead.
            review.body = req.body.body;
            review.save((err: Error, review: IReview) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
              } else {
                res.status(201).send(review);
              }
            });
          } else {
            // No review exists for this user and location. Create a new one.
            new Review({
              author_id: user_id,
              location_id: req.params.id,
              body: req.body.body,
            }).save((err: Error, review: IReview) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
              } else {
                res.status(201).send(review);
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

export default router;
