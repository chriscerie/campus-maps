import { Avatar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import type { CurrentUserState } from '../../actions/currentUserActions';
import './MapHeader.scss';

function MapHeader(props: { currentUser: CurrentUserState }) {
  return (
    <Container className="header-container" maxWidth="xl">
      {props.currentUser ? (
        <Link to="/api/logout">
          <Avatar
            alt={props.currentUser.name}
            src={props.currentUser.photo}
            className="profile-icon-container"
          />
        </Link>
      ) : (
        <Fragment>
          <Link to="/auth/google" className="signup-button  header-text-shadow">
            Sign up
          </Link>
          <Link to="/auth/google" className="signin-button  header-text-shadow">
            Sign in
          </Link>
        </Fragment>
      )}
    </Container>
  );
}

export default MapHeader;
