import React from "react";
import "./portfolio.css";
// import {FOOD} from '../../assets/meus projetos/fast-food-store.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* project */}
        <article className="portfolio__item">
          <h3>Mobility (FIAP)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/cidade-acessivel-desafio-mobilidade-fiap"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://mobility-fiap.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Curso de SEO (Site de cursos - React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/curso_redacao_seo"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>Frexco (Controle de estoque - React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/app_frexco"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://getulio-souza.github.io/app_frexco/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>One Blue App (React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/One_Blue_App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>LogLife Logistica (React Native)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/appLogLife"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=FdO5V3XHIMk"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>Traveller - FIAP</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/traveller_fiap_bootstrap"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://gulliver-traveller-v1.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>Tailwind website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/tailwind_website"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://tailwind-first-project-lp.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <h3>Mpozenato Móveis (LP)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/mpozenato_lp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.mpozenato.com.br/escritorio-e-home-office/monte-o-seu-home-office"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
