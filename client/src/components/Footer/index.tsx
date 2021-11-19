import { Link } from 'react-router-dom';
import './index.scss';

function Footer() {
  return (
    <div className="footer-container">
      <Link to="/" className="footer-logo-link" />
      <div className="footer-link-section">
        <Link className="footer-link" to="/about">
          ABOUT
        </Link>
        <a
          className="footer-link"
          href="https://github.com/ucsb-cs148-f21/project-t06-campusmaps"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB
        </a>
        <Link className="footer-link" to="/about">
          LINK 3
        </Link>
        <Link className="footer-link" to="/about">
          LINK 4
        </Link>
      </div>
      <p>Copyright © 2021</p>
    </div>
  );
}

export default Footer;
