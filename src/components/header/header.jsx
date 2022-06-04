import React from 'react'
import "./header.css"
import CTA from './cta'
import Myself from "../../assets/Minhas fotos/photo-1.jpg"
import HeaderSocial from './headerSocials'
import {VscFoldDown} from "react-icons/vsc"

const header = () => {
  return (
    <header>
      <div className="container header__container">
       <h5>Hello, my name is </h5>
        <h1>Getúlio Souza</h1>
        <h5 className="h5 text-light">React Front-End Developer</h5>
        {/* buttons */}
       <HeaderSocial/>
        <CTA />
        {/* profile photo*/}
        <div className="me">
          <img src={Myself} alt="my profile picture" className='profile_photo' />
        </div>
        <a href="#contact" className='scroll__down'><VscFoldDown/></a>
      </div>
    </header>
  )
}

export default header