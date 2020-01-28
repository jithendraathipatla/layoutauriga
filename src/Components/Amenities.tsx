import React,{useState} from 'react';
import Title from '../Components/Title';
import Swimming from '../Images/amensvg/swimming-pool.svg';
import Club from '../Images/amensvg/house.svg';
import Child from '../Images/amensvg/player.svg';
import Landscape from '../Images/amensvg/sprout.svg';
import Secur from '../Images/amensvg/royal-guard.svg';
import Bank from '../Images/amensvg/atm.svg';
import Basket from '../Images/amensvg/basketball.svg';
import Caft from '../Images/amensvg/coffee.svg';
import Conven from '../Images/amensvg/pet-shop.svg';
import Jogging from '../Images/amensvg/race-track.svg';
import Lands from '../Images/amensvg/path.svg';
import Meditation from '../Images/amensvg/meditation.svg';
import Convention from '../Images/amensvg/hall.svg';
import Piped from '../Images/amensvg/valve.svg';
import Power from '../Images/amensvg/battery.svg';
import Tennis from '../Images/amensvg/tennis-court.svg';
import Wifi from '../Images/amensvg/wifi.svg';


const Amenities = () => {
    const [state, setstate] = useState([{
        name:"Swimming Pool",
        img:Swimming,
    },
    {
        name:"Club House",
        img:Club,
    },
    {
        name:"Kid's Playing Area",
        img:Child,
    },
    {
        name:"Landscaped Garden",
        img:Landscape,
    },
    {
        name:"24/7 Security",
        img:Secur,
    },
    {
        name:"Bank/ ATM",
        img:Bank,
    },
    {
        name:"Basketball Court",
        img:Basket,
    },
    {
        name:"Cafeteria",
        img:Caft,
    },
    {
        name:"Convenience Store",
        img:Conven,
    },
    {
        name:"Jogging Track",
        img:Jogging,
    },
    {
        name:"Landscape",
        img:Lands,
    },
    {
        name:"Meditaion",
        img:Meditation,
    },
    {
        name:"Convention Hall",
        img:Convention,
    },
    {
        name:"Piped Gas",
        img:Piped,
    },
    {
        name:"Power Backup",
        img:Power,
    },
    {
        name:"Tennis Court",
        img:Tennis,
    },
    {
        name:"WiFi",
        img:Wifi,
    },
    {
        name:"Garden",
        img:Lands,
    }
    ]);

    const displayingAmenities = () => {
        return state.map((item,i)=>{
            return(
                <div key={i} >
                   <img src={item.img} alt={item.name} width="50px"/>
                   <h1>{item.name}</h1>
                </div>
            )
        })
    }
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Title title="Auriga Amenities"/>
            </div>
            <br/>
            <div className="Amenities_main">
            {displayingAmenities()}
            </div>
        </div>
    );
};

export default Amenities;