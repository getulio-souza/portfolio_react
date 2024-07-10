/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import myself from '../../assets/Minhas fotos/new professional photo 2022.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myself} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          {/* cards */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
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
            My name is Getúlio. I hold a degree in Journalism and a postgraduate
            degree in Content Marketing from Mackenzie University. Over the past
            three years, I transitioned to becoming a Front-end Developer by
            enrolling in Internet Systems at FIAP. I have experience working
            with Angular as an intern and I’m currently studying other
            frameworks, such as React, to enhance my skills and become a more
            well-rounded professional. I am dynamic, focused, and
            self-motivated.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
