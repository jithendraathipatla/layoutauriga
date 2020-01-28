import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from '../Components/Modal';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Auriga Configuration"/>
            </div>
            <br/>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead >
    <tr className="is-selected" style={{backgroundColor:"rgb(88, 108, 138)", border:"3px solid #eee"}}>
      <th>Project</th>
      <th>Configuration</th>
      <th>Unit Carpet (Sq.Ft)</th>
      <th>Price</th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
    <td rowSpan={5}><br/>
    <br/>Auriga</td>
    </tr>
    <tr>
    <td>1.5 BHk + 1 T</td>
     <td>833 - 837</td>
     <td><Modal title="Know more" desc="Waterford Pricing" class="tabelbutton"/></td>
    </tr>
    <tr>
     <td>2 BHK + 2 T</td>
     <td>1074 - 1163</td>
     <td><Modal title="Know more" desc="Waterford Pricing" class="tabelbutton"/></td>
    </tr>
    <tr>
     <td>2.5 BHk + 2T</td>
     <td>1311 - 1370</td>
     <td><Modal title="Know more" desc="Waterford Pricing" class="tabelbutton"/></td>
    
    </tr>
    <tr>
     <td>3 BHK + 3T</td>
     <td>1744 - 1801</td>
     <td><Modal title="Know more" desc="Waterford Pricing" class="tabelbutton"/></td> 
    </tr>
    
  </tbody>
</table>
        </div>
    );
};

export default Tabel;