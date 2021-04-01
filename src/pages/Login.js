import React, { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.gapi.load('signin2', () => {
        window.gapi.signin2.render(
          'login-button', 
          {
            'theme': 'dark',
            // 'width': 160,
            // 'height': 40,
          }
        )
    })
  })

  return (
    <div>
      <div>You need to login to view this page!</div>
      <br />
      <div id="login-button" />
      <br />
      <a href="/">Back to Home Page</a>
    </div>
  )
}