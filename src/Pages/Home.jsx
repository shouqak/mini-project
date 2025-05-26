import React from 'react'
import Nav from '../Component/Nav'
import Hero from '../Component/Hero'
import CalculateBMI from '../Component/calculateBMI'
import Footer from '../Component/Footer'
function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <CalculateBMI/>
    <Footer/>
    </>
  )
}

export default Home