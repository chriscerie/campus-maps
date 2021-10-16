import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '678281921235-a3c8fq4225vp8ppgjmann65pmt7plaik.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
