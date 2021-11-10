import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));

mongoose
  .connect(
    process.env.MONGODB_URI ||
      'mongodb+srv://chriscerie:Xmqxkpt3Hb9TJbR2@primary.7qkeu.mongodb.net/myFirstDatabase?retryWrites=true'
  )
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));
