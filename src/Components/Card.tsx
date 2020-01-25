import React from 'react';
import Modal from '../Components/Modal';

const Card = (props:any) => {
    return (
    <div className="box">
     <div className="media-content">
      <div className="content" style={{textAlign:"center", padding:"40px 0px"}}>
        <h1 style={{fontSize:"20px"}}>{props.BHK}</h1>
        <br/>
         <Modal title="Know More" desc="Waterford Pricing" class="button is-danger is-light"/>
      </div>
      </div>
      </div>
     
    );
};

export default Card;