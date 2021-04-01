import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => initGoogleSignIn();
    document.body.appendChild(script);
  }, [])

  function initGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_AUTH_CLIENT_ID
      }).then(() => {
        const authInstance =  window.gapi.auth2.getAuthInstance();
        const isSignedIn = authInstance.isSignedIn.get();
        setIsSignedIn(isSignedIn);
        
        authInstance.isSignedIn.listen(isSignedIn => {
          setIsSignedIn(isSignedIn);
        })
      })
    })
  }

  function PrivateRoute(props) {
    const { Component, ...rest } = props;
    if (isSignedIn === null) {
        return (
          <div>Checking if you're signed in...</div>
        )
    }
    return (
      <Route
        {...rest}
        render = {() => isSignedIn ? <Component /> : <Login />}
      />
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/profile" exact Component={Profile} />
        <Route path="/" render={Home} />
      </Switch>
    </BrowserRouter>
  );
}
