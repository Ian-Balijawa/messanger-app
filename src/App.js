import logo from './logo.svg';
import React,{useEffect} from "react";
import './App.css';
import Sidebar from './Sidebar';
import MainChat from './MainChat';
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
function App() {
  const[{user},dispatch]=useStateValue()

   // functionality to manipulate our state
      useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(authuser=>{
          if(authuser){
            dispatch({
              type:'SET_USER',
              user:authuser
            })
          }
          else{
            dispatch({
              type:'SET_USER',
              user:null
            })
          }     
        }) 
        return ()=>{
          unsubscribe()
        }    
        
      },[])






  return (
    <div className="app">
       {!user?(
      <Login/>
     ):(
      <div className="main-body">
      <Router>
        <Switch>
            <Route exact path="/"> 
            <Sidebar/>
            <MainChat/>
            </Route>
        </Switch>
      </Router> 
    </div>
     )

    }
       

    </div>
  );
}

export default App;
