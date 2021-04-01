import React from "react";
import getUser from "../utils/get-user";

export default function Profile() {
  const user = getUser();
  
  return (
    <div>
      <div>This is your Profile Page!</div>
      <pre>{JSON.stringify(user, null, "\t")}</pre>
      <div>Your name is "{user.Te}" and your email is "{user.zt}"</div>
      <br />
      <button onClick={user.signOut}>Sign out</button>
      <br />
      <br />
      <a href="/">Back to Home Page</a>
    </div>
  )
}