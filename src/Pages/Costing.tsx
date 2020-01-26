import React, {useEffect} from 'react';
import Location from '../Components/Location';
import Costingabc from '../Components/Costing';
import Title from '../Components/Title';

const Costing = () => {
    useEffect(() => {
        document.title="Concorde Auriga price | Apartments at KR Puram | 3 bhk for sale in whitefield";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
            <div style={{textAlign:"center"}}>
              <Title title="About Concorde Auriga Price"/>
            </div>
            <h1 style={{textAlign:"justify"}}>
            Get Updated Concorde Auriga Prices and More, Regardless of whether you're On the SoftwareMarket or Buying a Coffee Pot, Finding the Best Price Is a Natural Part of the Purchase Decisionof Any Consumer. Value Concorde Auriga Is Affordable And Is In Line With The Option OfAffordability Of The Consumer And Improved Living Standards In Surrounding Areas.Concorde Auriga Is The Best Choice For Luxury Hunters. Concorde Auriga Is An AttractiveInvestment For Wise Buyers Who Want To Own A Residence In Bangalore's GrowingCommercial Area, Medahalli KR Puram. Concorde Auriga Strives To Provide Its ProspectiveBuyers With The Finest And Comfortable Amenities. The Quality of Concorde AurigaMedahalli, With Rising Land Values Surrounding the Site. 
                    Makes It Ideal To Buy The PropertyNow At The Pre-Launch Price.
            </h1>
            <br/>
            <hr/>
           <Costingabc/>
            <br/>
            <hr/>
            <Location/>
        </div>
    );
};

export default Costing;