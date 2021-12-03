import { Container } from '@mui/material';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../reducers';
import SearchBar from './SearchBar';
import './LocationHeader.scss';
import ProfileIcon from './ProfileIcon';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function LocationHeader() {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const isLargeScreen = useMediaQuery('(min-width:640px)');

  return (
    <Container id="header-container" maxWidth="xl">
      <Link to="/" className="header-logo-link" />
      {isLargeScreen && <SearchBar />}
      {currentUser ? (
        <ProfileIcon />
      ) : (
        <Fragment>
          <Link
            to="/login"
            className="header-sign-buttons header-signin-button"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="header-sign-buttons header-signup-button"
          >
            Sign up
          </Link>
        </Fragment>
      )}
    </Container>
  );
}

export default LocationHeader;
