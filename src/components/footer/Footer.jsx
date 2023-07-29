import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
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
          href="https://www.linkedin.com/in/ivonamojsovska/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ivonamojsovska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/shevonnekaraiv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
