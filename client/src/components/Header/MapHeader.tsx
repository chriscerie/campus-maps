import { Avatar, Container } from '@mui/material';
import { Fragment } from 'react';
import type { CurrentUserState } from '../../actions/currentUserActions';
import './MapHeader.scss';
import AccountMenu from './AccountMenu';

function MapHeader(props: { currentUser: CurrentUserState }) {
  return (
    <Container className="header-container" maxWidth="xl">
      {props.currentUser ? (
        <AccountMenu currentUser={props.currentUser} />
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
