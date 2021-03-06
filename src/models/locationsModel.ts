import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  _id: string;
  id: string;
  name: string;
  type: string;
  description: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  photos: Array<{ author_id: string; photo: string }>;
  rooms: Array<{
    room_id: string;
    room_name: string;
    room_description?: string;
  }>;
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
  photos: Array,
  rooms: Array,
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
