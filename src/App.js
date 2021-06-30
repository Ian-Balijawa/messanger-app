import logo from './logo.svg';
import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat';
import Login from "./Login"

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="app">
       <div className="main-body">
         <Router>
           <Switch>
               <Route path="/">
               <Sidebar/>
               <MainChat/>
               </Route>
               <Route path="/login">
                 <Login/>
               </Route>
           </Switch>
         </Router> 
       </div>

    </div>
  );
}

export default App;
