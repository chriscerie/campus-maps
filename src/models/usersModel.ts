import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  account_type: 'User' | 'Admin';
  accounts: {
    google: {
      id: string;
    };
  };
  photos: Array<{ location_id: string; photo_id: string }>;
}

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  accounts: {
    google: {
      id: {
        type: String,
        required: true,
      },
    },
  },
  account_type: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User',
  },
  photos: [
    {
      location_id: {
        type: String,
        required: true,
      },
      photo_id: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
