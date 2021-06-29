import React, { createContext ,useContext,useReducer} from "react";

// set up data layer to track the  state of data within our application
export const StateContext=createContext();

//Build  a provider
export const StateProvider  = ({reducer,initialState,children}) => (
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>  
);
export const useStateValue= ()=>useContext(StateContext)