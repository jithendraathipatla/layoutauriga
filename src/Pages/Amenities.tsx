import React,{useEffect} from 'react';
import AmenitiesContent from '../Components/Amenities';
import Location from '../Components/Location';

const Amenities = () => {
    useEffect(() => {
        document.title="Prestige Waterford Amenities | Waterford Amenities | Apartments in Bangalore";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"90px"}}>
           <AmenitiesContent/>
           <br/>
           <hr/>
           <Location/>
           <br/>
        </div>
    );
};

export default Amenities;