import React,{useState} from 'react';



const Sidemenu = (props:any) => {
    const [state,setstate] = useState("popup closepopup");
    const [nextstep, setnextstep] = useState("buttonps");
    
    const [costone, setcostone] = useState("popupps closepopup");
    const [costtwo, setcosttwo] = useState("buttonps");

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

    return (
    <div>
    <div className={state} style={{marginTop:`${props.height}`}}>
    <div className="popup-content">
      <h1 style={{color:"black", textDecoration:"underline", paddingBottom:"7px"}} className="label">Fill Form to Download Brouchure</h1>
    
      <p><form action="/popup.php" name="brouchereform"  method="POST" id="frmdb">
             <div id="sucess1"></div>               
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}} placeholder="Your emailId" type="email" name="email" id="email1"/><br/>
                  <label >*Email</label>
                </div>
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}} type="number" placeholder="Your Phone Number" required name="mobile" id="mobile1"/><br/>
                  <label>*Mobile</label>
                </div>             
                <div className="btn-group" >
                  <button  className="tabelbuttonabcde" style={{backgroundColor:"green", height:"32px", padding:"0px 10px 3px", marginTop:"10px"}} type="submit" name="submit">Submit</button>
                </div>
              </form> </p>
           </div>  
<a  className={nextstep} onClick={handelPopUp}>Download Brouchure</a>
  </div>

  <div className={costone}>
    <div className="popup-content" style={{height:"186px"}}>
    <h1 style={{color:"black", textDecoration:"underline", paddingBottom:"7px"}} className="label">Fill Form to Download cost sheet</h1>
    
     <form action="/popup.php"  method="POST" className="callRequest" id="frmps">
             <div id="sucess2"></div>      
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px  6px"}} type="email" placeholder="Your Emailid" name="email" id="email2"/><br/>
                  <label>*Email</label>
                </div>
                <div className="inputGroup2">
                  <input className="input" style={{height:"30px", fontSize:"15px", padding:"10px 6px"}}  type="number" required placeholder="Your Number" name="mobile" id="mobile2"/><br/>
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