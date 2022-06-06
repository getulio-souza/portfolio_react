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
              <h5>Experience</h5>
              <small>+1 year working</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2+ in Brazil</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          {/* end of cards */}
          {/* paragraphy */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste libero facere possimus dignissimos animi! Earum beatae aperiam minima dolorem veniam natus officia unde, reprehenderit cumque quidem explicabo eligendi eaque animi?</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about