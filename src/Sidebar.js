import React from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core"
import { DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
// import SidebarChat from './SidebarChat'

function Sidebar() {
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
            <div  className="chat-head">
              <h2>Add new Chat</h2>
            </div>        
        </div>
    </div>
  )
}

export default Sidebar
