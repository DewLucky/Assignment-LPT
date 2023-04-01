import React from "react";
import rejection from '../../images/rejection.svg'

export default function ApplicationCard(props){

    console.log(props)
    const inVisible = {
        visibility: "hidden"
    }

    const visible = {
        visibility: "visible"
    }

    const styled = props.currentStage.isRejected ? visible: inVisible;
    const processing = props.currentStage.inProcess.processing;
    const imgSource = `../../images/`+ props.companyImage;


    return(

        <>

<div className="application-list-container">
                    
                    <div className="profile-details">
                        <div className="company-icon-container">
                            <img 
                            className="company-icon" 
                            src={imgSource} 
                            alt="" 
                            />
                        </div>
                        <div>
                            <p className="job-role">{props.role}</p>
                            <p className="applied-company">
                                {props.companyName}, 
                                <span>
                                    {props.isOnsite ? ` on site` : ` Work From Home`}
                                </span>
                            </p>
                            <p className="job-location">{props.location}</p>
                        </div>
                    </div>
                    <div className="salary-details-container">
                        <p className="salary-range">
                            ₹ {props.salaryRange.lower} - ₹ {props.salaryRange.upper}
                        </p>
                        <p className="salary-frequency">per month</p>
                    </div>
                    <div className="salary-status-container">
                        {props.currentStage.isRejected && <div className="salary-status btn btn-rejected">Rejected</div>}
                        {
                        processing && 
                        <div className="process-container">
                            <div className="salary-status btn btn-processing">In Process</div>
                            <p className="chances">{props.currentStage.inProcess.chances}% Chances</p>
                        </div>
                        }
                        
                        {props.currentStage.selected && <div className="salary-status btn btn-selected">Selected</div>}
                        {
                        <img 
                        className="rejection-info"
                        style={styled} 
                        src={rejection} 
                        alt="" />
                        }
                    </div>
                </div>
        
        </>
    )
}