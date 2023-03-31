import React from 'react'

export default function FilterOption(){
    return(

        <>

            <div className="filter-option-container">

                <form className="grid-container filters-form">

                    <div className="grid-item">
                        <label htmlFor='ux-design' className="label-item">UX Design</label> 
                        <input type="checkbox" name="ux-design" id="ux-design" />
                    </div>
                   <div className="grid-item">
                        <label htmlFor='full-time' className="label-item">Full Time</label>
                        <input type="checkbox" name="full-time" id="full-time" />
                   </div>
                    <div className="grid-item">
                        <label htmlFor='on-site' className="label-item">On-Site </label>
                        <input type="checkbox" name="on-site" id="on-site" />
                    </div>
                    <div className="grid-item">
                        <label htmlFor='delhi-ncr' className="label-item">Delhi NCR</label>
                        <input type="checkbox" name="delhi-ncr" id="delhi-ncr" />
                    </div>
                    <div className="grid-item">
                        <label htmlFor='banglore' className="label-item">Banglore</label>
                        <input type="checkbox" name="banglore" id="banglore" />
                    </div>

                </form>

            </div>
        
        </>


    )
}