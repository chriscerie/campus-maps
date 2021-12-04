import type { StatesList } from './StatesList';

export type LocationType = {
  id: number;
  name: string;
  type: string;
  description: string;
  address1: string;
  address2: string;
  city: string;
  state: typeof StatesList[keyof typeof StatesList];
  zip_code: string;
  photos: Array<{ author_id: string; photo: string }>;
  rooms: Array<{
    room_id: string;
    room_name: string;
  }>;
  tile: {
    x: number;
    y: number;
    z: number;
  };
};
