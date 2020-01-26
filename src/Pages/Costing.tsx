import React, {useEffect} from 'react';
import Location from '../Components/Location';
import Costingabc from '../Components/Costing';

const Costing = () => {
    useEffect(() => {
        document.title="Prestige Waterford Price | Starting Price of Prestige waterford | 2,3,& 4 BHK Apartments in Bangalore";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
          
           <Costingabc/>
            <br/>
            <hr/>
            <Location/>
        </div>
    );
};

export default Costing;