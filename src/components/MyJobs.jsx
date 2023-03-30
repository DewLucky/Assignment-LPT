import React from 'react'
import ApplicationCard from './ApplicationCard'


export default function MyJobs(){

    const applicationList = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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
                    applicationList.map((e)=>{
                        return(
                            <ApplicationCard></ApplicationCard>
                        )
                    })
                }
            </div>
        </div>
    )
}