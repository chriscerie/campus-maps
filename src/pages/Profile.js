import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import Doggo from "../images/doggo.jpg";

const doggoStyle = { maxWidth: "100%", width: "500px", height: "auto" };

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
        <img src={Doggo} style={doggoStyle} alt="doggo" />
        <br />
        <br />
      </Container>
    </Layout>
  );
}
