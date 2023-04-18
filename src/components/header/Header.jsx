import React from "react";
import CTA from "./CTA";
import ME from "../../assets/IMG_9003.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ivona M.Stevik</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">{/* <img src={} alt="profile image" /></div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
