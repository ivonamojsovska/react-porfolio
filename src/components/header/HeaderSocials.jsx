import React from "react";
import "./Header.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
