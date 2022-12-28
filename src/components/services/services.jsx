import React from "react";
import "./services.css";
import { BsCodeSlash } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <BsCodeSlash className="service__icon" />
            <h3>Web Development</h3>
          </div>
          <div className="service__list">
            <p>
              Responsible for create and improve webpages and applications for
              companies by using front end tecnologies such as HTML, CSS,
              javascript, react and angular.
            </p>
          </div>
        </article>

        {/* <article className="service">
          <div className="service__head">
            <BiBookContent className="service__icon" />
            <h3>Content Creation</h3>
          </div>
          <div className="service__list">
            <p>
              Produção de conteúdo para lojas virtuais, prestadores de serviços
              e sites institucionais de pequenas, médias e grandes empresas.
            </p>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default services;
