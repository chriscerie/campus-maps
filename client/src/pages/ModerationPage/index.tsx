import { Avatar } from '@mui/material';
import { Grid, Container } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Button, Divider } from '@mui/material';
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

                  {/* This is the submission container, it should probably be another component.
                  Has hardcoded data */}
                  <li className="submissions-container">
                    
                  <Divider className="submission-divider"/>

                    <div className="submission-header-container">
                      <div>
                        <div className="submission-header-body">
                          <div className="submission-profile-image-container">
                            <img
                            // Change to submitter's profile picture
                              src={currentUser ? currentUser.profile_picture : ''}
                              alt="profile"
                              className="submission-profile-image"
                            />
                          </div>
                          <div className="submission-location-info-container">
                            <div className="submission-location-info">
                              {'Phelps Hall'}
                            </div>
                            <div>Description update by USERNAME</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-text-container">
                      <p className="submission-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius tortor orci, ac efficitur risus faucibus in.
                        Fusce ornare efficitur convallis. Nulla sit amet leo tellus. Vivamus viverra dictum dapibus. Nullam ultricies feugiat
                        nulla quis pulvinar. Fusce a nibh eget enim bibendum tempus. Aenean nulla lorem, hendrerit ac neque non, vestibulum
                        sagittis eros. Nam iaculis pharetra sem, non fermentum urna finibus at. Quisque molestie erat in fermentum iaculis.
                        Cras in dui neque. Sed fringilla risus quis sollicitudin sodales. Vivamus facilisis sapien eu mauris rhoncus, a tempus
                        risus condimentum. Donec tristique neque neque, quis dignissim massa congue quis.</p>
                      <div className="acceptance-buttons-container">
                        <Fragment>
                          <Button
                            variant="contained"
                            disableElevation
                            id="submission-accept-button"
                          >
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            disableElevation
                            id="submission-reject-button"
                          >
                            Reject
                          </Button>
                          
                        </Fragment>
                      </div>
                    </div>
                  </li>
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
}

export default ModerationPage;
