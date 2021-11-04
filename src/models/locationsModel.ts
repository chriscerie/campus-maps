import mongoose from 'mongoose';

const locationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: String,
});

const Location = mongoose.model('Location', locationsSchema);

export default Location;
