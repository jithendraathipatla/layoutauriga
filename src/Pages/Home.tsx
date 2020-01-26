import React, {useEffect} from 'react';
import SliderComponent from '../Components/Slider';
import DescriptionComponent from '../Components/Description';
import OverView from '../Components/OverviewPart';
import TabelComponent from '../Components/Tabel';
import GalleryComponent from '../Components/Gallery';
import AmenitiesComponent from '../Components/Amenities';
import Location from '../Components/Location';
import Card from '../Components/Costing';


const Home = () => {
    useEffect(() => {
        document.title="Concorde Auriga | Old Madras Road | Medahalli | Bangalore | KR Puram";
        window.scrollTo(0,0);
     });
    return (
        <div>
            <div style={{marginTop:"-20px"}}>
            <SliderComponent/>
            </div>
            <div className="box">
            <DescriptionComponent/>
            <hr/>
            <OverView/>
            <hr/>
            <TabelComponent/>
            <hr/>
            <GalleryComponent/>
            <hr/>

            <Card/>
            <hr/>
            <AmenitiesComponent/>
            <hr/>
             <Location/>
            </div>
        </div>
    );
};

export default Home;