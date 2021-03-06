import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './index.css';
import './App.sass';
import NavBar from './Components/Navbar';
import SideMenubar from './Components/sidemenu';
import Footer from './Components/Footer';
import HomePage from './Pages/Home';
import OverviewPage from './Pages/Overview';
import ConfigurationPage from './Pages/Configuration';
import GalleryPage from './Pages/Gallery';
import CostingPage from './Pages/Costing';
import Amenities from './Pages/Amenities';
import LocationPage from './Pages/Location'; 
import ErrorPage from './Pages/Error';
import MasterplanPage from './Pages/MasterPlan';



const App = () => {
    return (
        <div>
          <Router>
           <NavBar/>
          
          
           <Switch>
             <Route path="/" exact component={HomePage}/>
             <Route path="/overview" exact component={OverviewPage}/>
             <Route path="/configuration" exact component={ConfigurationPage}/>
             <Route path="/gallery" exact component={GalleryPage}/>
             <Route path="/masterplan" exact component={MasterplanPage}/>
             <Route path="/costing" exact component={CostingPage}/>
             <Route exact path="/amenities" component={Amenities}/>
             <Route path="/location" exact component={LocationPage}/>
             <Route component={ErrorPage}/>
           </Switch>
           <SideMenubar/>
         
           <Footer/>
          </Router>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
