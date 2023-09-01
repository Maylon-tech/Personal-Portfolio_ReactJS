import React from 'react'
import { Hero } from '../../components/Layouts/Hero'
import { About } from '../../components/Layouts/About'
import { Portfolio } from '../../components/Layouts/Portfolio'
import { Contact } from '../../components/Layouts/Contact'

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