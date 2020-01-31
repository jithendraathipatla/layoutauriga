import React from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';
 
const Finalscreen = () => {
    return (
        <div style={{textAlign:"center"}}>
            <Title title="Thank you for submitting your details"/>
            <br/>
            <a href="https://drive.google.com/open?id=1Qf1ftT3t1EHLN9cdxjLiaIFAsMCS5yl4">Download Brouchere</a>
            <br/>
            <a href="https://drive.google.com/open?id=10MFgV_joBKJsfkIDIeasShVqMbWbxWyC">Download Costsheet</a>
            <div>
               <Link to="/"><button className="tabelbutton">Home</button></Link> 
            </div>
        </div>
    );
};

export default Finalscreen;