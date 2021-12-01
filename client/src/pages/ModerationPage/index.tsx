import { Avatar } from '@mui/material';
import { Grid, Container } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import axios from 'axios';
import type { UserType } from '../../types/UserType';
import { SubmissionType } from './Submission';
import Submission from './Submission';
import './index.scss';

const setSubmissions = (
  setBackendSubmissions: React.Dispatch<React.SetStateAction<SubmissionType[]>>
) => {
  axios
    .get<Array<SubmissionType>>('/api/v1/locations/loc-edit')
    .then(async (res) => {
      setBackendSubmissions(
        await Promise.all(
          res.data.map(async (submission) => {
            const res = await axios.get<UserType>(
              `/api/v1/users/${submission.author_id}`
            );
            submission.author = res.data;
            return submission;
          })
        )
      );
    });
};

function ModerationPage() {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const [backendSubmissions, setBackendSubmissions] = useState<
    Array<SubmissionType>
  >([]);

  useEffect(() => {
    axios
      .get<Array<SubmissionType>>('/api/v1/locations/loc-edit')
      .then(async (res) => {
        setSubmissions(setBackendSubmissions);
      });
  }, []);

  return (
    <div className="moderation-page-container align-text-left">
      {currentUser && currentUser.account_type === 'Admin' ? (
        <Fragment>
          <Container>
            <div className="header-text">Moderation Panel</div>
            <Grid container>
              <Grid item xs={12}>
                <div className="profile-icon-container">
                  <Avatar
                    id="profile-greeting-icon"
                    src={currentUser ? currentUser.profile_picture : ''}
                  />
                  <div className="profile-greeting-text">
                    You are logged in as {currentUser.first_name}{' '}
                    {currentUser.last_name}.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="submissions">
                  <h1>Pending Submissions</h1>
                  <ul>
                    {backendSubmissions.map((rootComment: SubmissionType) => (
                      <Submission
                        key={rootComment._id}
                        submission={rootComment}
                        resetSubmissions={() => {
                          setSubmissions(setBackendSubmissions);
                        }}
                      />
                    ))}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <Container>
            <div className="header-text">Moderation</div>
            <Grid container>
              <Grid item xs={12}>
                <div className="profile-icon-container">
                  <Avatar id="profile-greeting-icon" src={''} />
                  <div className="profile-greeting-text">
                    You do not have permission to view this page.
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </div>
  );
}

export default ModerationPage;
