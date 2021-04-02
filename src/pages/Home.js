import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import getUser from "../utils/get-user";

export default function Home() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>Hello! This is the Home page!</h1>
        <div>You should check out the Profile page :)</div>
        <br />
      </Container>
    </Layout>
  );
}
