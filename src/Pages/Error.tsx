import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
    useEffect(() => {
        window.scrollTo(0,0);  
    })
    return (
        <div style={{marginTop:"80px"}}>
            <div className="card" style={{height:"73vh", textAlign:"center", paddingTop:"27vh"}}>
               <h1 style={{fontSize:"20px"}}>Opps You have landed Into the wrong Page!!</h1>
               <br/>
               <button className="button is-success"><Link to="/" style={{color:"white"}}>Home</Link></button>
            </div>
        </div>
    );
};

export default Error;