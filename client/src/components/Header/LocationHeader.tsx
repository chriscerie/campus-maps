import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import type { CurrentUserState } from '../../actions/currentUserActions';
import { Link } from 'react-router-dom';
import './LocationHeader.scss';

function LocationHeader(props: { currentUser: CurrentUserState }) {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container id="header-container" maxWidth="xl">
      {currentUser ? (
        <Link to="/api/logout">
          <Avatar
            alt={currentUser.name}
            src={currentUser.photo}
            className="profile-icon-container"
          />
        </Link>
      ) : (
        <Fragment>
          <Link
            to="/auth/google"
            id="location-header-signup-button"
            className="location-header-sign-buttons"
          >
            Sign up
          </Link>
          <Link
            to="/auth/google"
            id="location-header-signin-button"
            className="location-header-sign-buttons"
          >
            Sign in
          </Link>
        </Fragment>
      )}
    </Container>
  );
}

export default LocationHeader;
