import React from 'react';
import Modal from '../Components/Modal';
const LighthouseModal = (props:any) => {
    const openingAmodal = () => {
        console.log("HI")
        return(
            <div>
                <Modal title="Know More" desc="Waterford Pricing"/>
            </div>
        )
    }
    const displayingGallery = () => {
        return props.state.map((item:any,i:any)=>{
            return(
                <div key={i} className="card " style={{paddingBottom:"8px", backgroundColor:"#eee"}}>
                    <div className="criticalcss">
                    <img src={item.image} alt={item.name}  width="400px" height={props.height} onClick={openingAmodal}/><Modal title="Know More" desc="Waterford Pricing"/>
                    </div>
                    {item.name}
                    
                </div>
            )
        })
       
    }
    return (
     <div className="images-in-grid">
     {displayingGallery()}
     </div>
    );
};

export default LighthouseModal;