import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import './LocationHeader.scss';

function LocationHeader() {
  useEffect(() => {
    axios.get('/api/current_user').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <Container id="header-container" maxWidth="xl">
      <a
        href="/auth/google"
        id="location-header-signup-button"
        className="location-header-sign-buttons"
      >
        Sign up
      </a>
      <a
        href="/auth/google"
        id="location-header-signin-button"
        className="location-header-sign-buttons"
      >
        Sign in
      </a>
    </Container>
  );
}

export default LocationHeader;
