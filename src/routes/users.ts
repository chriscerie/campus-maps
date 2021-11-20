import express from 'express';
import { Error } from 'mongoose';
import User, { IUser } from '../models/usersModel';

const router = express.Router();

router.get('/v1/users/current-user', (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(404).send(null);
  }
});

// Get user by id
router.get('/v1/users/:id', (req, res) => {
  User.findById(req.params.id, (err: Error, user: IUser) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

export default router;
