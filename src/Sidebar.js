import React,{useEffect,useState} from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChats from './SidebarChats';
import db from './firebase'
import {auth,provider} from "./firebase"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SidebarChat from './SidebarChat'
toast.configure();

function Sidebar() {
   const[rooms,setRooms]=useState([])


  //  method to capture our message
  const  AddNewChat =()=>{
    const chatname= prompt("Enter your message here")
    if(chatname){
        db.collection('Rooms').add({
          name:chatname
        })
    toast.success('Channel Successfully Created',{position:toast.POSITION.TOP_RIGHT})
       
    }
 }
      // React hook to render our channels from db
        useEffect(()=>{
           const unsubscribe = db.collection('Rooms').onSnapshot(snap=>{
              setRooms(snap.docs.map(doc=>(
                {
                 data:doc.data(),
                 id:doc.id 
                }
              )))
           })

           return ()=>{
             unsubscribe()
           }
          
        },[])
        console.log(rooms);


  return (
    <div className="side-bar">
           <div className="sidebar-header">
               <Avatar/>
               <div className="header-right">
                  <IconButton>
                  <DonutLarge/>
                  </IconButton>
                  <IconButton>
                  <ChatIcon/>
                  </IconButton>
                  <IconButton>
                  <MoreVertIcon/>
                 </IconButton>
            </div>
           </div>

        <div className="sidebar-search">
          <div className="search-container">
            <SearchIcon/>
            <input type="text" placeholder="Search or start new chat"/>
          </div>   
        </div>

        {/* side bar chats */}
        <div className="sidebar-chats">
            <div onClick={AddNewChat}  className="chat-head">
              <h2>Add New Channel</h2>
            </div>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>
            <SidebarChats/>

        </div>
    </div>
  )
}

export default Sidebar
