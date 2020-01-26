import React,{useEffect} from 'react';
import Locationabc from '../Components/Location';

const Location = () => {
    useEffect(() => {
        document.title="Prestige Waterford Location | Waterford Location | Best Apartments in Whitefield";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
           
           <Locationabc/>
           <br/>
        </div>
    );
};

export default Location;