import React from "react";
import Resume from "../../assets/Ivona Mojsovska Resume.pdf";

console.log(Resume);

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={Resume}
        download="Ivona Mojsovska CV"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
