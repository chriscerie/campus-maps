import { Avatar } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './index.scss';

function ModerationPage() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <div className="profile-page-container align-text-left">
      {/* TODO: only display page and allow user to accept/reject if they are a moderator */}
      {currentUser ? (
        <Fragment>
          <Container>
            <div className="header-text">Moderation</div>
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
                  <div id="profile-greeting-text">You are not logged in!</div>
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
