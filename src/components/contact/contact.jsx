import React from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"
import { ImWhatsapp } from "react-icons/im"
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const {t} = useTranslation();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dzd0l2p', 'template_ix8bjzt', form.current, '8VJrPFt-2tLG8iELe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id="contact">
  <h5>{t("CONTACT.HEADER.SUBTITLE")}</h5>
  <h2>{t("CONTACT.HEADER.TITLE")}</h2>

  <div className="container contact__container">

    <div className="contact__options">

      {/* Email */}
      <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon" />

        <h4>{t("CONTACT.OPTIONS.EMAIL.TITLE")}</h4>

        <a 
          href="mailto:getuliosouza@live.com"
        >
          {t("CONTACT.OPTIONS.EMAIL.ACTION")}
        </a>
      </article>


      {/* LinkedIn */}
      <article className="contact__option">
        <AiFillLinkedin className="contact__option-icon" />

        <h4>{t("CONTACT.OPTIONS.LINKEDIN.TITLE")}</h4>

        <a 
          href="https://www.linkedin.com/in/getulio-souza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("CONTACT.OPTIONS.LINKEDIN.ACTION")}
        </a>
      </article>


      {/* WhatsApp */}
      <article className="contact__option">
        <ImWhatsapp className="contact__option-icon" />

        <h4>{t("CONTACT.OPTIONS.WHATSAPP.TITLE")}</h4>

        <a 
          href="https://api.whatsapp.com/send?phone=5511911591939"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("CONTACT.OPTIONS.WHATSAPP.ACTION")}
        </a>
      </article>

    </div>


    {/* Form */}
    <form ref={form} onSubmit={sendEmail}>

      <input
        type="text"
        name="name"
        placeholder={t("CONTACT.FORM.NAME_PLACEHOLDER")}
        required
      />

      <input
        type="email"
        name="email"
        placeholder={t("CONTACT.FORM.EMAIL_PLACEHOLDER")}
        required
      />

      <textarea
        name="message"
        rows={7}
        placeholder={t("CONTACT.FORM.MESSAGE_PLACEHOLDER")}
        required
      />

      <button type="submit" className="btn btn-primary">
        {t("CONTACT.FORM.SUBMIT_BUTTON")}
      </button>

    </form>

  </div>
</section>
  )
}

export default Contact