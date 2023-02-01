import React, { useContext, useState } from 'react'
import {Link,Route,Routes} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import { Plugin } from './resume-plugin'
import Navibar from './navibar'
import { Mainpage } from './mainpage'
import { Message } from './message'
import { Job } from './job-searching'
import { LoginPage } from './loginpage'
import { AuthContext } from './Authcontext'
import { Chats } from './Chats'

export function App(){

    const {currentUser}=useContext(AuthContext)
    const [currentUserr,setCurrentuserr]=useState("")
    const [currentUserr_login,setCurrentuserr_login]=useState("")
    const [currentUserr_pass,setCurrentuserr_pass]=useState("")
    const ProtectedRoute = ({children}) =>{
        if(!currentUser){
            return <Navigate to="/login" />
        }
    }

    return(
        <div>
            <Navibar/>
            <Routes>
                <Route index element={<Mainpage currentUserr={currentUserr} setCurrentuserr={setCurrentuserr} currentUserr_login={currentUserr_login} setCurrentuserr_login={setCurrentuserr_login} currentUserr_pas={currentUserr_pass} setCurrentuserr_pass={setCurrentuserr_pass} />}/>
                <Route path="/plugin" element={<Plugin/>}/>
                <Route path='/message' element={<Message/>}></Route>
                <Route path='/job' element={<Job/>}></Route>
                <Route path='/chats' element={<Chats/>}></Route>
                <Route path='/login' element={<LoginPage currentUserr={currentUserr} setCurrentuserr={setCurrentuserr} currentUserr_login={currentUserr_login} setCurrentuserr_login={setCurrentuserr_login} currentUserr_pas={currentUserr_pass} setCurrentuserr_pass={setCurrentuserr_pass} />}></Route>
            </Routes>
        </div>      
    )
}