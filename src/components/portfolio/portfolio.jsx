import React from 'react'
import "./portfolio.css"
// import {FOOD} from '../../assets/meus projetos/fast-food-store.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFSMGp_qBde8A/company-logo_200_200/0/1613531752461?e=2147483647&v=beta&t=FghrZH7Mymjvc638kbJu_YeMpHUTh9yVXV2vDKyJKmU" alt="" />
          </div>
          <h3>Frexco (Controle de estoque - React)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/app_frexco" className='btn' target="_blank">Github</a>
            <a href="https://getulio-souza.github.io/app_frexco/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQHwRB5CDzh8RA/company-logo_200_200/0/1630594505451?e=2147483647&v=beta&t=qcOaS39b9XXDU8bhSe8p1nuEHvbSGeHyB7B7X-6hSs0" alt="" />
          </div>
          <h3>One Blue App (React)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/One_Blue_App" className='btn' target="_blank">Github</a>
            <a href="https://github.com/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEDAQu6n6BL-Q/company-logo_200_200/0/1541078289374?e=2147483647&v=beta&t=h_POUBUr9UWwgUFFf3Zxs56isyvgPbajFY_YPOPZkkE" alt="" />
          </div>
          <h3>LogLife Logistica (React Native)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/appLogLife" className='btn' target="_blank">Github</a>
            <a href="https://www.youtube.com/watch?v=FdO5V3XHIMk" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://getulio-souza.github.io/traveller_fiap_bootstrap/img/traveller_logo.png" alt="" />
          </div>
          <h3>Traveller - FIAP</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/traveller_fiap_bootstrap" className='btn' target="_blank">Github</a>
            <a href="https://getulio-souza.github.io/traveller_fiap_bootstrap/img/traveller_logo.png" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="" />
          </div>
          <h3>Tailwind website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/tailwind_website" className='btn' target="_blank">Github</a>
            <a href="https://tailwind-first-project-lp.netlify.app/" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

        {/* project */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="https://images-americanas.b2w.io/marketplace/logo/grande/8417266000146.jpg" alt="" />
          </div>
          <h3>Mpozenato Móveis (LP)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/getulio-souza/mpozenato_lp" className='btn' target="_blank">Github</a>
            <a href="https://www.mpozenato.com.br/escritorio-e-home-office/monte-o-seu-home-office" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio