import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  id: string;
  type?: string;
}

const locationsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tile: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    z: {
      type: Number,
      required: true,
    },
  },
});

const Location = mongoose.model<ILocation>('Location', locationsSchema);

export default Location;
