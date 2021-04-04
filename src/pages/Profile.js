import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";

export default function Profile() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>This is your Profile page!</h1>
        <div>
          Here's what this app knows about you based on your Google login:
        </div>
        <pre>{JSON.stringify(user, null, "\t")}</pre>
        <div>
          Your name is "{user.Te}" and your email is "{user.zt}."
        </div>
        <div>Google also says that you're a fan of good doggos :)</div>
        <br />
        <img
          src={
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          }
          style={{ width: "500px", height: "auto" }}
        />
        <br />
        <br />
      </Container>
    </Layout>
  );
}
