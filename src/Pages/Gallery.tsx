import React,{useEffect} from 'react';
import GalleryComponent from '../Components/Gallery';
import Location from '../Components/Location';
import Title from '../Components/Title';

const Gallery = () => {
    useEffect(() => {
        document.title="Concorde Auriga Gallery | Concorde Auriga Apartments | Concorde Auriga Floor Plan";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"82px"}}>
             <div className="card cardabcd">
             <div style={{textAlign:"center"}}>
              <Title title="About Concorde Auriga Gallery"/>
            </div>
            <h1 style={{textAlign:"justify"}}>
            Concorde Auriga Gallery:,When Heading Through Investment Decisions, The Prominent Thing.
                     Individuals Are Often Uncertain About Whether To Buy A Property From An Existing Area Or A New One. 
                     Individuals Are Urged To Prefer Investing In Developing Sites, Existing Leading Sites. Since Rates Are Marginal In Developing Markets, There Is Room For Development With Regard To Land Value. It Is A Threat To Invest In Developed Areas As The Region Has Reached The Peak. Until Jumping To Conclusions, A Site Visit Before Position Is Necessary. 
                    Welcome To Concorde Auriga Gallery
            </h1>
            </div>
            <br/>
            

            <GalleryComponent/>
            <br/>
            <hr/>
            <Location/>
        </div>
    );
};

export default Gallery;