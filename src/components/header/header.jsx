import React from "react";
import "./header.css";
import CTA from "./cta";
import HeaderSocial from "./headerSocials";
import { useTranslation } from "react-i18next";


const Header = () => {

  const {t} = useTranslation()
  return (
    <header>
      <div className="container header__container">
        <h5>{t("HEADER.GREETING")}</h5>
        <h1>Getúlio Souza</h1>
        <h5 className="h5 text-light">Front-End Developer</h5>
        {/* buttons */}
        <HeaderSocial />
        <CTA />
      </div>
    </header>
  );
};

export default Header;
