import React from 'react'
import hamburger from '../../images/hamburger.svg'
import dashboard from '../../images/dashboard.svg'
import myjobsIcon from '../../images/jobs-icon.svg'
import messagesIcon from '../../images/messages.svg'
import calander from '../../images/calander.svg'
import logoutIcon from '../../images/logout.svg'

function Leftsidebar() {
    return (
        <section className='left-sidebar'>
            <div className="sidebar-items">

                <div className='hamburger-container'>
                    <img src={hamburger} alt="hamburger-icon" />
                </div>

                <div className='dashboard-container'>
                    <div className='dashboard-item'>
                        <img src={dashboard} alt="dashboard-icon" />
                        <p className="sidebar-title">Dashbaord</p>
                    </div>

                    <div className='dashboard-item'>
                        <img src={myjobsIcon} alt="jobs-icon" />
                        <p className="sidebar-title">My jobs</p>
                    </div>

                    <div className='dashboard-item'>
                        <img src={messagesIcon} alt="messages-icon" />
                        <p className="sidebar-title">Messages</p>
                    </div>

                    <div className='dashboard-item'>
                        <span className="unvisited">3</span>
                        <img src={calander} alt="calander-icon" />
                        <p className="sidebar-title">Upcoming <br /> Events</p>
                    </div>
                </div>

            </div>

            <div className='sidebar-items help-logout-container'>

                <div className='help-container'>
                    <button className="help-btn">HELP</button>
                </div>

                <div className='logout-container'>
                    <img src={logoutIcon} alt="logout-icon" />
                    <p className="sidebar-title">Logout</p>
                </div>
            </div>

        </section>
    )
}

export default Leftsidebar;