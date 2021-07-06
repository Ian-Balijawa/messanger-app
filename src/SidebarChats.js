import React,{useEffect,useState} from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"
import { Link} from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import db from "./firebase"
function SidebarChats({channelname,id}) {
   const[randomNumber,setRandom]=useState('')
   const [messages,setMessages]=useState([])

    //algo to generate random number
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*10000))
    },[])

    //useEffect to render last message in this channel
    useEffect(()=>{
          if(id){
            db.collection('Room').doc(id).collection('Messages').orderBy('timestamp','asc').onSnapshot(snap=>{
              setMessages(snap.doc.map(doc=>doc.data()))
            })
          }
    },[])
    console.log(messages)

  return (
    <Link className="link" to={`/rooms/${id}`}>
     <div className="chats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${randomNumber}.svg`}/>
     <div className="chat-info">
       <h2>{channelname}</h2>
       <p>Hello guys hows the build</p>
     </div>
     <Badge badgeContent={4} color="secondary">
        <MailIcon />
      </Badge>
    </div>
    </Link>
   
  )
}

export default SidebarChats
