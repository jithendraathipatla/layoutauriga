import React, {useState} from 'react';
import TitleForOverview from '../Components/Title';
import ProjectType from '../Images/svg/house.svg';
import TotalLandArea from '../Images/svg/mountain.svg'
import TotalUnits from '../Images/svg/binary-code.svg';
import NumberOfFloors from '../Images/svg/castle.svg';
import TotalTowers from '../Images/svg/cityscape.svg';
import UnitVarients from '../Images/svg/towel.svg';
import PossessionDate from '../Images/svg/calendar.svg';
import Location from '../Images/svg/location.svg';


const OverviewPart = () => {
    const [state, setstate] = useState([{
        main_title:"Project Type",
        sub_heading:"Residential Unit",
        image:ProjectType,
    },
    {
        main_title:"Total Land Area",
        sub_heading:"5 Aceres",
        image:TotalLandArea,
    },
    {
        main_title:"Total Units",
        sub_heading:"501 Units",
        image:TotalUnits,
    },
    {
        main_title:"Number Of Floors",
        sub_heading:"B + G + 28",
        image:NumberOfFloors,
    },
    {
        main_title:"Total Towers",
        sub_heading:"3 Blocks",
        image:TotalTowers,
    },
    {
        main_title:"Unit Varients",
        sub_heading:"1.5, 2 & 3 BHK",
        image:UnitVarients,
    },
    {
        main_title:"Possession Date",
        sub_heading:"Dec 2023",
        image:PossessionDate,
    },
    {
        main_title:"Location",
        sub_heading:"KR Puram Bangalore",
        image:Location,
    }
    ])

    const displayingOverview = () => {
        return state.map((item,i)=>{
          return (
              <div key={i} className="subdivisions">
                <img src={item.image} alt={item.main_title} width="50px"/>
                <div className="headings">
                 <h1>{item.main_title}</h1>
                 <h2>{item.sub_heading}</h2>
                 </div>
              </div>
          )
        })
    }


    return (
        <div style={{marginBottom:"30px"}}>
            <div style={{textAlign:"center"}}>
            <TitleForOverview title="Auriga Overview"/>
            </div>
            <br/>
            <div className="overview_main">
              {displayingOverview()}
            </div>
        </div>
    );
};

export default OverviewPart;