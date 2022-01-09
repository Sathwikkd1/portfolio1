import Head from 'next/head'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import React from 'react'
import Portfolio from '../components/Portfolio'
import ScrollButton from '../components/Scroll'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
  <div>
      <Head>
        <title>Portfolio</title>
        < meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio" />
        
        <link rel="icon" href="/icon.PNG" />
      </Head>

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

     
    </div>
  )
}
