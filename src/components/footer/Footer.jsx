import "./Footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/mishelivo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/shevonnekaraiv/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/shevonneIv"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
