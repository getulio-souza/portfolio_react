import React from "react";
import "./services.css";
import { BsCodeSlash } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { useTranslation } from "react-i18next";


const servicesList = []

const Services = () => {

  const {t} = useTranslation();
  
  return (
    <section id="services">
      <h5>{t("SERVICES.HEADER.SUBTITLE")}</h5>
      <h2>{t("SERVICES.HEADER.TITLE")}</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <BsCodeSlash className="service__icon" />
            <h3>{t("SERVICES.WEB_DEVELOPMENT.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.WEB_DEVELOPMENT.DESCRIPTION")}</p>
          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <BiBookContent className="service__icon" />
            <h3>{t("SERVICES.LAYOUT_CREATION.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.LAYOUT_CREATION.DESCRIPTION")}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
