import React from 'react';

const costbro = () => {
    return (
        <div>
        <div className="closepopup popup">
    <div className="popup-content">
      <h3 style={{fontSize: "14px"}}>Fill Form to Download Brouchure</h3>
      <hr/>
      <p><form action="/popup.php" name="brouchereform" method="POST"  id="frmdb">
             <div id="sucess1"></div>               
                <div className="inputGroup2">
                  
                  <input className="input" type="email" required name="email"   id="email1"/><br/>
                  <label>*Email</label>
                </div>
                <div className="inputGroup2">
                  <input className="input" type="number"  required name="mobile"  id="mobile1"/><br/>
                  <label>*Mobile</label>
                </div>             
               
                <button className="button is-primary is-light"  type="submit" name="submit" >Submit</button>
              
              </form> </p>
    </div>  
    <a href="." className="buttonabcd" style={{writingMode:"vertical-lr"}}>Download Brochure</a>
  </div>
</div>
    );
};

export default costbro;