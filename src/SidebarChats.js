import React,{useEffect,useState} from 'react'
import "./SidebarChats.css"
import {Avatar, IconButton} from "@material-ui/core"
import { Link} from "react-router-dom";

function SidebarChats({channelname,id}) {
   const[randomNumber,setRandom]=useState('')

    //algo to generate random number
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*10000))
    },[])

  return (
    <Link className="link" to={`/rooms/${id}`}>
     <div className="chats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${randomNumber}.svg`}/>
     <div className="chat-info">
       <h2>{channelname}</h2>
       <p>Hello guys hows the build</p>
     </div>
    </div>
    </Link>
   
  )
}

export default SidebarChats
