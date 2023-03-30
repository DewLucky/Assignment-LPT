import React from "react";
import techmint from '../../images/techmint.jpg'
import rejection from '../../images/rejection.svg'

export default function ApplicationCard(){
    return(

        <>

<div className="application-list-container">
                    
                    <div className="profile-details">
                        <div className="company-icon-container">
                            <img className="company-icon" src={techmint} alt="" />
                        </div>
                        <div>
                            <p className="job-role">Product Designer</p>
                            <p className="applied-company">Techmint, <span>on site</span></p>
                            <p className="job-location">Bengaluru, India</p>
                        </div>
                    </div>
                    <div className="salary-details-container">
                        <p className="salary-range">₹ 50K - ₹ 70K</p>
                        <p className="salary-frequency">per month</p>
                    </div>
                    <div className="salary-status-container">
                        <div className="salary-status btn">Rejected</div>
                        <img className="rejection-info" src={rejection} alt="" />
                    </div>
                </div>
        
        </>
    )
}