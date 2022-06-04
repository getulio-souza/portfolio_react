import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const headerSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/getulio-souza/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/getulio-souza" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default headerSocials