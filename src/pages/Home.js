import React from "react";
import styled from "styled-components";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

export default function Home() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>Hello! This is the Home page!</h1>
        <TextWrapper>
          This project was built in React, specically in Create React App (the
          officially supported version of React developed by Facebook). This
          starter code will focus on setting up Google Authentication and
          demonstrating examples of public and private pages. Notice that the{" "}
          <a href="/profile">Profile</a> page is not located in the NavBar until
          you login.
        </TextWrapper>
        <br />
        <TextWrapper>
          This Home page is a public page, meaning that users can view this page
          without logging in. The Profile page is a private page, meaning that
          users have to login.
        </TextWrapper>
        <br />
      </Container>
    </Layout>
  );
}
