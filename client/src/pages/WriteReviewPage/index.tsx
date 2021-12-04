import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams, Link, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { getLocationInfo } from '../../api/LocationAPI';
import { getBase64, getFilesFromBase64 } from '../../api/GetBase64';
import { setCurrentUser } from '../../actions/currentUserActions';
import type { LocationType } from '../../types/LocationType';
import type { ReviewType } from '../../types/ReviewType';
import PhotoPopup from '../../components/PhotoPopup';
import './index.scss';

function WriteReviewPage() {
  const { id } = useParams<{ id: string }>();
  const [locationInfo, setLocationInfo] = useState<null | LocationType>(null);
  const mapInstance = useSelector((state: RootState) => state.mapInstance.map);
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const { register, setValue, handleSubmit } = useForm<{
    body: string;
  }>();
  const [photos, setPhotos] = useState<Array<{ imageSrc: string; file: File }>>(
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  // Set review
  useEffect(() => {
    if (locationInfo && currentUser) {
      axios
        .get<ReviewType>(`/api/v1/reviews/${id}`, {
          params: { filter_by: 'current_user' },
        })
        .then(async (res) => {
          setValue('body', res.data.body);
        });

      // Get all currentUser.photos that match location_id with id
      const currentPhotos = currentUser.photos.filter(
        (photo) => photo.location_id === id
      );

      // Set photos
      getFilesFromBase64(
        currentPhotos.map((photo) => {
          return photo.photo;
        })
      ).then((photos) => {
        setPhotos(photos);
      });
    }
  }, [id, locationInfo, currentUser, setValue]);

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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    handleSubmit((data) => {
      const imageBase64s: Array<string> = [];

      Promise.all(
        photos.map(async (photo) => {
          const base64 = await getBase64(photo.file);
          imageBase64s.push(base64);
        })
      ).then(() => {
        axios
          .post(`/api/v1/review/${id}`, {
            body: data.body,
            photos: imageBase64s,
          })
          .then((res) => {
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })();
  };

  return submitted ? (
    <Redirect to={`/loc/${id}`} />
  ) : (
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
        <form onSubmit={onSubmit}>
          <ul>
            <li key="Review" style={{ marginBottom: '3em' }}>
              <textarea {...register('body')} placeholder="Write a review." />
            </li>
            <li key="Photos">
              <h3 style={{ fontSize: '1.3em' }}>
                Attach Photos (32 KB file limit)
              </h3>
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
                          // Only allow up to 32 KB
                          const files = Array.from(e.target.files).filter(
                            (file) => file.size < 32000
                          );

                          // Alert if any file got filtered
                          if (
                            files.length < Array.from(e.target.files).length
                          ) {
                            alert(
                              'File size is too large. File limit is 32 KB.'
                            );
                          }

                          setPhotos((prev) =>
                            prev.concat(
                              files.map((file) => ({
                                imageSrc: URL.createObjectURL(file),
                                file: file,
                              }))
                            )
                          );
                        }
                      }}
                    />
                  </div>
                </div>
                <PhotoPopup
                  photos={photos}
                  index={selectedPhotoIndex}
                  setIndex={setSelectedPhotoIndex}
                  onClose={(e) => {
                    setSelectedPhotoIndex(-1);
                  }}
                />
                {photos &&
                  photos.map((photo, index) => (
                    <div
                      className="write-review-photo-container"
                      style={{
                        backgroundImage: `url(${photo.imageSrc})`,
                        width: '8.2em',
                        height: '8.2em',
                      }}
                    >
                      <div className="write-review-photo-background">
                        <div
                          className="text-area"
                          onClick={() => {
                            setSelectedPhotoIndex(index);
                          }}
                        >
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
              type="submit"
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
