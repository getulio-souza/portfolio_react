import React from "react";
import "./portfolio.css";
import rotaSegura from '../../assets/imagens/rota-segura.JPG'
import incor from "../../assets/imagens/incor.jpeg";
import mobilityLogo from "../../assets/imagens/icone-do-logo.jpg";
import redatorDeSucessoLogo from "../../assets/imagens/redator-de-sucesso.png";
import Frexco from "../../assets/imagens/frexco.png";
import oneBlugLogo from "../../assets/imagens/one-blue.jpg";
import logLife from "../../assets/imagens/log-life.jpg";
import travellerLogo from "../../assets/imagens/traveller_logo.png";
import mPozenato from "../../assets/imagens/mpozenato.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={incor} alt="" />
          </div>
          <h3>Trada - Heart Rate Monitoring</h3>
          {/* <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/rota-segura"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div> */}
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={rotaSegura} alt="" />
          </div>
          <h3>Rota Segura (FIAP)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/rota-segura"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mobilityLogo} alt="" />
          </div>
          <h3>Mobility (FIAP)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/cidade-acessivel-desafio-mobilidade-fiap"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://mobility-fiap.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={redatorDeSucessoLogo} alt="" />
          </div>
          <h3>Curso de SEO (Site de cursos - React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/curso_redacao_seo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://curso-redacao-seo.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Frexco} alt="" />
          </div>
          <h3>Frexco (Controle de estoque - React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/app_frexco"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="https://getulio-souza.github.io/app_frexco/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={oneBlugLogo} alt="" />
          </div>
          <h3>One Blue App (React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/One_Blue_App"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {/* <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logLife} alt="" />
          </div>
          <h3>LogLife Logistica (React Native)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/appLogLife"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=FdO5V3XHIMk"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={travellerLogo} alt="" />
          </div>
          <h3>Traveller - FIAP</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/traveller_fiap_bootstrap"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://gulliver-traveller-v1.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mobilityLogo} alt="" />
          </div>
          <h3>Tailwind website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/tailwind_website"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://tailwind-first-project-lp.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* project */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mPozenato} alt="" />
          </div>
          <h3>Mpozenato Móveis (LP)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/getulio-souza/mpozenato_lp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.mpozenato.com.br/escritorio-e-home-office/monte-o-seu-home-office"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
