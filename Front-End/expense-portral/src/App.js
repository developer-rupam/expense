import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'; 
import Settings from './pages/Settings'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter as Router, Switch,Route,withRouter} from 'react-router-dom';
import { SITENAMEALIAS } from './utils/init';


export default class App extends React.Component {
  render(){
    return (
      <div className="page-wrapper">
        <Router>
          <Route path="/" component={Login} exact/>
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settings" component={Settings} />
                           
        </Router>
      </div>
    
    )
  }

  componentDidMount(){
    console.log(localStorage.getItem(SITENAMEALIAS + '_current_page'));
  }
}




//export default App;
