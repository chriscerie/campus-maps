import mongoose, { Schema, Document } from 'mongoose';

export interface ILocationEdit extends Document {
  author_id: string;
  id: string;
  name: string;
  type: string;
  description: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  rooms: Array<{
    room_id: string;
    room_name: string;
  }>;
}

const locationEditsSchema = new Schema({
  author_id: {
    required: true,
    type: String,
  },
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
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip_code: String,
  rooms: Array,
});

const LocationEdit = mongoose.model<ILocationEdit>(
  'LocationEdit',
  locationEditsSchema
);

export default LocationEdit;
