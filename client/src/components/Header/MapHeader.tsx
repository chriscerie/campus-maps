import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import type { CurrentUserState } from '../../actions/currentUserActions';
import './MapHeader.scss';

function MapHeader(props: { currentUser: CurrentUserState }) {
  return (
    <Container className="header-container" maxWidth="xl">
      {props.currentUser ? (
        <a href="/api/logout">
          <Avatar
            alt={props.currentUser.name}
            src={props.currentUser.photo}
            className="profile-icon-container"
          />
        </a>
      ) : (
        <Fragment>
          <a href="/auth/google" className="signup-button  header-text-shadow">
            Sign up
          </a>
          <a href="/auth/google" className="signin-button  header-text-shadow">
            Sign in
          </a>
        </Fragment>
      )}
    </Container>
  );
}

export default MapHeader;
