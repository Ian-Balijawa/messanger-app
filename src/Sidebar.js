import React from 'react'
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
 
  //  method to capture our message
  const  AddNewChat =()=>{
    const chatname= prompt("Enter you message here")
    if(chatname){
        toast.success('Mesage captured',{position:toast.POSITION.TOP_RIGHT})
        console.log(chatname)
    }
 }
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
              <h2>Add new Chat</h2>
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
