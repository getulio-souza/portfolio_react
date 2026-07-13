import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  
  return (
    <footer>
  <a href="#" className="footer__logo">
    Getúlio Souza
  </a>

  <ul className="permalinks">
    <li>
      <a href="#">{t("FOOTER.LINKS.HOME")}</a>
    </li>

    <li>
      <a href="#about">{t("FOOTER.LINKS.ABOUT")}</a>
    </li>

    <li>
      <a href="#experience">{t("FOOTER.LINKS.EXPERIENCE")}</a>
    </li>

    <li>
      <a href="#services">{t("FOOTER.LINKS.SERVICES")}</a>
    </li>

    <li>
      <a href="#portfolio">{t("FOOTER.LINKS.PORTFOLIO")}</a>
    </li>

    <li>
      <a href="#contact">{t("FOOTER.LINKS.CONTACT")}</a>
    </li>
  </ul>


  {/* social */}
  <div className="footer__socials">

    <a 
      href="https://github.com/getulio-souza"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub />
    </a>

    <a 
      href="https://www.linkedin.com/in/getulio-souza/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillLinkedin />
    </a>

  </div>


  <div className="footer__copyright">
    <small>
      &copy; Getúlio Souza. {t("FOOTER.COPYRIGHT")}
    </small>
  </div>

</footer>
  );
};

export default Footer;
