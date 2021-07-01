import React from 'react'
import "./MainChat.css"
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { DonutLarge, InsertEmoticon } from '@material-ui/icons'
import {useParams} from "react-router-dom"
import {db} from "./firebase"
import {useStateValue} from './StateProvider'
import firebase from "firebase";

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
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>   
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up  , are we pumped for the build
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yeeeeee 
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up, wooooowwwww  
                <small className="time-stamp">Date goes here</small>
                </p>
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yooooo wadup 
                <small className="time-stamp">Date goes here</small>
                </p> 
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yooooo wadup 
                <small className="time-stamp">Date goes here</small>
                </p>  
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yooooo wadup 
                <small className="time-stamp">Date goes here</small>
                </p>  
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yooooo wadup 
                <small className="time-stamp">Date goes here</small>
                </p>  
                <p className='chat-message'>
                <span className="username">BannyT</span><br/>
                      Hello guys whats up , yooooo wadup 
                <small className="time-stamp">Date goes here</small>
                </p>    
        </div>

        <div className="message-footer">
            <InsertEmoticon/>
            <form>
             <input  placeholder="Type a message here" type="text"/>   
             <button  type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default MainChat
