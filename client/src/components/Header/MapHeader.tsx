import { Container } from '@mui/material';
import { Fragment } from 'react';
import './MapHeader.scss';
import AccountMenu from './AccountMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

function MapHeader() {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <Container className="header-container" maxWidth="xl">
      {currentUser ? (
        <AccountMenu currentUser={currentUser} />
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
