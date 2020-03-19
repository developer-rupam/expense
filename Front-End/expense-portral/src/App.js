import React from 'react';
import './App.css';
import HeaderSidebar from './components/HeaderSidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard'; 
import Settings from './pages/Settings'; 
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="page-wrapper">
       <Router>
         <div className="page-container">
        <HeaderSidebar/>
        <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/settings" component={Settings} />
                        <Footer/>
                    </div>
                </div>
        </div>  
        </div>              
      </Router>
    </div>
   
  );
}

export default App;
