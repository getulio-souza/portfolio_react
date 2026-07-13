import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const {t} = useTranslation();

  return (
    <section id="experience">
      <h5>{t("EXPERIENCE.HEADER.SUBTITLE")}</h5>
      <h2>{t("EXPERIENCE.HEADER.TITLE")}</h2>
      <div className="container experience__container">
        {/* Frontend skills */}
        <div className="experience__frontend">
          <h3>{t("EXPERIENCE.FRONTEND.TITLE")}</h3>
          <div className="experience__content">
            {/* HTML */}
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("EXPERIENCE.LEVELS.EXPERIENCED")}</small>
              </div>
            </article>
            {/* CSS */}
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">{t("EXPERIENCE.LEVELS.EXPERIENCED")}</small>
              </div>
            </article>
            {/* SCSS */}
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
              </div>
            </article>
            {/* Bootstrap */}
            <article className="experience__details">
              <BsFillBootstrapFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
              </div>
            </article>
            {/* Figma */}
            <article className="experience__details">
              <FiFigma className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">{t("EXPERIENCE.LEVELS.INTERMEDIATE")}</small>
              </div>
            </article>
            {/* Javascript */}
            <article className="experience__details">
              <DiJavascript className="experience__details-icon" />
              <h4>Javascript</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.EXPERIENCED")}</small>
            </article>
            {/* React */}
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <h4>React</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
            </article>
            {/* Angular */}
            <article className="experience__details">
              <FaAngular className="experience__details-icon" />
              <h4>Angular</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.EXPERIENCED")}</small>
            </article>
          </div>
        </div>
        {/* end of Backend skills */}

        {/* Frontend skills */}
        <div className="experience__backend">
          <h3>{t("EXPERIENCE.BACKEND.TITLE")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiPhp className="experience__details-icon" />
              <h4>PHP</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <h4>MySQL</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
            </article>
            <article className="experience__details">
              <DiJava className="experience__details-icon" />
              <h4>Java</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
            </article>
            <article className="experience__details">
              <DiNodejs className="experience__details-icon" />
              <h4>Node</h4>
              <small className="text-light">{t("EXPERIENCE.LEVELS.BASIC")}</small>
            </article>
          </div>
          {/* end of Frontend skills */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
