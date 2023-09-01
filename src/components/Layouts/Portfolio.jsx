import React from 'react'
import '../../styles/Portfolio.css'

export const Portfolio= () => {
    return (
        <section className="portfolio" id='portfolio'>
            <div className="title">
                <h1>my work</h1>
            </div>

            <div className="menu-tabs">
                <ul>
                    <li className='active'>All</li>
                    <li>Landing Page</li>
                    <li>ECommerces</li>
                    <li>Dashboards</li>
                    <li>CRUD & Others</li>
                </ul>
            </div>

            <div className="projects-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}