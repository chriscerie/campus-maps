import { Route } from 'react-router-dom';
import PrimaryFooter from './PrimaryFooter';

function Footer() {
  return (
    <Route path="/loc">
      <PrimaryFooter />
    </Route>
  );
}

export default Footer;
