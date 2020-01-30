import React, {useState} from 'react';
import Logo from '../Images/logo.png';
import axios from 'axios';
const API_PATH = '../Components/index.php';


const Form = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [finalData, setfinalData] = useState(null);

 
  const handelingFormdata = (e:any) => {
    e.preventDefault();
    let client_name = e.target.elements.name.value;
    let client_email = e.target.elements.email.value;
    let phonenumber = e.target.elements.phone.value;
    

    if(phonenumber.length > 10){
      alert('Must enter a Valid Number');
    }
    
    const finalData = {
      Client_name:client_name,
      Client_email:client_email,
      Client_phone_number: phonenumber,
      Project_Name:"Concored Auriga",
      mailSent: false,
      error: null
    }
    
axios.post(API_PATH, finalData).then(function(response) {
  console.log(response);

});
  }

    return (
      <form onSubmit={handelingFormdata} name="main_forma" method="post">
          <div style={{textAlign:"center"}}>
            <img src={Logo} alt="concorde auriga" width="150px"/>
          </div>
    <div>
      <br/>
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" name="name" required value={name}  placeholder="e.g Alex Smith" />
  </div>
  </div>
  

  <div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" name="email" required value={email}  placeholder="e.g. alexsmith@gmail.com"/>
  </div>
  </div>

  <div className="field">
  <label className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="number" name="phone" required maxLength={10} value={phone}  placeholder="e.g. 999999999"/>
  </div>
  </div>
  <br/>
  <button className="tabelbuttonabcde is-link" type="submit" value="submit" name="submit">Submit</button>
  </div>
  </form>
        
    );
};

export default Form;