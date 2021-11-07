import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  accounts: {
    google: {
      id: string;
    };
  };
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
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
