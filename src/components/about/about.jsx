import React from 'react';
import "./about.css";
import ME from "../../assets/Minhas fotos/photo-2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image"/>
          </div>
        </div>
        <div className="about__content">
            {/* cards */}
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experiência</h5>
              <small>+ de 1 ano</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clientes</h5>
              <small>2+ no Brasil</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          {/* end of cards */}
          {/* paragraphy */}
          <p>Sou formado em Jornalismo com pós graduação em Marketing de Conteúdo pela Universidade Presbiteriana Mackenzie. Já trabalhei como redator por mais de 4 anos, produzindo conteúdos para empresas dos segmentos B2B E B2C. Atualmente estudo Sistemas para internet na FIAP como o objetivo de me tornar um desenvolvedor Front End.</p>
          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default about