import React from 'react'
import CV2024ENGLISH from "../../assets/meus arquivos/CV 2024 - Getulio (English).pdf";
import { useTranslation } from 'react-i18next';


const Cta = () => {

  const {t} = useTranslation();

  return (
    <div className="cta">
      <a href={CV2024ENGLISH} download className="btn">
        {t("HEADER.DOWNLOADCTA")}
      </a>
      {/* <a href={CV2024PORTUGUESE} download className="btn">
        Download CV - Portuguese
      </a> */}
      <a href="#contact" className="btn btn-primary">
        {t("HEADER.INVITETALK")}
      </a>
    </div>
  );
}

export default Cta