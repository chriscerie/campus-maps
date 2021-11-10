import { Link } from 'react-router-dom';
import './index.scss';

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/" className="footer-logo-link" />
      <div className="footer-link-section">
        <Link className="footer-link" to="/loc/3588023830">
          LINK 1
        </Link>
        <Link className="footer-link" to="/loc/3588023830">
          LINK 2
        </Link>
        <Link className="footer-link" to="/loc/3588023830">
          LINK 3
        </Link>
        <Link className="footer-link" to="/loc/3588023830">
          LINK 4
        </Link>
      </div>
      <p>Copyright © 2021</p>
    </div>
  );
}

export default Footer;
