import mongoose, { Schema, Document } from 'mongoose';

export interface ILocationsModel extends Document {
  name: string;
  id: string;
  type?: string;
}

const locationsSchema = new Schema({
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

const Location = mongoose.model<ILocationsModel>('Location', locationsSchema);

export default Location;
