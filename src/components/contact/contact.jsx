import React from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"
import {ImWhatsapp} from "react-icons/im"

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          {/* contact option */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h6>getuliosouza@live.com</h6>
            <a href="mailto:getuliosouza@live.com" target="_blank">Send me a message</a>
          </article>

          {/* contact option */}
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h6>https://www.linkedin.com/in/getulio-souza/</h6>
            <a href="https://www.linkedin.com/in/getulio-souza/" target="_blank">Send me a message</a>
          </article>

          {/* contact option */}
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=5511968154881" target="_blank">Send me a message</a>
          </article>

        </div>
          {/* form */}
        <form action="">
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name='email' placeholder='your e-mail' required />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
          </form>
      </div>
    </section>
  )
}

export default contact