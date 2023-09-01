import React from 'react'
import '../../styles/About.css'
import AboutImage from '../../assets/images/About2.jpg'


export const About = () => {
    return (
        <section className='about' id='about'>
            <div className="title">
                <h1>About Me</h1>
            </div>

            <div className="contents">
                <div className='imageContent'>
                    <img src={AboutImage} alt="nemoto" />
                </div>

                <div className='info-content'>
                    <h1>Hello, I'm Mailon</h1>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio eaque commodi necessitatibus optio dolor amet ipsam expedita 
                        unde quia repudiandae delectus perferendis, error ipsa quis numquam temporibus molestias,
                        asperiores id. Minima aliquam sapiente veritatis asperiores.
                    </p>

                    <div className="info-details">
                        <div className="info-key">
                            <span>Name</span>
                            <span>Location</span>
                            <span>Phone</span>
                            <span>Email</span>
                            <span>Website</span>
                        </div>
                        <div className="info-value">
                            <span>Nemoto Mailon</span>
                            <span>Aichi0-ken, Japan</span>
                            <span>70 8329 6520</span>
                            <span>techflow258@gmail.com</span>
                            <span>www.nemotoDevPort.com</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button>CV</button>
                        <button>Send a Message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}