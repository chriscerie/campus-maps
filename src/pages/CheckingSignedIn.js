import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const CheckingSignedInWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default function CheckingSignedIn() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ReactGoogleAuthStarter</Navbar.Brand>
        </Container>
      </Navbar>
      <CheckingSignedInWrapper>
        <Spinner animation="border" role="status" />
      </CheckingSignedInWrapper>
    </>
  );
}
