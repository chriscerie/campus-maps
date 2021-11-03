import { Container } from '@mui/material';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchBar from './SearchBar';
import './MapHeader.scss';
import ProfileIcon from './ProfileIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import BottomPopup from '../BottomPopup';

function MapHeader() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <BottomPopup
      initialHeight={15}
      bigScreenStyle={{
        position: 'absolute',
        height: 'auto',
        padding: '1em',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        pointerEvents: 'none',
        boxShadow: 'none',
      }}
    >
      <Container className="header-container" maxWidth="xl">
        <SearchBar />
        {currentUser ? (
          <ProfileIcon />
        ) : (
          isBigScreen && (
            <Fragment>
              <a
                href="/auth/google"
                className="signin-button  header-text-shadow"
              >
                Sign in
              </a>
              <a
                href="/auth/google"
                className="signup-button  header-text-shadow"
              >
                Sign up
              </a>
            </Fragment>
          )
        )}
      </Container>
    </BottomPopup>
  );
}

export default MapHeader;
