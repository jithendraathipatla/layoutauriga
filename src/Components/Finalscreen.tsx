import React from 'react';
import Title from './Title';
import {Link, BrowserRouter} from 'react-router-dom';
 
const Finalscreen = () => {
    return (
    
        <div style={{textAlign:"center"}}>
            <BrowserRouter>
            <Title title="Thank you for submitting your details"/>
            <br/>
            <a href="https://drive.google.com/open?id=1Qf1ftT3t1EHLN9cdxjLiaIFAsMCS5yl4">Download Brouchere</a>
            <br/>
            <a href="https://drive.google.com/open?id=10MFgV_joBKJsfkIDIeasShVqMbWbxWyC">Download Costsheet</a>
            <br/>
            <div>
               <Link to="/"><button className="tabelbutton">Home</button></Link>
              
            </div>
            </BrowserRouter> 
        </div>
    );
};

export default Finalscreen;