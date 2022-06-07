import React from "react";
import "./footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Getúlio Souza
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* social */}
      <div className="footer__socials">
        <a href="https://github.com/getulio-souza">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/getulio-souza/">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Getúlio Souza. All Rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
