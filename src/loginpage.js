import react, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { useNavigate,Link } from 'react-router-dom';
import { Mainpage } from './mainpage';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
import { Routes } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { auth } from './firebases';
import { onAuthStateChanged } from 'firebase/auth';
const UserContext=createContext()



export function LoginPage(props){
    const [err,setErr]=useState(false)
    const [count,setCount]=useState(0)
    const navigate=useNavigate()
    const [userName,setUserName]=useState("")
    const [userID,setUserID]=useState()

    const [regEmail,setEmail]=useState("");
    const [regPass,setPass]=useState("");
    const [loginPass,setloginPass]=useState("");
    const [logEmail,setloginEmail]=useState("");
    const [user,setUser]=useState({});
    

const register = async(e)=>{
  e.preventDefault()
  try{
    const user=await createUserWithEmailAndPassword(auth,regEmail,regPass);
    console.log(user);
  }
  catch(err){
    console.log(err.message);
  }
   
};

const login= async(e)=>{
  e.preventDefault()
  try{
    const user=await signInWithEmailAndPassword(auth,logEmail,loginPass);
    console.log(user);
  }
  catch(err){
    console.log(err.message);
  }
}

const logout=async()=>{
  await signOut(auth);
}
 

/*const handleSubmitlogin=(e)=>{
  e.preventDefault()
  const username=e.target[0].value;
  const password_login=e.target[1].value;
    props.setCurrentuserr_pass(password_login);
    props.setCurrentuserr_login(username);
  
}*/
 /*   const handleSubmit=async(e)=>{
        e.preventDefault()
        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];     

try{
    const res=await createUserWithEmailAndPassword(auth, email, password)
    console.log(res.user)

const storageRef = ref(storage, displayName);
const uploadTask = uploadBytesResumable(storageRef, file);
setUserName(displayName);
setUserID(res.user.uid);

uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL
      });
const cookies = new Cookies();
cookies.set('email',email, { path: '/' });
      props.setCurrentuserr(email)
      try{
        await Axios.post("http://localhost:3001/bit_sih/users_profile",
      {
          namee:displayName,
          photoURL:downloadURL,
          email:email
      }
      )}catch(err){
        console.log("error in storage cloud: "+err)
      }
    navigate("/")
    });
  }
);

}catch(err){
    setErr(true)
    console.log(err)
}
 
    }*/


    return(

        <div className='loginpage-container'>
<UserContext.Provider value={{userID,userName}}>
  <Routes />
</UserContext.Provider>
            <div className='loginpage-slide'><h1 style={{margin:"0",whiteSpace:"nowrap",fontSize:"35px",fontFamily:"poppins"}}>Welcome to the <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Community!")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Family!")
  .start();
  }}
  /></h1> 
            <p>"There is no power for change greater than a community discovering what it cares about."</p></div> 
        {count ==0 && <div className='loginpage'>
           <div className='login-div-0'> <h1 h1 style={{margin:"0"}}>Get Started</h1>
            <p h1 style={{margin:"0"}}>Already have a account? <span onClick={()=>{
             setCount(1)
            }}>Sign in</span></p></div>
        <form >
        <div className='login-div-2'><div className='login-div1'><label>Name:</label>
        <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/></div>
        <div className='login-div1'>
        <label>Email:</label>
        <input type="text" value={regEmail} onChange={(e)=>setEmail(e.target.value)
        }/></div>
        <div className='login-div1'>
        <label>Password:</label>
        <input type="password" value={regPass} onChange={(e)=>setPass(e.target.value)
        }/></div>
        <div className='login-div1' >
        <input  style={{display:"none"}}type="file" id="file"/>
        <label htmlFor='file' style={{color:"green",fontWeight:"600"}}>Add an avatar <i class="fa fa-file-photo-o" style={{fontSize:"20px"}}></i></label></div>
        <button className='login-button1' onClick={register}>Sign up</button>
       
        <div className='signin-google-hr'>
            <hr id="hr"style={{width:"120px",border:"none",height:"1.3px"}}/>
            or sign up with 
            <hr id="hr"style={{width:"120px",border:"none",height:"1.3px"}}/>
        </div>
        <div className='login-logo'>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1024px-Twitter-logo.svg.png"/>
        </div>
        {err && <h3>Something went wrong</h3>}

                </div>
        </form>
        </div>}
        {count ==1 && <div className='loginpage'>
           <div className='login-div-0'> <h1 style={{margin:"0"}}>Get Started</h1>
            <p h1 style={{margin:"0"}}>Dont have a account? <span onClick={()=>{
             setCount(0)
            }}>Sign up</span></p></div>
          <form>
        <div className='login-div-2' >
        <div className='login-div1'>
        
        <label>Email:</label>
        <input type="text" value={logEmail} onChange={(event)=>{
          setloginEmail(event.target.value);
        }}/></div>
        <div className='login-div1'>
        <label>Password:</label>
        <input type="password" value={loginPass} onChange={(event)=>{
          setloginPass(event.target.value);
        }}/></div>
        <div className='login-div1'>
        <label>Retype Password:</label>
        <input type="password" /></div>
        <button className='login-button1' onClick={login}>Sign in</button>
        
        <div className='signin-google-hr'>
            <hr id="hr"style={{width:"120px",border:"none",height:"1.3px"}}/>
            or sign in with 
            <hr id="hr"style={{width:"120px",border:"none",height:"1.3px"}}/>
        </div>
        
        <div className='login-logo'>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"/>
        <img width="25px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1024px-Twitter-logo.svg.png"/>
        </div>
       
                </div>
                </form>
                
        </div>}
        </div>
    )
}