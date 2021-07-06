import React,{useState,useEffect} from 'react'
import "./MainChat.css"
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { DonutLarge, InsertEmoticon } from '@material-ui/icons'
import {useParams} from "react-router-dom"
import db from "./firebase"
import {useStateValue} from './StateProvider'
import firebase from "firebase";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as timeago from 'timeago.js';


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


      function MainChat({date}) {
      const[open,setOpen]=useState(false);
      const {roomId}=useParams()
      const [message,setMessage]=useState('')
      const [messages,setMessages]=useState([])
      const [{user}]=useStateValue()
      const [channelName, setChannel]=useState('')
   
      
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
            db.collection('Rooms').doc(roomId).collection('Messages').add({
                  text:message,
                  name:user.displayName,
                  timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
           
           const audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
           audio.play();   
           toast.success('Message Sent Successsfully',{position:toast.POSITION.TOP_RIGHT}) 
           setMessage('')
       }

       //function to fetch messages from db (React Hook)
           useEffect(()=>{
                  if(roomId){
                        db.collection('Rooms').doc(roomId).collection('Messages').orderBy('timestamp','asc').onSnapshot(snap=>{
                           setMessages(snap.docs.map(doc=>doc.data()))   
                        })

                      // code to fetch details about the channel we are working with
                        db.collection('Rooms').doc(roomId).onSnapshot(snap=>{
                          setChannel(snap.data().name)
                        })

                  }      
           },[roomId])

          //  function to clear messages goes here

  return (
    <div className="chat-field">
        <div className="message-header">
        <Avatar src='https://avatars.dicebear.com/api/human/88.svg'/>
          <div className="header_info">
          <h3>{channelName}</h3>
          <p>Last seen &nbsp;
             {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}
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
              {messages.map((res)=>(
                  <p className={`chat-message ${res.name===user.displayName && 'message-sender'}`}>
                  <span className="username">{res.name}</span><br/>
                        {res.text}
                  <small className="time-stamp"> {timeago.format(new Date(res?.timestamp?.toDate()))} </small>
                  </p>
              ))

              }
                          
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
