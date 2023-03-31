import React from "react";
import location from '../../images/location.svg'
import cities from "../cities";
import FilterOption from "./FilterOptions";


export default function JobSearch(){

    const [isFilterVisible, SetFilterVisible] = React.useState(false);

    const cityList = cities.map((cities)=>{return cities.name}).sort()

    function handleMouseClick(){
        SetFilterVisible(prev => !prev);
    }

    return(

        <>
        <div className="job-search-container">
            <h2 className="customer-name">Search for jobs</h2>
            <form className="search-filter-container">
                <div className="input-container">
                    <svg className="search-icon" width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1761 22.5714C16.4609 22.5714 20.7451 17.819 20.7451 11.9567C20.7451 6.09436 16.4609 1.34201 11.1761 1.34201C5.89125 1.34201 1.60706 6.09436 1.60706 11.9567C1.60706 17.819 5.89125 22.5714 11.1761 22.5714Z" stroke="#5B5B5B" stroke-width="2.3709" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.1374 25.225L17.9342 19.4533" stroke="#5B5B5B" stroke-width="2.3709" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Search by Job title, company, keywords"/>
                </div>
                <div className="location-container">
                    <img src={location} alt="location" />
                    <select 
                        name="" 
                        // onChange={handleSelect}
                        value=""
                    >
                        <option value="Anywhere" selected>Anywhere</option>
                        {cityList.map((city) => <option>{city}</option>)}
                    </select>
                 
                </div>
                <div className="filters-container">
                    <div className="filter-icon-container" onClick={handleMouseClick}>
                        <svg className="filters-icon" width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.334656" y="0.898132" width="26.1214" height="2.05143" rx="1.02571" fill="#D9D9D9"/>
                        <rect x="3.61693" y="6.15039" width="19.5569" height="2.05143" rx="1.02571" fill="#D9D9D9"/>
                        <rect x="9.60966" y="11.4027" width="7.57139" height="2.05143" rx="1.02571" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    <p>filters</p>
                    <span>5</span>
                </div>
                {isFilterVisible && <FilterOption/>}
            </form>
            <div className="applied-filter-container">
                <div className="applied-filter">
                    <div className="remove-filter">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="-0.5" x2="13.6597" y2="-0.5" transform="matrix(0.663 0.74862 -0.73761 0.675227 1.1087 1.31201)" stroke="black" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="13.6597" y2="-0.5" transform="matrix(0.663 -0.74862 0.73761 0.675227 1.48053 11.9122)" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p className="filter-title">UX Design</p>
                </div>
                <div className="applied-filter">
                    <div className="remove-filter">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="-0.5" x2="13.6597" y2="-0.5" transform="matrix(0.663 0.74862 -0.73761 0.675227 1.1087 1.31201)" stroke="black" stroke-linecap="round"/>
                        <line x1="0.5" y1="-0.5" x2="13.6597" y2="-0.5" transform="matrix(0.663 -0.74862 0.73761 0.675227 1.48053 11.9122)" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p className="filter-title">Full Time</p>
                </div>
            </div>
        </div>
    </>
    )
}