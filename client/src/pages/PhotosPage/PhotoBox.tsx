//import type { UserType } from '../../types/UserType';
import './PhotoBox.scss';

export type PhotoType = {
  _id: string;
  user_id: string;
  photo_src: string;
  photo_link: string;
  // user?: UserType; time posted, etc..
};

const PhotoBox = ({ photo }: { photo: PhotoType }) => {
  console.log(photo);
  console.log(photo.user_id);
  return (
    <li className="photo-container">
      <div className="photo-box">
        <img
          className="photo-box-img"
          src={photo.photo_src}
          alt="location"
          width="226"
          height="226"
        />
        <a className="photo-link" href={photo.photo_link}></a>
      </div>
    </li>
  );
};

export default PhotoBox;
