import React,{useState} from 'react'
export function ResumeContact(props){

    return(
        <div className='resume-login'>
            <input type="text" placeholder="First-name"  onChange={(e)=>{
                props.setName(e.target.value)
            }}/>
            <input type="text" placeholder="Last-name" onChange={(e)=>{
                props.setNamelast(e.target.value)
            }}/><br/>
             <input type="text" placeholder="Job" onChange={(e)=>{
                props.setJob(e.target.value)
            }}/>
            <input type="text"  placeholder="Address" onChange={(e)=>{
                props.setAddress(e.target.value)
            }}/><br/>
            <input type="text"  placeholder="City" onChange={(e)=>{
                props.setCity(e.target.value)
            }}/>
            <input type="text"  placeholder="State" onChange={(e)=>{
                props.setState(e.target.value)
            }}/><br/>
             <input type="text"  placeholder="Pincode" onChange={(e)=>{
                props.setPinocde(e.target.value)
            }}/>
            <input type="text" placeholder="Phone" onChange={(e)=>{
                props.setPhone(e.target.value)
            }}/><br/>
            <input type="text" placeholder="Email" style={{width:"200px"}} onChange={(e)=>{
                props.setEmail(e.target.value)
            }}/>
            <input type="text" placeholder="Link name" style={{width:"200px"}} onChange={(e)=>{
                props.setLinktag(e.target.value)
            }}/>
            <input type="text" placeholder="Link URL" style={{width:"200px"}} onChange={(e)=>{
                props.setLink(e.target.value)
            }}/>
            <textarea placeholder="Description.." style={{border:"2px solid black",marginTop:"35px",width:"550px",height:"100px",fontSize:"17px",fontFamily:"poppins"}} rows="4" cols="50" onChange={(e)=>{
                props.setDescription(e.target.value)
            }}/>
            </div>
    )
}