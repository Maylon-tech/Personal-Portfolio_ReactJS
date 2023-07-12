import React from 'react'
import { Hero } from '../../components/HomeLayouts/Hero'
import { About } from '../../components/HomeLayouts/About'
import { Portfolio } from '../../components/HomeLayouts/Portfolio'
import { Contact } from '../../components/HomeLayouts/Contact'

const Home = () => {
  return (
    <>
       
        <div>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
        
    </>
  )
}

export default Home