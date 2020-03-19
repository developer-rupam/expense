import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'; 
import Settings from './pages/Settings'; 
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
