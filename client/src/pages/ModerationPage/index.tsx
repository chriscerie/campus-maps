import { Avatar } from '@mui/material';
import { Grid, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Button, Divider } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import axios from 'axios';
import type { UserType} from '../../types/UserType'
import { SubmissionType } from './Submission';
import Submission from './Submission';
import './index.scss';

function ModerationPage() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  const [backendSubmissions, setBackendSubmissions] = useState<Array<SubmissionType>>([]);

  useEffect(() => {
    axios
      .get<Array<SubmissionType>>('/api/v1/locations/loc-edit')
      .then(async (res) => {
        setBackendSubmissions(
          await Promise.all(
            res.data.map((submission) => {
              return axios
                .get<UserType>(`/api/v1/users/${submission.author_id}`)
                .then((res) => {
                  submission.author = res.data;
                  return submission;
                });
            })
          )
        );

      });
  }, []);

  return (
    <div className="profile-page-container align-text-left">
      {/* TODO: only display page and allow user to accept/reject if they are a moderator */}
      {currentUser ? (
        // {currentUser.account_type =="User" ? (
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
                  <div id="profile-greeting-text">
                    You are logged in as {currentUser.first_name} {currentUser.last_name}.
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="submissions">
                  <h1>Pending Submissions</h1>
                  <ul>
                    {backendSubmissions.map((rootComment: SubmissionType) => (
                      <Submission key={rootComment._id} submission={rootComment} />
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
                  <div id="profile-greeting-text">You must be logged in as a moderator to access this page.</div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </div>
  );
};

export default ModerationPage;
