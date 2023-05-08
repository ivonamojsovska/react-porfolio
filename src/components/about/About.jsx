import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Do You Want To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>7</small>
            </article>
          </div>
          <p>
            I am passionate about using my skills to create beautiful,
            user-friendly websites that have a positive impact on the world. I
            believe that the intersection of technology and design has the power
            to transform the way we live, work, and interact with each other.
            <br />
            While constantly learning and growing, I am committed to stay
            up-to-date with the latest trends and technologies, and to honing my
            skills in areas like HTML, CSS, JavaScript, and responsive design.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
