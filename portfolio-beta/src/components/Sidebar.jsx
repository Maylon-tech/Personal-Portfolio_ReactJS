import React from 'react'


import '../styles/Sidebar.css'

const Sidebar = ({ control }) => {

    
  return (
    <div className={control ? "sidebar" : 'hide'}>
        <h2>Sideebar Layout</h2>
    </div>
  )
}

export default Sidebar