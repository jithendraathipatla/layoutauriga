import React,{useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';



const Sidemenu = (props:any) => {
    const [state,setstate] = useState("popup closepopup");
    const [nextstep, setnextstep] = useState("buttonps");
    const [costone, setcostone] = useState("popupps closepopup");
    const [costtwo, setcosttwo] = useState("buttonps");
   
    const [phoneone, setphoneone] = useState(0);
    const [phonetwo, setphonetwo] = useState(0);

    const handelPopUp = () => {
        {state === "popup closepopup" ? setstate("popup") : setstate("popup closepopup")}
        {nextstep === "buttonps" ? setnextstep("buttonps button-closed"): setnextstep("buttonps")}

        if(costone === "popupps"){
            setcostone("popupps closepopup")
        } 
        else if(costtwo === "buttonps" ){
            setcosttwo("buttonps button-closed")
        }
       
    }

    const handelCostSheet = () => {
        {costone === "popupps closepopup" ? setcostone("popupps") : setcostone("popupps closepopup")}
        {costtwo === "buttonps" ? setcosttwo("buttonps button-closed1"): setcosttwo("buttonps")}
        if(state === "popup"){
            setstate("popup closepopup")
        } 
        else if(nextstep === "buttonps button-closed" ){
            setnextstep("buttonps")
        }
    }

    const restrictingone = (e:any) => {
        let value = e.target.value;
        if(value.length > 10) {
         alert("You are not allowed to enter Fake Numbers");
         setphoneone(0);
        }
        setphoneone(value);
    }

    const restricingSecond = (e:any) => {
      let valueone = e.target.value;
      if(valueone.length > 10) {
       alert("You are not allowed to enter more than 10 digits");
       setphonetwo(0);
      }
      setphonetwo(valueone);
    }

    const firstForm = (e:any) =>{
      e.preventDefault();
      let vaueone = e.target.elements.email.value;
      let finalformdata = [{
        name:vaueone,
        phonenumber:phoneone,
        PropertyName:"Concorde Auriga",
      }];
      var data = {
        service_id: 'gmail',
        template_id: 'normal',
        user_id: 'user_s9VasukllOwTDnR8R0FWD',
        template_params: finalformdata
    }
  
    axios.post('https://api.emailjs.com/api/v1.0/email/send',  data )
    .then(res => {
      console.log(res);
      console.log(res.data); 
      let abcd:any = document.getElementById("root")?.style;
      abcd.display="none";
      let display = <h1>We received your details and we will contact you shortly</h1>;
      ReactDOM.render(display,document.getElementById("root1"));
    })
    }




    const secondform = (e:any) => {
      e.preventDefault();
      let vaueone = e.target.elements.email.value;
      let finalformdata = [{
        name:vaueone,
        phonenumber:phonetwo,
        PropertyName:"Concorde Auriga",
      }];
      var data = {
        service_id: 'gmail',
        template_id: 'normal',
        user_id: 'user_s9VasukllOwTDnR8R0FWD',
        template_params: finalformdata
    }
  
    axios.post('https://api.emailjs.com/api/v1.0/email/send',  data )
    .then(res => {
      console.log(res);
      console.log(res.data);
      let abcd:any = document.getElementById("root")?.style;
      abcd.display="none";
      let display = <h1>We received your details and we will contact you shortly</h1>;
      ReactDOM.render(display,document.getElementById("root1"));
    })
    }

    return (
    <div>
    <div className={state} style={{marginTop:`${props.height}`}}>
    <div className="popup-content">
      <h1 style={{color:"black", textDecoration:"underline", paddingBottom:"7px"}} className="label">Fill Form to Download Brouchure</h1>
    
      <form name="brouchereform"  onSubmit={firstForm} method="POST" id="frmdb">
             <div id="sucess1"></div>               
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}}  required placeholder="Your emailId" type="email" name="email" id="email1"/><br/>
                  <label >*Email</label>
                </div>
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}} onChange={restrictingone}  required type="number" placeholder="Your Phone Number" name="mobile" id="mobile1"/><br/>
                  <label>*Mobile</label>
                </div>             
                <div className="btn-group" >
                  <button  className="tabelbuttonabcde" style={{backgroundColor:"green", height:"32px", padding:"0px 10px 3px", marginTop:"10px"}} type="submit" name="submit">Submit</button>
                </div>
              </form>
           </div>  
<a  className={nextstep} onClick={handelPopUp}>Download Brouchure</a>
  </div>

  <div className={costone}>
    <div className="popup-content" style={{height:"186px"}}>
    <h1 style={{color:"black", textDecoration:"underline", paddingBottom:"7px"}} className="label">Fill Form to Download cost sheet</h1>
    
     <form action="./popup.php"  method="POST" className="callRequest" id="frmps" onSubmit={secondform}>
             <div id="sucess2"></div>      
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px  6px"}} required type="email" placeholder="Your Emailid" name="email" id="email2"/><br/>
                  <label>*Email</label>
                </div>
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}} onChange={restricingSecond}  type="number" required placeholder="Your Number" name="mobile" id="mobile2"/><br/>
                  <label>*Mobile</label>
                </div>          
                
                <div className="btn-group">
                  <button name="submit" className="tabelbuttonabcde" style={{backgroundColor:"green", height:"30px", padding:"0px 10px 3px", marginTop:"10px"}} type="submit">submit</button>
                </div>
              </form> 
    </div>  
    <a className={costtwo} onClick={handelCostSheet}>Download CostSheet</a>
  </div>
  </div>
            
    );
};

export default Sidemenu;