import React from 'react'
import pesto from '/images/pesto.svg'

export default function Upcoming(){
    return(

        <>
        
        <div className="upcoming-events-section">
            <h2>Upcoming Events</h2>
            <div className="options">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="upcoming-container">
                <div className="event-month-container">
                    <select>
                        <option value="August">August 2022</option>
                    </select>
                </div>
                <div className="upcoming-card-container">
                    <div className="event-card">
                        <div className="company">
                            <div className="company-name">
                                <img src={pesto} alt="" />
                            </div>
                            <p>Pesto</p>
                        </div>
                        <div className="event-info">
                            <p className="event-name">Portfolio Presentation</p>
                            <p className="event-date">Tommorrow</p>
                            <p className="event-timing">9:00 AM - 11:00s AM</p>
                        </div>
                    </div>
                    <div className="event-card">
                        <div className="company">
                            <div className="company-name">
                                <img src={pesto} alt="" />
                            </div>
                            <p>Vernacular.Ai</p>
                        </div>
                        <div className="event-info">
                            <p className="event-name">Portfolio Presentation</p>
                            <p className="event-date">25th August, 2022</p>
                            <p className="event-timing">9:00 AM - 10:00s AM</p>
                        </div>
                    </div>
                    <div className="event-card">
                        <div className="company">
                            <div className="company-name">
                                <img src={pesto} alt="" />
                            </div>
                            <p>Groww</p>
                        </div>
                        <div className="event-info">
                            <p className="event-name">Portfolio Presentation</p>
                            <p className="event-date">29th August, 2022</p>
                            <p className="event-timing">2:00 AM - 4:00s AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}