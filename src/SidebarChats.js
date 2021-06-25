import React from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"

function SidebarChats() {
  return (
    <div className="chats">
      <Avatar src='https://avatars.dicebear.com/api/human/999.svg'/>
     <div className="chat-info">
       <h2>Mesage Title</h2>
       <p>Hello guys hows the build</p>
     </div>
    </div>
  )
}

export default SidebarChats
