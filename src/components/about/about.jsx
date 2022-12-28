/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
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
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          {/* cards */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>more than 1 year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>more than 2 in Brazil</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          {/* end of cards */}
          {/* paragraphy */}
          <p>
            I've worked as a Content Marketing Creator for about 4 years.
            Nowadays, I'm come back to college to become a front end develop. As
            a result, I'm stuying Systems for Internet at FIAP, a high end
            tecnology college based in São Paulo. I'm also working as an Intern
            Angular Front End Developer for an automation company. I'm always
            looking for new ways to improve myself as a programmer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
