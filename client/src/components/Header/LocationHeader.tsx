import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import type { CurrentUserState } from '../../actions/currentUserActions';
import './LocationHeader.scss';
import AccountMenu from './AccountMenu';

function LocationHeader(props: { currentUser: CurrentUserState }) {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container id="header-container" maxWidth="xl">
      {currentUser ? (
        <AccountMenu currentUser={currentUser} />
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
