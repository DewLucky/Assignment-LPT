import React from "react";
import JobSearch from "./JobSearch";
import MyJobs from "./MyJobs";
import Suggested from "./Suggested";
import Upcoming from "./Upcoming";

const Main = () => {

    const [appliedFilter, setAppliedFilter] = React.useState([]);

    // console.log(cities);

    function handleSelect(event){
        // console.log("something changed")
        // console.log(event.target)
        const {name, value, type} = event.target;
        // console.log(name)
    }



  return (
<section className="main-section">
    <div className="flex-container">
        <div className="left">
        <JobSearch></JobSearch>
        <MyJobs></MyJobs>
        </div>
        <div className="right">
        <Suggested></Suggested>
        <Upcoming></Upcoming>
        </div>
    </div>
</section>
  );
};

export default Main;
