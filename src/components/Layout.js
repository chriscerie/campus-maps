import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
  const user = props.user;

  return (
    <div>
      <NavBar user={user} />
      {props.children}
      <Footer />
    </div>
  );
}
