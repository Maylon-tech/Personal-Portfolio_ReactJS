import React, { useState } from 'react'
import '../../styles/Portfolio.css'
import LandingPage from './ProjectsLayout/LandingPage/LandingPage'
import Ecommerce from './ProjectsLayout/Ecommerce/Ecommerce'
import Dashboard from './ProjectsLayout/Dashboard/Dashboard'
import CrudOther from './ProjectsLayout/CrudOthers/CrudOther'
import PortfolioProj from './ProjectsLayout/PortfolioProj/PortfolioProj'

export const Portfolio = () => {
    const [activeTab, setActiveTab] = useState()

    const handleToggle = (index) => {
        setActiveTab(index)
    }


    return (
        <section className="portfolio" id='portfolio'>
            <div className="title">
                <h1>my work</h1>
            </div>

            <div className="menu-tabs">
                <ul>
                    <li
                        onClick={() => handleToggle(1)}
                        className={activeTab === 1 ? 'items active' : 'items'}
                    >
                        Landing Page
                    </li>

                    <li
                        onClick={() => handleToggle(2)}
                        className={activeTab === 2 ? 'items active' : 'items'}
                    >
                       Portfolio
                    </li>

                    <li
                        onClick={() => handleToggle(3)}
                        className={activeTab === 3 ? 'items active' : 'items'}
                    >
                        ECommerces
                    </li>

                    <li
                        onClick={() => handleToggle(4)}
                        className={activeTab === 4 ? 'items active' : 'items'}
                    >
                        Dashboards
                    </li>

                    <li
                        onClick={() => handleToggle(5)}
                        className={activeTab === 5 ? 'items active' : 'items'}
                    >
                        CRUD & Others
                    </li>

                </ul>
            </div>

            <div className="projects-container">
                <div>
                    { activeTab === 1 ? <LandingPage /> : null }
                </div>
                    
                <div>
                    { activeTab === 2 ? <PortfolioProj /> : null }
                </div>

                <div>
                    { activeTab === 3 ? <Ecommerce /> : null }
                </div>

                <div>
                    { activeTab === 4 ? <Dashboard /> : null } 
                </div>

                <div> 
                    { activeTab === 5 ? <CrudOther /> : null }
                </div>
            </div>
        </section>
    )
}