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
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/v1/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/v1/current-user', (req, res) => {
    res.send(req.user);
  });
}

export default auth;
