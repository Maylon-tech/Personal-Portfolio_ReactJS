import React, { useState } from 'react'
import '../styles/Navbar.css'
import Sidebar from './Sidebar'
import logo from '../assets/images/Logo-removebg-preview.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {    
    const [isActive, setIsActive] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const handleNavbarMenu = () => {
        setIsActive(!isActive)
    }

    // const handleSidebar = () => {
    //     alert("ok")
    //     setSidebar(!sidebar)
    // }

        return (
           
                <nav>
                    <a href="#hero">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    </a>

                    <div>
                        <ul className={isActive ? 'showMenu' : 'navbar'}>
                            <li>
                                <a href="#hero">Home</a>
                            </li>                            
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div  className='mobile'>
                        <button onClick={handleNavbarMenu}>
                            <AiOutlineMenu />
                        </button>
                    </div>

                    { sidebar && <Sidebar control={setSidebar} />}
                </nav>
            
        )
    
}

export default Navbar