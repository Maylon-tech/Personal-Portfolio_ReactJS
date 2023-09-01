import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TemplateDefault = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='main-content'>
          { children }
      </div>
      <Footer />
    </>
  )
}

export default TemplateDefault