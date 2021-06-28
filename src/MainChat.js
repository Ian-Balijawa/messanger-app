import React from 'react'
import "./MainChat.css"
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { DonutLarge, InsertEmoticon } from '@material-ui/icons'

function MainChat() {
  return (
    <div className="chat-field">
        <div className="message-header">
        <Avatar src='https://avatars.dicebear.com/api/human/88.svg'/>
          <div className="header_info">
          <h3>Chanel name goes here</h3>
          <p>Last seen{""}
             Date Goes here
          </p>
          </div>
          <div className="message-right">
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
        <div className="message-body">
                <p className='chat-message'>
                <span className="username">New Message</span>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>      
        </div>
    </div>
  )
}

export default MainChat
