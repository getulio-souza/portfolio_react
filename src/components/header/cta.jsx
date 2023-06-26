import React from 'react'
import CV2023 from "../../assets/meus arquivos/cv_2023.pdf"

const cta = () => {
  return (
    <div className="cta">
      <a href={CV2023} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

export default cta