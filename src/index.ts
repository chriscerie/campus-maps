import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Primary')
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));
