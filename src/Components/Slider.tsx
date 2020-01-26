import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import FirstSliderImage from '../Images/exterior_new3.jpg';
import SecondSliderImage from '../Images/exterior_new2.jpg';
import ThirdSliderImage from '../Images/exterior_new4.jpg';
import FourthSliderImage from '../Images/exterior_new1.jpg';

const Slider = () => {
    return (
        <div>
           <AwesomeSlider style={{height:"75vh"}}>
             <div data-src={FirstSliderImage} />
             <div data-src={SecondSliderImage} />
             <div data-src={ThirdSliderImage} />
             <div data-src={FourthSliderImage} />
            </AwesomeSlider> 
        </div>
    );
};

export default Slider;