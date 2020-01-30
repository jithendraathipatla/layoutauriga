import React,{useEffect} from 'react';
import AmenitiesContent from '../Components/Amenities';
import Location from '../Components/Location';
import Title from '../Components/Title';

const Amenities = () => {
    useEffect(() => {
        document.title="Specifications Concorde Auriga | AurigaAmenities | Concorde";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
          <div className="card cardabcd">
            <div style={{textAlign:"center"}}>
              <Title title="About Concorde Auriga Amenities"/>
            </div>
            <h1>
            Concorde Auriga Specifications and Quality Are An Important Decision Of Assessing The Quality Of A Company.
                     Concorde Auriga Has Many Interweaved Facilities That Render It The Perfect Place To Stay In Luxury.
                      The Services Are Designed Which Allows People To Have More Of Family Time And Commuting To Simple Public Requirements Or Far-Off Areas.
                       This Includes Landscaped Gardens To Bring In Fresh Air To The House. 
                    Draw in Yourself In A Pollution-Free And Healthy Life Zone, As It Is Enveloped By Green Surroundings.
                    
                    <br/>
                    <br/>
                    Concorde Auriga Amenities Includes A Swimming Pool For All The Ages To Relax And Refresh From The Toil Of The Workplace, Spacious Children's Play Area Will Allow Your Children To Enjoy
                     And Stop Worrying About It. The Project Includes A Well-Furnished Gymnasium To Improve Health Programs,
                      Along With A Special Senior Citizen Built For The Old To Enjoy. 
                      A Library Was Designed To Fit In The Property And Preserve Your Learning Skills In Order To Plunge Your Head Into The World Of Literature And Information. A Clubhouse Is Set Up To Hold Monthly Or Daily Activities, Cafe To Spend Your Precious Time With Friends And Family, Recreational Facilities, Jogging Path, A Meditation Deck, And Beautifully Manicured Gardens To Give A Peaceful Feel So That People Can Enjoy Living In An Environment Friendly Atmosphere. The Area Is Well-Planned With Indoor Sports Such As TT, Chess, Carom, Air Hockey, And Foosball. The Business Center Is Designed For The Needs And Requirements Of Your Business. 
                    The Entire Enclave Is RCC Designed, To Relieve The Inhabitants From Regular Upkeep Of Maintenance.
            </h1>
            </div>
            <br/>
        
           <AmenitiesContent/>
           <br/>
           <hr/>
           <Location/>
           <br/>
        
        </div>
    );
};

export default Amenities;
