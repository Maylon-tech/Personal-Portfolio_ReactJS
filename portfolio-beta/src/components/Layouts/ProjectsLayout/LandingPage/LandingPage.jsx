import React from 'react'
import '../ProjectLayout.css'

const LandingPage = () => {
  return (
    <div className='container-project'>

        <div className="item-box projLanding">
          <div className="content-image">
            Image
          </div>
          <div className="content-info">
            Info - hover
          </div>
        </div>

        <div className="item-box projLanding">
          <div className="content-image">
            Image
          </div>
          <div className="content-info">
            Info - hover
          </div>
        </div>

        <div className="item-box projLanding"><h2>Projeto 03</h2></div>

        <div className="item-box projLanding"><h2>Projeto 04</h2></div>

        <div className="item-box projLanding"><h2>Projeto 05</h2></div>

        <div className="item-box projLanding"><h2>Projeto 06</h2></div>

    </div>
  )
}

export default LandingPage