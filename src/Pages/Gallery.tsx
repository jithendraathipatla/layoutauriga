import React,{useEffect} from 'react';
import GalleryComponent from '../Components/Gallery';
import Location from '../Components/Location';

const Gallery = () => {
    useEffect(() => {
        document.title="Prestige Waterford Gallery | Prestige Waterford Floor Plan | Waterford Master Plan";
        window.scrollTo(0,0);
     });
    return (
        <div className="box" style={{marginTop:"90px"}}>
            <GalleryComponent/>
            <br/>
            <hr/>
            <Location/>
        </div>
    );
};

export default Gallery;