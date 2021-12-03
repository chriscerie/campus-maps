import { Button, Divider } from '@mui/material';
import type { UserType } from '../../types/UserType';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Submission.scss';

export type SubmissionType = {
  _id: string;
  author_id: string;
  id: string;
  name: string;
  type: string;
  description: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  rooms: Array<{
    room_name: string;
    room_id: string;
  }>;
  __v: string;
  author?: UserType;
};

const Submission = ({
  submission,
  resetSubmissions,
}: {
  submission: SubmissionType;
  resetSubmissions: () => void;
}) => {
  return (
    <Fragment>
      <li className="submissions-container">
        <Divider className="submission-divider" />

        <div className="submission-header-container">
          <div>
            <div className="submission-header-body">
              <div className="submission-profile-image-container">
                <img
                  src={
                    submission.author ? submission.author.profile_picture : ''
                  }
                  alt="profile"
                  className="submission-profile-image"
                />
              </div>
              <div className="submission-location-info-container">
                <div className="submission-location-info">
                  <Link
                    className="submission-link"
                    to={`/loc/${submission.id}`}
                  >
                    {submission.name}
                  </Link>
                </div>
                <div>
                  Update by {submission.author?.first_name}{' '}
                  {submission.author?.last_name}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submission-text-container">
          <p className="submission-text">
            <strong>Type:</strong> {submission.type} <br />
            <strong>Description:</strong> {submission.description} <br />
            <strong>Address 1:</strong> {submission.address1} <br />
            <strong>Address 2:</strong> {submission.address2} <br />
            <strong>City:</strong> {submission.city} <br />
            <strong>State:</strong> {submission.state} <br />
            <strong>ZIP Code:</strong> {submission.zip_code} <br />
            <strong>Rooms:</strong> <br />
            {submission.rooms &&
              submission.rooms.map((room) => (
                <div>
                  {'• ' + room.room_name}
                  <br />
                </div>
              ))}
          </p>
          <div className="acceptance-buttons-container">
            {/* Buttons are nonfunctional currently */}
            <Fragment>
              <Button
                variant="contained"
                disableElevation
                id="submission-accept-button"
                onClick={() => {
                  axios
                    .post(`/api/v1/locations/moderation/${submission._id}`, {
                      decision: 'Accept',
                    })
                    .then(() => {
                      resetSubmissions();
                    });
                }}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                disableElevation
                id="submission-reject-button"
                onClick={() => {
                  axios
                    .post(`/api/v1/locations/moderation/${submission._id}`, {
                      decision: 'Deny',
                    })
                    .then(() => {
                      resetSubmissions();
                    });
                }}
              >
                Reject
              </Button>
            </Fragment>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default Submission;
