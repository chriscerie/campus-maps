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
            href="/auth/google"
            id="location-header-signin-button"
            className="location-header-sign-buttons"
          >
            Sign in
          </a>
          <a
            href="/auth/google"
            id="location-header-signup-button"
            className="location-header-sign-buttons"
          >
            Sign up
          </a>
        </Fragment>
      )}
    </Container>
  );
}

export default LocationHeader;
