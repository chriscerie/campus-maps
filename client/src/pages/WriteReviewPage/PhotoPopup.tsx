import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseButton from '../../components/CloseButton';
import './PhotoPopup.scss';

function PhotoPopup({
  photos,
  index,
  setIndex,
  onClose,
}: {
  photos: Array<{ imageSrc: string; file: File }>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  onClose: (event: {}) => void;
}) {
  const [imageMousePos, setImageMousePos] = useState<'Left' | 'Right'>('Right');

  return (
    <Modal
      open={index >= 0}
      onClose={onClose}
      sx={{
        padding: '3em 1em',
        '@media (min-width: 769px)': {
          padding: '3em 2em',
        },
      }}
    >
      <div id="photo-popup-container">
        <div id="photo-popup-inner-container">
          <CloseButton
            sx={{
              position: 'absolute',
              right: '1em',
              top: '1em',
            }}
            onClick={() => {
              onClose({});
            }}
          />
          <div id="photo-popup-inner">
            <div
              id="photo-popup-gallery"
              onMouseMove={(e) => {
                const posX =
                  e.clientX - e.currentTarget.getBoundingClientRect().left;
                const isLeftSide = posX < e.currentTarget.clientWidth / 2;
                setImageMousePos(isLeftSide ? 'Left' : 'Right');
              }}
              onClick={() => {
                imageMousePos === 'Left'
                  ? setIndex((prev) => Math.max(0, prev - 1))
                  : setIndex((prev) => Math.min(photos.length - 1, prev + 1));
              }}
            >
              <div id="photo-popup-photo-background">
                <div id="text-area">
                  <pre style={{ margin: 0, userSelect: 'none' }}>
                    {imageMousePos === 'Left' &&
                      `<  ${index + 1} of ${photos.length}   `}
                    {imageMousePos === 'Right' &&
                      `   ${index + 1} of ${photos.length}  >`}
                  </pre>
                </div>
              </div>
              <img
                id="photo-popup-photo"
                alt="Location"
                src={photos[index] && photos[index].imageSrc}
              />
            </div>
            <div id="photo-popup-sidebar-container"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PhotoPopup;
