import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebases';
import { unstable_HistoryRouter } from 'react-router-dom';
import { AuthContext } from './Authcontext';
import { useContext } from 'react';

export default function Navibar(){
    const {currentUserr}=useContext(AuthContext);
    const handlelogout= async ()=>{
        await auth.signOut();
    }
    return(
        <nav>
            <div className="navi-left">
                <img src="navlogo.png" width="50px"/>
                <h3 style={{marginLeft:"10px"}}>Monish's LinkedIn</h3>
            </div>
            <ul className='navi-right'>
                <li> <Link to="/" style={{ textDecoration: 'none',color:"black"}}>Home</Link></li>
                <li style={{ textDecoration: 'none',color:"black" }}>My Networks</li>
                <li ><a href='http://localhost/BitSIH%202022/'style={{ textDecoration: 'none',color:"black" }}>Jobs</a></li>
                <li >< Link to="/message" style={{ textDecoration: 'none',color:"black" }}>My Messages</Link></li>
                <li> <Link to="/plugin" style={{ textDecoration: 'none',color:"black" }}>Plugins</Link></li>
                <li><Link to="/chats" style={{ textDecoration: 'none',color:"black" }} >Unichat</Link></li>
                {(currentUserr.phoneNumber=="7010220960")? <li><Link to="/login" style={{ textDecoration: 'none',color:"black" }} className='login-button'>Login</Link></li>:
                <li style={{ textDecoration: 'none',color:"black" }} className='login-button'><button onClick={handlelogout}>Login out</button></li>}
            </ul>
        </nav>
    )
}