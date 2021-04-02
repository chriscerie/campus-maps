import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";

export default function Login() {
  const user = getUser();

  useEffect(() => {
    window.gapi.load("signin2", () => {
      window.gapi.signin2.render("login-button", {
        theme: "dark",
        // 'width': 160,
        // 'height': 40,
      });
    });
  });

  return (
    <div>
      <Layout user={user}>
        <Container>
          <h1>This page is private!</h1>
          <div>(meaning you have to login to view the page)</div>
          <br />
        </Container>
      </Layout>
    </div>
  );
}
