import React,{useState} from 'react'
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

// setting up dialog
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
      avatar: {
        backgroundColor: blue[100],
        color: blue[600],
      },
    });


function MainChat() {
      const[open,setOpen]=useState(false);
      const {roomId}=useParams()
      const [message,setMessage]=useState('')
      console.log(message)
      //method to open dialog
      const handleOpen=()=>{
            setOpen(true)
      }
      // method to close dialog
      const handleClose=()=>{
            setOpen(false)
      }

      //function to send message to our database
       const sendMessage=(e)=>{
            e.preventDefault()
       }

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
            <IconButton onClick={handleOpen}>
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
             <input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Type a message here" type="text"/>   
             <button onClick={sendMessage} type="submit">Send Message</button>
            </form>
        </div>

        {/* code to render dialogue */}
   <Dialog position="top,right" className="dialogue" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title"> Account Settings</DialogTitle>
      <List>
          <ListItem button >
            <ListItemAvatar>
              <Avatar >
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Clear Your Message Chats"/>
          </ListItem>
        <ListItem autoFocus button >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Logout of your Acccount" />
        </ListItem>
      </List>
    </Dialog>


    </div>
  )
}

export default MainChat
