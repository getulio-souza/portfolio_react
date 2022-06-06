import React from 'react'
import "./services.css"
import {BsCodeSlash} from "react-icons/bs"
import {BiBookContent} from "react-icons/bi"

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <BsCodeSlash className="service__icon" />
            <h3>Web Development</h3>
          </div>
          <div className='service__list'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium atque impedit commodi. Voluptates, esse consequuntur? Deserunt commodi dignissimos similique beatae.</p>
          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <BiBookContent className="service__icon" />
            <h3>Content Creation</h3>
          </div>
          <div className='service__list'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium atque impedit commodi. Voluptates, esse consequuntur? Deserunt commodi dignissimos similique beatae.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default services