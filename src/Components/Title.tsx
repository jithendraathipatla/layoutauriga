import React from 'react';

const Title = (props:any) => {
    return (
        <div style={{padding:"0px 0px 20px 0px", fontSize:"24px", color:"#1e88e5", fontWeight:"bold"}}>
           <h1>{props.title}</h1>
        </div>
    );
};

export default Title;