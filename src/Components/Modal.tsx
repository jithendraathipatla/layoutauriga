import React,{useState} from 'react';
import Modalabc from 'react-responsive-modal';
import Form from '../Components/Form';

const Modal = (props:any) => {
    const [isopen, setisopen] = useState(false);
    console.log(isopen);
    return (
        <div>
        <button onClick={() => setisopen(true)} className={props.class}>{props.title}</button>
       
        <Modalabc open={isopen} onClose={ () => setisopen(false)}>
        <div style={{padding:"5px 30px 20px 30px"}}> 
          <Form/>
         </div>
        </Modalabc>
        </div>
    );
};
    
export default Modal;