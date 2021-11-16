import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  id: string;
  type?: string;
}

export const locationsSchema = new Schema({
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
  address1: {
    type: String,
    default: '',
  },
  address2: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  zip_code: {
    type: String,
    default: '',
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
