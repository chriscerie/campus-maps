import { Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import SearchBar from './SearchBar';
import './LocationHeader.scss';
import ProfileIcon from './ProfileIcon';
import { Link } from 'react-router-dom';

function LocationHeader() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container id="header-container" maxWidth="xl">
      <Link to="/" className="header-logo-link" />
      <SearchBar />
      {currentUser ? (
        <ProfileIcon />
      ) : (
        <Fragment>
          <a
            href="api/v1/auth/google"
            className="header-sign-buttons header-signin-button"
          >
            Sign in
          </a>
          <a
            href="api/v1/auth/google"
            className="header-sign-buttons header-signup-button"
          >
            Sign up
          </a>
        </Fragment>
      )}
    </Container>
  );
}

export default LocationHeader;
