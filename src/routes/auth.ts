import passport from 'passport';
import express from 'express';

const router = express.Router();

router.get(
  '/v1/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/v1/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'api/v1/auth/google' }),
  (req, res) => {
    res.redirect('/');
  }
);

router.post('/v1/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;
