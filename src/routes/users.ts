import express from 'express';

const router = express.Router();

router.get('/v1/users/current-user', (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(404).send(null);
  }
});

export default router;
