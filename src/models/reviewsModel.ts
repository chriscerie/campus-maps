import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  _id: string;
  author_id: string;
  location_id: string;
  body: string;
  likes?: number;
  created_at?: Date;
}

const reviewsSchema = new Schema({
  author_id: {
    type: String,
    required: true,
  },
  location_id: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  liked_by: [String],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.model<IReview>('Review', reviewsSchema);

export default Review;
