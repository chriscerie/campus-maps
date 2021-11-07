import passport from 'passport';
import express from 'express';

const mockApp = express();

function auth(app: typeof mockApp): void {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/google' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/v1/current-user', (req, res) => {
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(404).send(null);
    }
  });

  app.post('/api/v1/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
}

export default auth;
