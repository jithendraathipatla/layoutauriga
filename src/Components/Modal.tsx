import React,{useState} from 'react';
import Modalabc from 'react-responsive-modal';
import Form from '../Components/Form';

const Modal = (props:any) => {
    const [isopen, setisopen] = useState(false);
    return (
        <div className="finaltouch">
        <a onClick={() => setisopen(true)} className={props.class}>{props.title}</a>
        <Modalabc open={isopen} onClose={ () => setisopen(false)}>
        <div style={{padding:"5px 30px 20px 30px"}}> 
          <Form/>
         </div>
        </Modalabc>
        </div>
    );
};
    
export default Modal;