import React, {useState, useEffect} from 'react';
import Location from '../Components/Location';
import Title from '../Components/Title';
import MasterplanImage from '../Images/gallery/Auriga-master.jpg';
import LightHouse from '../Components/Lighthouse';

const MasterPlanabcd = () => {
    const [state, setstate] = useState([
        {
            image: MasterplanImage,
          }]
    )

    useEffect(() => {
        document.title="Concorde Auriga Master Plan| Auriga Master Plan| Masterplan";
        window.scrollTo(0,0);    
    });

    return (
        <div>
            
            <div className="box" style={{marginTop:"82px"}}>
                      <div className="card cardabcd">
            <div style={{textAlign:"center"}}>
              <Title title="Concorde Master Plan"/>
            </div>
            <h1 style={{textAlign:"justify"}}>
            Get Updated Concorde Auriga Prices and More, Regardless of whether you're On the SoftwareMarket or Buying a Coffee Pot, Finding the Best Price Is a Natural Part of the Purchase Decisionof Any Consumer. Value Concorde Auriga Is Affordable And Is In Line With The Option OfAffordability Of The Consumer And Improved Living Standards In Surrounding Areas.Concorde Auriga Is The Best Choice For Luxury Hunters. Concorde Auriga Is An AttractiveInvestment For Wise Buyers Who Want To Own A Residence In Bangalore's GrowingCommercial Area, Medahalli KR Puram. Concorde Auriga Strives To Provide Its ProspectiveBuyers With The Finest And Comfortable Amenities. The Quality of Concorde AurigaMedahalli, With Rising Land Values Surrounding the Site. 
                    Makes It Ideal To Buy The PropertyNow At The Pre-Launch Price.
            </h1>
            </div>
            <br/>
           
            <div>
            <div style={{textAlign:"center"}}>
              <Title title="Concorde Master Plan"/>
            </div>
            <div style={{marginLeft:"36%"}}>
            <LightHouse images={[MasterplanImage]} state={state}/>
            </div>
            </div>
          
            <br/>
            <hr/>
            <Location/>
        </div>
        </div>
    );
};

export default MasterPlanabcd;