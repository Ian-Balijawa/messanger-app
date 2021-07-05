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
import { useStateValue } from './StateProvider';
// import SidebarChat from './SidebarChat'
toast.configure();

function Sidebar() {
   const[rooms,setRooms]=useState([])
   const[{user}]=useStateValue()


  //  method to capture our message
  const  AddNewChat =()=>{
    const chatname= prompt("Enter your message here")
    if(chatname){
        db.collection('Rooms').add({
          name:chatname
        })
    const audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
    audio.play();   
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
 


  return (
    <div className="side-bar">
           <div className="sidebar-header">
               <Avatar src={user?.photoURL}/>
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
            {
              rooms.map(res=>(
                <SidebarChats key={res.id} id={res.id} channelname={res.data.name} />
              ))
            }
            
        </div>
    </div>
  )
}

export default Sidebar
