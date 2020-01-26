import React,{useEffect} from 'react';
import ConfigurationPart from '../Components/Tabel';
import Location from '../Components/Location';
import Title from '../Components/Title';

const Configuration = () => {
    useEffect(() => {
       document.title="Apartments for sale in old madras road | new projects inBangalore | Concorde Auriga Configuration";
       window.scrollTo(0,0);
    });
    return (
        <div className="box" style={{marginTop:"82px"}}>
            <div style={{textAlign:"center"}}>
              <Title title="About Concorde Auriga Configuration"/>
            </div>
            <h1 style={{textAlign:"justify"}}>
            Concorde Auriga Apartments Is Thoughtfully Designed In Manner It Can Take Care Of Every Family Needs, Be It Small Or Large.
                     Today When We Have A First Job In It Its Mostly Located In Whitefield Or ITPL And It Would Be A First Job Of A Fresher. 
                     Lease Is Going High Day By Day With No Value Of Money.
                     So Here Concorde Group With Its New Project Concorde Auriga Apartments Old Madras Road KR Puram Has Done Its Best Designed To Accommodate A Fresher Who Has Joined Into His New Job And Will Be Very Soon Looking To Buy A New Home. Concorde Auriga Apartments On Old Madras Road Has Come WithCompact 2 Bhk Which Will Easily Accommodate Is Luxury Living In 2 BhkWhere He Is Not Worried If He Has Guest Coming To His Home. He CanAccommodate Them Easily And The Price Is Such That Buy The Time TheProperty Is Completed He Would Be Comfortably Paying His Emi's With NoAdditional Burden To Him. Approaching People Who Are Already Settled
                  
                    And Looking For Larger 2 Bhk Home In Old Madras Road, Will Have TheOption To Choose Amongst The Larger Variant Available In Bhk. FamiliesAre Growing As Well Property Prices Are, Where There Is Need Of AndAdditional Room For Kid's Or A Study Room, Here We Provide You To GoWith An Additional Option Of 2.5 Bhk Apartment At Auriga.


            </h1>
            <br/>
            <hr/>
            <ConfigurationPart/>
            <br/>
            <hr/>
            <Location/>
            <br/>
        </div>
    );
};

export default Configuration;