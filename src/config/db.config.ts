import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    console.log('Connecting to MongoDB...');
    const databaseName = 'Primary';
    const con = await mongoose.connect(
      `mongodb://127.0.0.1:27017/${databaseName}`
    );
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
