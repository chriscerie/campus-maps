import { Avatar } from '@mui/material';
import { Grid, Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import './index.scss';

function ProfilePage() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <div className="profile-page-container align-text-left">
      {currentUser ? (
        <Fragment>
          <Container>
            <div className="header-text">Profile</div>
            <Grid container>
              <Grid item xs={12}>
                <div className="profile-icon-container">
                  <Avatar
                    id="profile-greeting-icon"
                    src={currentUser ? currentUser.photo : ''}
                  />
                  <div id="profile-greeting-text">
                    Hello, {currentUser.name}!
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="profile-info">
                  <strong>Email: </strong> {currentUser.email}
                </div>
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      ) : (
        <Fragment>
          <Container>
            <div className="header-text">Profile</div>
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

export default ProfilePage;
