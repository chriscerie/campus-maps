import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import './LocationHeader.scss';

function LocationHeader() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container id="header-container" maxWidth="xl">
      {currentUser.name !== '' ? (
        <Avatar alt={currentUser.name} src={currentUser.photo} />
      ) : (
        <Fragment>
          <a
            href="/auth/google"
            id="location-header-signup-button"
            className="location-header-sign-buttons"
          >
            Sign up
          </a>
          <a
            href="/auth/google"
            id="location-header-signin-button"
            className="location-header-sign-buttons"
          >
            Sign in
          </a>
        </Fragment>
      )}
    </Container>
  );
}

export default LocationHeader;
