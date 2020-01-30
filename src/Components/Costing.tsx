import React from 'react';
import CardComponent from './Card';
import Title from './Title';

const Costing = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Title title="Auriga Pricing"/>
            </div>
            <div className="pricing">
            <CardComponent BHK="1.5 BHK" pricing="Starting 45 Lakh*"/>
            <CardComponent BHK="2 BHK" pricing="Starting 56 Lakh*"/>
            <CardComponent BHK="2.5 BHK" pricing="Starting 67 Lakh*"/>
            <CardComponent BHK="3 BHK" pricing="Starting 86 Lakh*"/>
            </div>
        </div>
    );
};

export default Costing;