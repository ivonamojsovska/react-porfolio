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
              <small>5</small>
            </article>
          </div>
          <p>
            I am a Junior Software Engineer passionate about crafting beautiful, user-friendly websites that make a positive impact. With experience working on projects that leverage React, TypeScript, and CSS, I believe in the power of technology and design to enhance the way we live, work, and connect.
            <br />
            As I navigate my career, I am committed to continuous learning and staying up-to-date with the latest industry trends and technologies. My journey includes hands-on experience in developing responsive web applications and an eagerness to expand my skills in areas like JavaScript, HTML, and modern design principles.
            <br />
            I thrive in collaborative environments and am excited to contribute to innovative projects that aim to improve user experiences and foster community connections.
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
