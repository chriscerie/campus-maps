import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import * as path from 'path';
import auth from './routes/auth';
import './models/usersModel';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect(
    process.env.MONGODB_URI ||
      'mongodb+srv://chriscerie:Xmqxkpt3Hb9TJbR2@primary.7qkeu.mongodb.net/myFirstDatabase?retryWrites=true'
  )
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

app.use(passport.initialize());
app.use(passport.session());

import './config/passport';

auth(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/express_backend', (_, res) => {
  res.status(200).send({ message: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Send all other requests back to React
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default app;
