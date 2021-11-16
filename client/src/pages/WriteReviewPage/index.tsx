/* eslint-disable eqeqeq */
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
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
  }>();

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
        <h2>{locationInfo && locationInfo.name}</h2>
        <p>All reviews are subject to moderation.</p>
        <form>
          <ul>
            <li key="Review">
              <textarea {...register('body')} placeholder="Write a review." />
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
              Submit Changes
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
