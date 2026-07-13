/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./about.css";
import myself from '../../assets/Minhas fotos/new professional photo 2022.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

function About() {

  const {t} = useTranslation();

  return (
    <section id="about">
      <h5>{t("ABOUT.HEADER.SUBTITLE")}</h5>
      <h2>{t("ABOUT.HEADER.TITLE")}</h2>
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
              <h5>{t("ABOUT.CARDS.EXPERIENCE.TITLE")}</h5>
              <small>{t("ABOUT.CARDS.EXPERIENCE.VALUE")}</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t("ABOUT.CARDS.COMPANIES.TITLE")}</h5>
              <small>{t("ABOUT.CARDS.COMPANIES.VALUE")}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("ABOUT.CARDS.PROJECTS.TITLE")}</h5>
              <small>{t("ABOUT.CARDS.PROJECTS.VALUE")}</small>
            </article>
          </div>
          {/* end of cards */}
          {/* paragraphy */}
          <p>{t("ABOUT.DESCRIPTION.PARAGRAPH_1")}</p>
          <p>{t("ABOUT.DESCRIPTION.PARAGRAPH_2")}</p>
          <p>{t("ABOUT.DESCRIPTION.PARAGRAPH_3")}</p>
          <p>{t("ABOUT.DESCRIPTION.PARAGRAPH_4")}</p>

          <a href="#contact" className="btn btn-primary">
            {t("ABOUT.BUTTON.CONTACT")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
