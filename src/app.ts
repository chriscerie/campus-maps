import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import * as path from 'path';
import routes from './routes';
import './models/usersModel';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Send all other requests back to React
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export default app;
