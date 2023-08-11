import React from 'react'
import '../../styles/Hero.css'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import HeroImg from '../../assets/images/hero-img.png'

export const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <div className='hero-content'>
                <div className="left-content">
                    <h3 className="small-title">Hello My Name is Mailon</h3>
                    <h1 className="title">I'm ReactJS Front-End Developer</h1>

                    <p className="desc">
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at
                    </p>

                    <button className="cv-down">
                        <span>Download CV</span>
                        <AiOutlineCloudDownload className='iconBtnHero' />
                    </button>
                </div>

                <div className="right-content">
                    <img src={HeroImg} alt="maylon" className="hero-img" />
                </div>
            </div>
        </section>
    )
}