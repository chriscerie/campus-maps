import passport from 'passport';
import GoogleAuth from 'passport-google-oauth20';
import User from '../models/usersModel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleAuth.Strategy(
    {
      clientID:
        '796959289157-ser2d8agd1nv5t1kl64ii4rtqfi7blb7.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    (_accessToken, _refreshToken, profile, done) => {
      User.findOne({ acccounts: { google: { id: profile.id } } }).then(
        (existingUser) => {
          if (existingUser) {
            console.log(existingUser);
            done(null, existingUser);
          } else {
            new User({
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              email: profile.emails[0].value,
              profile_picture: profile.photos[0].value.split('?')[0],
              accounts: {
                google: {
                  id: profile.id,
                },
              },
            })
              .save()
              .then((user) => done(null, user));
          }
        }
      );
    }
  )
);
