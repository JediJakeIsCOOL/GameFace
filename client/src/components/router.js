import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
// import { Route } from 'react-router-dom'

import Main from './main';
import ContactMain from './ContactMain';
import Home from './Home';
import MyMapComponent from './main';


class Routes extends Component {

  render() {
    return (
      <Router>
         <div>
             
          <ul>
            <li><Link to='/friendlist' > Friend List </Link>
            </li>
            <li><Link to='/home'> Home Page </Link>
            </li>
            <li><Link to='/main'> Main Page </Link>
            </li>
          </ul>
       
        <Route path='/friendlist' component={ContactMain}/>

        <Route path='/main' component={MyMapComponent}/>

        <Route path='/home' component= {Home}/>
      </div>
      
      </Router>
      
        
    );
  }
}

export default Routes;
