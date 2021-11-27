import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import React from 'react'

import Portfolio from '../components/Portfolio'
import ScrollButton from '../components/Scroll'
import Skills from '../components/Skills'
import '../styles/globals.css'

import Navbar from '../components/Navbar'


function MyApp({ 
  Component, pageProps }) 
  {

   
  return (
  <div>




     
    <Navbar/>
    <Intro/>
    <ScrollButton/>
    <Education/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default MyApp
