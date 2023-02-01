import React from 'react'

export function MessageProfile(){
    const arr_profile=[1,2,3,4,5,7]
    return(
        arr_profile.map((profile)=>{
            return(
            <>
        <div className='message-profile'>
           
            <div className='profile-message-header'>
            <img src="profilepic.jpg" alt="profile" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
            <div className='name-profile'><h4 style={{margin:0}}>shipla M K</h4>
            <p style={{margin:0}}>Hello everyone!!</p></div></div>
            <p style={{margin:0}}>09:00</p>
        </div>
        <hr style={{backgroundColor:"#E4E4E4",width:"70%",height:"2px",border:"none",margin:"auto"}}/>
        </>)
        })
        
    )
}