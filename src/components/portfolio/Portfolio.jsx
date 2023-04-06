import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Title for project 1",
    github: "https://githib.com",
    demo: "https://netlify.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Title for project 2",
    github: "https://githib.com",
    demo: "https://netlify.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Title for project 3",
    github: "https://githib.com",
    demo: "https://netlify.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
