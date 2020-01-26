import React from 'react';
import Title from '../Components/Title';
import Form from '../Components/Form';

const Location = () => {
    return (
        <div className="Location-display">
            <div style={{textAlign:"center", borderRight:"2px solid #eee"}} id="border">
              <Title title="Auriga Location"/>
              <iframe title="Auriga Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.094390386258!2d77.72143721413576!3d13.029660817128615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1037f4ecfb4b%3A0xe7e06043fc59c9f2!2sConcorde%20Auriga!5e0!3m2!1sen!2sin!4v1567393867814!5m2!1sen!2sin" width="100%" style={{height:"410px", paddingRight:"20px"}} id="iframe"></iframe>
            </div>
            <div style={{textAlign:"center"}}>
              <Title title="Get In touch With US!!"/>
              <div className="main_Form">
              <Form/>
              </div>
            </div>
        </div>
    );
};

export default Location;