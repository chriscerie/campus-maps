import { Button } from '@mui/material';
import './index.scss';

function LoginPage() {
  return (
    <div id="login-page-container">
      <div id="login-page-top">
        <h1>Sign in to Campus Maps</h1>
        <p>By signing in, you agree to Campus Maps's Privacy Policy.</p>
      </div>
      <div id="login-page-bottom">
        <Button variant="contained" disableElevation id="login-page-button">
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
