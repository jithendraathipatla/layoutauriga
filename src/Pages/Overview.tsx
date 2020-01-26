import React,{useEffect} from 'react';
import DescriptionComponent from '../Components/Description';
import OverviewComponent from '../Components/OverviewPart';
import Location from '../Components/Location';

const Overview = () => {
    useEffect(() => {
        document.title=">Concorde Auriga | Bangalore |Concorde Auriga Review | Old Madras Road | Price";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
           <DescriptionComponent/>
           <br/>
           <OverviewComponent/>
           <br/>
           <Location/>
        </div>
    );
};

export default Overview;