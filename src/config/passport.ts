import mongoose from 'mongoose';
import passport from 'passport';
import GoogleAuth from 'passport-google-oauth20';

const User = mongoose.model('User');

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
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value.split('?')[0],
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
