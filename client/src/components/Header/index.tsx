import { Container } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import './index.scss';

function Header() {
  useEffect(() => {
    axios
      .get('/api/current_user')
      .then((res) => {
        console.log(res.data);
      })
  }, [])

  return (
    <Container className="header-container" maxWidth="xl">
      <a href='/auth/google' className="signup-button  header-text-shadow">
        Sign up
      </a>
      <a href='/auth/google' className="signin-button  header-text-shadow">
        Sign in
      </a>
    </Container>
  );
}

export default Header;
