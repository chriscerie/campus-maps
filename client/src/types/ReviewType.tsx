import type { UserType } from './UserType';

export type ReviewType = {
  _id: string;
  author_id: string;
  body: string;
  liked_by: Array<string>;
  created_at: string;
  author?: UserType;
};
