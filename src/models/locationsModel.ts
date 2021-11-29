import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  id: string;
  type: string;
  description: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  photos: Array<{ author_id: string; photo_id: string }>;
  tile: {
    x: number;
    y: number;
    z: number;
  };
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
  type: String,
  description: {
    type: String,
    required: true,
  },
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip_code: String,
  photos: [
    {
      author_id: {
        type: String,
        required: true,
      },
      photo_id: {
        type: String,
        required: true,
      },
    },
  ],
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
