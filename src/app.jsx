import React from 'react'
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import LangSwitcher from './shared/langSwitcher/LangSwitcher';

const app = () => {
  return (
    <>
      <article style={{position: "relative"}}>
        <LangSwitcher/>
        <div style={{marginTop: "4rem"}}>
          <Header />
          <Nav />
          <About/>
          <Experience/>
          <Services/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>
      </article>
     
    </>
  )
}

export default app