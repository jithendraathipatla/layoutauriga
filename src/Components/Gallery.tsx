import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import TabContainer from '../Components/tabs';
import LightHouse from '../Components/Lighthouse';
import firstGallery from '../Images/exterior_new2.jpg';
import secondGallery from '../Images/exterior_new3.jpg';
import thirdGallery from '../Images/exterior_new4.jpg';
import fourthGallery from '../Images/exterior_new5.jpg';
import fifthGallery from '../Images/exterior_new1.jpg';

import interiorone from '../Images/interior_new8.jpg';
import interiortwo from '../Images/interior_new1.jpg';
import interiorthree from '../Images/interior_new6.jpg';
import interiorfourth from '../Images/interior_new7.jpg';
import interiorfifth from '../Images/interior_new2.jpg';
import interiorsixth from '../Images/interior_new10.jpg';

import floorOne from '../Images/floorplan1.jpg';
import floorTwo from '../Images/floorplan2.jpg';
import floorThree from '../Images/floorplan3.jpg';
import floorFour from '../Images/floorplan4.jpg';
import floorFive from '../Images/floorplan5.jpg';
import floorSix from '../Images/floorplan6.jpg';

import masterPlanImage from '../Images/master_plan.png';
import Title from '../Components/Title';


const Gallery = () => {
    const [interior, setinterior] = useState([{
        name:"Gymnasium",
        image:interiorone,
      },
      {
        name:"Squash court",
        image: interiortwo,
      },
      {
        name:"Batminton court",
        image:interiorthree,
      },
      {
        name:"Modular Kitchen",
        image: interiorfourth,
      },
      {
        name:"Bedroom",
        image: interiorfifth,
      },
      {
        name:"Hall",
        image: interiorsixth,
      },
    ])

    const [Exterior, setExterior] = useState([
      {
        name:"Outermost View",
        image: firstGallery,
      },
      {
        name:"Garden View",
        image: secondGallery,
      },
      {
        name:"Ariel View",
        image: thirdGallery,
      },
      {
        name:"Outdoor space",
        image: fourthGallery,
      },
      {
        name:"Swimming pool view",
        image: fifthGallery,
      },
    ]);


    const [floorPlan, setfloorPlan] = useState([
      {
        name:"1151 Sq.ft",
        image: floorOne,
      },
      {
        name:"1361 Sq.ft",
        image:floorTwo,
      },
     
      {
        name:"1074 Sq.ft",
        image: floorThree,
      },
       {
        name:"1758 Sq.ft",
        image: floorFour,
      },
      
      {
        name:"1351 Sq.ft",
        image: floorFive,
      },
      {
        name:"1164 Sq.ft",
        image: floorSix,
      },
    
    ]);

    const [masterPlan, setmasterPlan] = useState([{
        name:"Master Plan",
        image:masterPlanImage,
      },
     
    ])
    
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Auriga Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div className="box">
              <Title title="Auriga Interior, Exterior & Masterplan"/>
              <TabContainer title1="Interior" title2="Exterior" title3="Master Plan" interior={<LightHouse images={[interiorone, interiortwo, interiorthree, interiorfourth, interiorfifth, interiorsixth]} state={interior} />} exterior={<LightHouse images={[firstGallery, secondGallery, thirdGallery, fourthGallery, fifthGallery]} state={Exterior} />} masterplan={<LightHouse images={[masterPlanImage]} state={masterPlan} />} towerA={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />}/>
              </div>
              <div className="box">
              <Title title="Auriga Floor Plans"/>
              <TabContainer title1="Tower A" title2="Tower B" title3="Tower C" interior={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />} exterior={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />} masterplan={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />}/> 
              </div>
            </div>
             
            </div>
        </div>
    );
};

export default Gallery;