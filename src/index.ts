import app from './app';
import connectDB from './config/db.config';

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on port ${port}`));

connectDB();
