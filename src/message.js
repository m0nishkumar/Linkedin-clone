import React, { useState } from 'react'
import { MessageProfile } from './sidebar-profile'

export function Message(){
    const [Message,setMessage]=useState();
    const arr_message=["Hii Monish","Whats are your future plans in #300daysofcode??"]
    const arr_message_received=["Hii Shilpa","I have tons to plans in the coming days to implement","I dont just wanna improve in my career alone","I planning to improve my mindset and body at first","Books are arriving this friday😍"]
    return(
        <>
        <div className='message-container' >
        <div className='message-contact'>
            <h2 style={{margin:"10px"}}>Messages</h2>
            <input type="text" placeholder='Search...' className='search_message'/>
        <MessageProfile/>
        </div>
        <div className='message-content'>
            <div className='message-content-header' style={{position:"relative"}}>
                <div className='message-content-header-left'style={{marginLeft:"20px"}}>
                <img src="profilepic.jpg" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                <h3 style={{margin:"0",fontWeight:"400"}}>Converation with <span style={{fontWeight:"700"}}>Shilpa M K</span></h3>    
            </div>
            </div>
            <div className='message-display'style={{height:"59.9vh"}}>
                <div className='message-message'>
                    {
                        arr_message.map((message)=>{
                           return( 
                            <div className='message-message-content'>
                           <p style={{margin:"5px"}}>{message}</p>
                           </div>
                           )
                        })
                    }
                    <div className='message-message-content1'>{
                        arr_message_received.map((message)=>{
                           return( 
                            <div className='message-message-content message-dark'>
                           <p style={{margin:"5px"}}>{message}</p>
                           </div>
                           )
                        })
                    }</div>
                </div>
            </div>
            <div className='message-footer'><input type="text" value={Message} onChange={(e)=>{
setMessage(e.value)
            }} placeholder='Type a message...' style={{width:"450px",height:"32px",padding:"10px 10px",paddingLeft:"25px",fontSize:"19px",outline:"none",border:"none",margin:"5px 0px 0px 20px",borderRadius:"22px"}}/><button style={{marginLeft:"10px",padding:"2px 1px",height:"52px",width:"55px",borderRadius:"50%"}}><i class="fa fa-send" style={{fontSize:"28px"}}></i></button></div>
        </div>
        </div>
        </>
    )
}