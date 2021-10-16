import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '678281921235-a3c8fq4225vp8ppgjmann65pmt7plaik.apps.googleusercontent.com';

function LoginButton() {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("profileObj" in res) {
      console.log('Login Success: currentUser:', res.profileObj);
      refreshTokenSetup(res);
    }
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginButton;
