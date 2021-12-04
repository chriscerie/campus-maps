//import type { UserType } from '../../types/UserType';
import './PhotoBox.scss';

export type PhotoType = {
  _id: string;
  user_id: string;
  photo_src: string;
  photo_link: string;
};

const PhotoBox = ({
  photoSrc,
  onClick,
}: {
  photoSrc: string;
  onClick?: () => void;
}) => {
  return (
    <li className="photo-container">
      <div className="photo-box" onClick={onClick}>
        <img
          className="photo-box-img"
          src={photoSrc}
          alt="location"
          width="226"
          height="226"
        />
      </div>
    </li>
  );
};

export default PhotoBox;
