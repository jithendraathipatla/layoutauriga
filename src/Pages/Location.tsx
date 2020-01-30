import React,{useEffect} from 'react';
import Locationabc from '../Components/Location';
import Title from '../Components/Title';

const Location = () => {
    useEffect(() => {
        document.title="Concorde Auriga Location | Concorde properties old madras road| New flats for sale in Bangalore";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
                      <div className="card cardabcd">
           <div style={{textAlign:"center"}}>
              <Title title="About Concorde Auriga Location"/>
            </div>
            <h1 style={{textAlign:"justify"}}>
            Concorde Auriga Location Old Madras Bombay Trunk Rd, Medahalli,Bangalore, Karnataka 560049.Old Madras Road, is the best spot to Investin Real home since it has effectively available to the IT organizations airterminal and zone resembles White-Field, Sarjapur, Marathalli, Indiranagar,MG Road, and Hebbal and so on What's more, contrasted with differentareas, the valuing in OMR is reasonable for first home purchasers andInvestors. 
                    
                    Truly you have alternatives like Concorde Auriga condo whereyou can purchase for end utilize or Invest on rentals or resale.
            </h1>
            </div>
            <br/>
           <Locationabc/>
           <br/>
        </div>
    );
};

export default Location;