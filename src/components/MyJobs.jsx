import React from 'react'
import ApplicationCard from './ApplicationCard'
import applicationsData from '../data/applicationsData';


export default function MyJobs(){

    const applicationData = applicationsData;

    return(
        <div className="myjobs">
            <div className="myjobs-container">
                <div className="myjobs-title-container">
                    <h2>My Jobs</h2>
                </div>
                <div className="job-search-status">
                        <p>Job Search Status</p>
                        <div className="job-status">
                            <div className="status-icon"></div>
                            <select className="selected-job-status">
                                <option value="Actively Interviewing">Actively Interviewing</option>
                            </select>
                        </div>
                </div>
            </div>
            <div className="applications-container">
                <h2 className="applications-title">Applications</h2>
                {
                    applicationData.map((application)=>{
                        return(
                            <ApplicationCard
                            companyImage = {application.companyImage}
                            role = {application.role}
                            isOnsite = {application.isOnsite}
                            companyName = {application.companyName}
                            location = {application.location}
                            salaryRange = {application.salaryRange}
                            currentStage = {application.currentStage}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}