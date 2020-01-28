import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import Modal from '../Components/Modal';
import TabContainer from '../Components/tabs';
import LightHouse from '../Components/Lighthouse';
import Lightmodal from '../Components/LighthouseModal';

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

import floorOne from '../Images/gallery/Auriga-towerA-one.jpg';
import floorTwo from '../Images/gallery/Auriga-towerA-two.jpg';
import floorThree from '../Images/gallery/Auriga-towerA-three.jpg';
import floorFour from '../Images/gallery/Auriga-towerA-four.jpg';
import floorFive from '../Images/gallery/Auriga-towerA-five.jpg';
import floorSix from '../Images/gallery/Auriga-towerA-six.jpg';


import BfloorOne from '../Images/gallery/Auriga-towerB-one.jpg';
import BfloorTwo from '../Images/gallery/Auriga-towerB-two.jpg';
import BfloorThree from '../Images/gallery/Auriga-towerB-three.jpg';
import BfloorFour from '../Images/gallery/Auriga-towerB-four.jpg';
import BfloorFive from '../Images/gallery/Auriga-towerB-five.jpg';
import BfloorSix from '../Images/gallery/Auriga-towerB-six.jpg';


import CfloorOne from '../Images/gallery/Auriga-towerC-one.jpg';
import CfloorTwo from '../Images/gallery/Auriga-towerC-two.jpg';
import CfloorThree from '../Images/gallery/Auriga-towerC-three.jpg';
import CfloorFour from '../Images/gallery/Auriga-towerC-four.jpg';
import CfloorFive from '../Images/gallery/Auriga-towerC-five.jpg';
import CfloorSix from '../Images/gallery/Auriga-towerC-six.jpg';
import CfloorSeven from '../Images/gallery/Auriga-towerc-seven.jpg';

import masterPlanImage from '../Images/gallery/Auriga-master.jpg';
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


    const [BfloorPlan, BsetfloorPlan] = useState([
      {
        name:"833 Sq.ft",
        image: BfloorOne,
      },
      {
        name:"1371 Sq.ft",
        image:BfloorTwo,
      },
     
      {
        name:"1139 Sq.ft",
        image: BfloorThree,
      },
       {
        name:"1097 Sq.ft",
        image: BfloorFour,
      },
      
      {
        name:"837 Sq.ft",
        image: BfloorFive,
      },
      {
        name:"1344 Sq.ft",
        image: BfloorSix,
      },
    
    ]);

    const [CfloorPlan, CsetfloorPlan] = useState([
      {
        name:"1344 Sq.ft",
        image: CfloorOne,
      },
      {
        name:"1312 Sq.ft",
        image:CfloorTwo,
      },
     
      {
        name:"1136 Sq.ft",
        image: CfloorThree,
      },
       {
        name:"1758 Sq.ft",
        image: CfloorFour,
      },
      
      {
        name:"1074 Sq.ft",
        image: CfloorFive,
      },
      {
        name:"1744 Sq.ft",
        image: CfloorSix,
      },
      {
        name:"1366 Sq.ft",
        image: CfloorSeven,
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
              <div>
              <Title title="Auriga Interior, Exterior & Masterplan"/>
              <TabContainer title1="Interior" title2="Exterior" title3="Master Plan" interior={<LightHouse images={[interiorone, interiortwo, interiorthree, interiorfourth, interiorfifth, interiorsixth]} state={interior} />} exterior={<LightHouse images={[firstGallery, secondGallery, thirdGallery, fourthGallery, fifthGallery]} state={Exterior} />} masterplan={<LightHouse images={[masterPlanImage]} state={masterPlan} />} towerA={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />}/>
              </div>
              <div>
              <Title title="Auriga Floor Plans"/>
              <TabContainer title1="Tower A" title2="Tower B" title3="Tower C" interior={<LightHouse images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />} exterior={<Lightmodal images={[BfloorOne, BfloorTwo, BfloorThree, BfloorFour, BfloorFive, BfloorSix]} state={BfloorPlan} />} masterplan={<Lightmodal images={[CfloorOne, CfloorTwo, CfloorThree, CfloorFour, CfloorFive, CfloorSix, CfloorSeven]} state={CfloorPlan} />}/> 
              </div>
            </div>
             
            </div>
        </div>
    );
};

export default Gallery;