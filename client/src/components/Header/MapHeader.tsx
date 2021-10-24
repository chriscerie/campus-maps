import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import SearchBar from './SearchBar';
import './MapHeader.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

function MapHeader() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container className="header-container" maxWidth="xl">
      <SearchBar />
      {currentUser ? (
        <a href="/api/logout">
          <Avatar
            alt={currentUser.name}
            src={currentUser.photo}
            className="profile-icon-container"
          />
        </a>
      ) : (
        <Fragment>
          <a href="/auth/google" className="signin-button  header-text-shadow">
            Sign in
          </a>
          <a href="/auth/google" className="signup-button  header-text-shadow">
            Sign up
          </a>
        </Fragment>
      )}
    </Container>
  );
}

export default MapHeader;
