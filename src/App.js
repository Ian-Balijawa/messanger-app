import logo from './logo.svg';
import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="app">
       <div className="main-body">
         <Sidebar/>
         <MainChat/>
          
       </div>

    </div>
  );
}

export default App;
