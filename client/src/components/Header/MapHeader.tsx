import { Container } from '@mui/material';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
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
          )
        )}
      </Container>
    </BottomPopup>
  );
}

export default MapHeader;
