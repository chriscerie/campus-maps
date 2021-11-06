import { Route } from 'react-router-dom';
import PrimaryFooter from './PrimaryFooter';

function Footer() {
  return (
    <Route exact path="/">
      <PrimaryFooter />
    </Route>
  );
}

export default Footer;
