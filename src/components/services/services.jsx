import React from "react";
import "./services.css";
import { BsCodeSlash } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { MdBuild } from "react-icons/md";
import { FaGitAlt, FaGithub, FaPlug } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

import { FiFigma } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { TbBug, TbLayoutGridAdd } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";

import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbGridDots, TbDeviceDesktop } from "react-icons/tb";
import { TbGitBranch } from "react-icons/tb";
import { TbRefresh } from "react-icons/tb";

import { TbApi, TbWorldWww, TbBraces, TbShieldLock } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services">
      <h5>{t("SERVICES.HEADER.SUBTITLE")}</h5>
      <h2>{t("SERVICES.HEADER.TITLE")}</h2>

      <div className="container services__container">
        {/* web development */}
        <article className="service">
          <div className="service__head">
            <BsCodeSlash className="service__icon" />
            <h3>{t("SERVICES.WEB_DEVELOPMENT.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.WEB_DEVELOPMENT.DESCRIPTION")}</p>
          </div>

          {/* icons */}
          <div className="tech-stack">
            <span className="tech-item">
              <FaHtml5 />
              <span>HTML</span>
            </span>

            <span className="tech-item">
              <FaCss3Alt />
              <span>CSS</span>
            </span>

            <span className="tech-item">
              <IoLogoJavascript />
              <span>JavaScript</span>
            </span>

            <span className="tech-item">
              <FaReact />
              <span>React</span>
            </span>

            <span className="tech-item">
              <FaAngular />
              <span>Angular</span>
            </span>
          </div>
        </article>

        {/* layout */}
        <article className="service">
          <div className="service__head">
            <BiBookContent className="service__icon" />
            <h3>{t("SERVICES.LAYOUT_CREATION.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.LAYOUT_CREATION.DESCRIPTION")}</p>
          </div>
          <div className="tech-stack">

            <span className="tech-item">
              <FiFigma />
              <span>Figma</span>
            </span>

            <span className="tech-item">
              <BsGrid3X3Gap />
              <span>Wireframes</span>
            </span>

            <span className="tech-item">
              <MdOutlinePlayCircleOutline />
              <span>Auto Layout</span>
            </span>

            <span className="tech-item">
              <TbLayoutGridAdd />
              <span>UI Design</span>
            </span>
          </div>
        </article>

        {/* responsivo */}
        <article className="service">
          <div className="service__head">
            <MdDevices className="service__icon" />
            <h3>{t("SERVICES.RESPONSIVE.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.RESPONSIVE.DESCRIPTION")}</p>
          </div>
          <div className="tech-stack">
            
            <span className="tech-item">
              <FaCss3Alt />
              <span>Flexbox</span>
            </span>

            <span className="tech-item">
              <TbGridDots />
              <span>CSS Grid</span>
            </span>

            <span className="tech-item">
              <MdOutlinePlayCircleOutline />
              <span>Media Queries</span>
            </span>

            <span className="tech-item">
              <TbLayoutGridAdd />
              <span>Bootstrap</span>
            </span>

            <span className="tech-item">
              <SiTailwindcss />
              <span>Tailwind</span>
            </span>

          </div>
        </article>

        {/* Manutencao de sistemas */}
        <article className="service">
          <div className="service__head">
            <MdBuild className="service__icon" />
            <h3>{t("SERVICES.MAINTENANCE.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.MAINTENANCE.DESCRIPTION")}</p>
          </div>

          <div className="tech-stack">
            
            <span className="tech-item">
              <TbGitBranch />
              <span>Git</span>
            </span>

            <span className="tech-item">
              <TbRefresh />
              <span>GitHub</span>
            </span>

            <span className="tech-item">
              <TbBug />
              <span>Debugging</span>
            </span>

            <span className="tech-item">
              <TbRefresh   />
              <span>Refactoring</span>
            </span>

            <span className="tech-item">
              <TbRefresh  />
              <span>Bootstrap</span>
            </span>

            <span className="tech-item">
              <SiTailwindcss />
              <span>Clean Code</span>
            </span>

          </div>
        </article>

        {/* Api */}
        <article className="service">
          <div className="service__head">
            <FaPlug className="service__icon" />
            <h3>{t("SERVICES.API.TITLE")}</h3>
          </div>
          <div className="service__list">
            <p>{t("SERVICES.API.DESCRIPTION")}</p>
          </div>

          <div className="tech-stack">
            
            <span className="tech-item">
              <TbApi />
              <span>REST API</span>
            </span>

            <span className="tech-item">
              <FaExchangeAlt />
              <span>Axios</span>
            </span>

            <span className="tech-item">
              <TbBraces />
              <span>Fetch API</span>
            </span>

            <span className="tech-item">
              <TbBraces   />
              <span>JSON</span>
            </span>

            <span className="tech-item">
              <TbShieldLock  />
              <span>JWT</span>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
