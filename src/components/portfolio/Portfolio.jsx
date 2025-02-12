import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/guess-the-number.png";
import IMG2 from "../../assets/Forkify.png";
import IMG3 from "../../assets/doneUndone.png";
import IMG4 from "../../assets/mrPipe.png";
import IMG5 from "../../assets/Encore.png";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Guess The Number",
    subtitle: "HTML5, CSS, JavaScript",
    github: "https://github.com/ivonamojsovska/guess-the-number",
    demo: "https://guess-the-number-ivona.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Forkify Recipes",
    subtitle: "HTML5, SCSS, JavaScript, RESTful API",
    github: "https://github.com/ivonamojsovska/forkify",
    demo: "https://forkify-ivona.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "DoneUndone",
    subtitle: "React, NextJS, Mongoose",
    github: "https://github.com/ivonamojsovska/next-app",
    demo: "https://next-app-xt4h.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Mr. Pipe Plumbing Website",
    subtitle: "React, TailwindCSS",
    github: "https://github.com/ivonamojsovska/mrpipe",
    demo: "https://www.mrpipeplumbing.co/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Encore AI for Music Artists",
    subtitle: "NextJS, TypeScript, API, TailwindCSS, AI",
    github: "Private Repo",
    demo: "https://app.encorestudio.ai/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some Of My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, subtitle, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{subtitle}</h5>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
