import React from 'react'
import CV2024ENGLISH from "../../assets/meus arquivos/CV 2024 - Getulio (English).pdf";
// import CV2024PORTUGUESE from "../../assets/meus arquivos/CV 2024 - Getulio (English).pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={CV2024ENGLISH} download className="btn">
        Download CV - English
      </a>
      {/* <a href={CV2024PORTUGUESE} download className="btn">
        Download CV - Portuguese
      </a> */}
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

export default Cta