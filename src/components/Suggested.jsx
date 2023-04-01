import React from 'react'
import sessions from '/images/sessions.svg'

export default function Suggested(){
    return(
        <>
        <div className="suggested-sessions-container">
            <div className="options">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="suggested-sessions-img-container">
                <img src={sessions} alt="" />
            </div>
            <div className="suggested-session-title-container">
                <h3>Suggested Sessions</h3>
                <p className="see-all">See all</p>
            </div>
            <div className="session-card-container">
                <div className="session-info-card">
                    <div className="session-info">
                        <p className="session-name">Mock Interview</p>
                        <p className="session-date">24th August, 2022</p>
                        <p className="session-timing">(9:00 AM - 11:00 AM)</p>
                    </div>
                    <button className="enroll-btn">Enroll Now</button>
                </div>
                <div className="session-info-card">
                    <div className="session-info">
                        <p className="session-name">Mock Interview</p>
                        <p className="session-date">24th August, 2022</p>
                        <p className="session-timing">(9:00 AM - 11:00 AM)</p>
                    </div>
                    <button className="enroll-btn">Enroll Now</button>
                </div>
                <div className="session-info-card">
                    <div className="session-info">
                        <p className="session-name">Mock Interview</p>
                        <p className="session-date">24th August, 2022</p>
                        <p className="session-timing">(9:00 AM - 11:00 AM)</p>
                    </div>
                    <button className="enroll-btn">Enroll Now</button>
                </div>
            </div>
        </div>
        </>
    )
}