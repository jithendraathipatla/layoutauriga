import React, {useState} from "react";
import { FaAlignRight } from "react-icons/fa";
import Logo from '../Images/logo.png';
import { Link } from "react-router-dom";


const NavBar = () => {
const [state, setstate] = useState(false);
   const handelToogle = () => {
    {state === false ? setstate(true) : setstate(false)}
   }
   const closingNav = () =>{
      setstate(false);
   }
  return (
      <div>
         <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <Link to="/">
                  <img src={Logo} alt="livexcellence" className="main_logo1"/>
               </Link>
            <button type="button" className="nav-btn" onClick={handelToogle}>
              <FaAlignRight className="nav-icon"/>
            </button>
            </div>
            <ul className={state === true ? "nav-links show-nav" : "nav-links"}>
             <li onClick={closingNav}><Link to="/">Home</Link></li>
             <li onClick={closingNav}><Link to="/overview">Overview</Link></li>
             <li onClick={closingNav}><Link to="/configuration">Configuration</Link></li>
             <li onClick={closingNav}><Link to="/gallery">Gallery</Link></li>
             <li onClick={closingNav}><Link to="/masterplan">Master Plan</Link></li>
             <li onClick={closingNav}><Link to="/costing">Pricing</Link></li>
             <li onClick={closingNav}><Link to="/amenities">Amenities</Link></li>
             <li onClick={closingNav}><Link to="/location">Location</Link></li>
            </ul>   
         </div>
         
         </nav>
         </div>
    
    );
};

export default NavBar;