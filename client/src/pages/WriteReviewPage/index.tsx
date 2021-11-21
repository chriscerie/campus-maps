/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getLocationInfo } from '../../api/LocationAPI';
import type { LocationType } from '../../types/LocationType';
import './index.scss';

function WriteReviewPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const { register, setValue, handleSubmit } = useForm<{
    body: string;
    photos: null | FileList;
  }>();

  const [photos, setPhotos] = useState<Array<File>>([]);

  console.log(photos);

  // Set review
  useEffect(() => {
    setValue('body', '');
  }, [id, setValue]);

  // Set point
  useEffect(() => {
    if (mapInstance) {
      getLocationInfo(id, mapInstance).then((res) => {
        if (res) {
          setLocationInfo(res);
        }
      });
    }
  }, [id, mapInstance]);

  return (
    <Container maxWidth="md" id="write-review-page-container">
      <div id="write-review-page-inner">
        <Link
          to={`/loc/${id}`}
          style={{ textDecoration: 'none', color: '#000' }}
        >
          <h1 style={{ fontSize: '2em' }}>
            {locationInfo && locationInfo.name}
          </h1>
        </Link>
        <p>All reviews are subject to moderation.</p>
        <form>
          <ul>
            <li key="Review" style={{ marginBottom: '3em' }}>
              <textarea {...register('body')} placeholder="Write a review." />
            </li>
            <li key="Photos">
              <h3 style={{ fontSize: '1.3em' }}>Attach Photos</h3>
              <div id="write-review-photos-section">
                <div style={photos.length === 0 ? { width: '100%' } : {}}>
                  <div
                    id="write-review-add-photos-container"
                    style={photos.length > 0 ? { width: '8.2em' } : {}}
                  >
                    <UploadFileIcon
                      sx={{
                        margin: '1.5em 0',
                        width: '1.2em',
                        height: '1.2em',
                      }}
                    />
                    <input
                      type="file"
                      multiple
                      accept=".png, .jpg, .jpeg"
                      id="write-review-add-photos"
                      onChange={(e) => {
                        if (e.target.files) {
                          setPhotos((prev) =>
                            prev.concat(Array.from(e.target.files || []))
                          );
                        }
                      }}
                    />
                  </div>
                </div>
                {photos &&
                  photos.map((photo, index) => (
                    <div className="write-review-photo-container">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={photo.name}
                        style={{
                          width: '8.2em',
                          height: '8.2em',
                        }}
                      />
                      <div className="write-review-photo-background">
                        <div className="text-area">
                          <p style={{ margin: 0, fontWeight: 700 }}>
                            Add caption
                          </p>
                        </div>
                      </div>
                      <div
                        className="write-review-photo-delete-icon"
                        onClick={() => {
                          setPhotos((prev) => [
                            ...prev.slice(0, index),
                            ...prev.slice(index + 1),
                          ]);
                        }}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  ))}
              </div>
            </li>
          </ul>
          <div style={{ marginTop: '2em' }}>
            <Button
              variant="contained"
              disableElevation
              id="write-review-submit-button"
              onClick={handleSubmit((data) => {
                axios
                  .post(`/api/v1/review/${id}`, { body: data.body })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })}
            >
              Post Review
            </Button>
            <Link to={`/loc/${id}`} id="write-review-cancel-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default WriteReviewPage;
