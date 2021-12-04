import express from 'express';
import { Error } from 'mongoose';
import requireLogin from '../middlewares/requireLogin';
import Location, { ILocation } from '../models/locationsModel';
import User, { IUser } from '../models/usersModel';
import Review, { IReview } from '../models/reviewsModel';

const router = express.Router();

// Get location reviews
// filter_by: 'author' | 'location' | 'current_user' (User's review given location)
router.get('/v1/reviews/:id', (req, res) => {
  if (req.query.filter_by === 'current_user') {
    Review.findOne(
      {
        location_id: req.params.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        author_id: req.user._id,
      },
      (err: Error, reviews: Array<IReview>) => {
        if (!err && reviews) {
          res.status(200).send(reviews);
        } else {
          res.status(404).send('Reviews not found');
        }
      }
    );
  } else {
    Review.find(
      {
        [req.query.filter_by === 'author' ? 'author_id' : 'location_id']:
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
  }
});

// Return valid base 64 images
function validateBase64Images(images: Array<string>) {
  const regex = /^data:image\/(png|jpg|jpeg);base64,/;
  const validImages: Array<string> = [];
  images.forEach((image) => {
    if (regex.test(image)) {
      validImages.push(image);
    }
  });
  return validImages;
}

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

          const validPhotos = validateBase64Images(req.body.photos);

          // Remove all location.photos for user_id and replace them with new photos
          location
            .updateOne({
              $pull: { photos: { author_id: user_id } },
            })
            .then(() => {
              location
                .updateOne({
                  $push: {
                    photos: {
                      $each: validPhotos.map((image) => {
                        return {
                          author_id: user_id,
                          photo: image,
                        };
                      }),
                    },
                  },
                })
                .catch((err: Error) => {
                  console.log(err);
                  res.status(500).send(err);
                });
            });

          // Remove all User.photos for location_id and replace them with new photos
          User.findOne({ _id: user_id }, (err: Error, user: IUser) => {
            if (!err && user) {
              user
                .updateOne({
                  $pull: { photos: { location_id: req.params.id } },
                })
                .then(() => {
                  user
                    .updateOne({
                      $push: {
                        photos: {
                          $each: validPhotos.map((image) => {
                            return {
                              location_id: location.id,
                              photo: image,
                            };
                          }),
                        },
                      },
                    })
                    .catch((err: Error) => {
                      console.log(err);
                      res.status(500).send(err);
                    });
                });
            }
          });
        }
      );
    } else {
      res.status(404).send('Location not found');
    }
  });
});

export default router;
