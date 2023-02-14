import React, { useContext, useEffect, useState } from 'react'
import Navibar from './navibar'
import Axios  from 'axios'
import { Newsapi } from './newsAPI'
import { Event_display } from './newapi'
import { Plugin } from './resume-plugin'

import { post } from 'jquery'
import ReactDOM from 'react-dom/client';
import { AuthContext } from './Authcontext'
import { collection } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import FileBase64 from 'react-file-base64';
import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux'
import { query, where, onSnapshot } from "firebase/firestore";
import matchers from '@testing-library/jest-dom/matchers'

import {createPosts, getPosts,deletePosts,likePosts} from './actions/posts';
import axios from 'axios'
export function Mainpage(props){
    const [post_input,setPostinput]=useState('')
    const [res_message,setRes_message]=useState(0)
    const [api_news,setApi_news]=useState("")
    const [storeimage,setStoreimage]=useState([])
    const [abc,setAbc]=useState()
    const [events,setEvents]=useState(0)
    const [displayy,setDisplayy]=useState([])
    const [userName_main,setUserName_main]=useState([]);
    const [ImageURL,setImageURL]=useState("")
    const [comments,setComments]=useState("")
    const [commentss,setCommentss]=useState()
    const [deleteee,setDeleteee]=useState("")
    const [emailUser,setEmailUser]=useState();
    
    
const {currentUserr}=useContext(AuthContext)
const currentUser={
    displayName:currentUserr.displayName,photoURL:"profile.jpeg",email:"monishkumar.cs21@bitsathy.ac.in"
}
const [posts,setPost]=useState([]);
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getPosts());
        Axios.get("http://localhost:3001/user/details")
        .then((res)=>{
            console.log(res)
        })

        Axios.get("http://localhost:3001/bit_sih/users_profile")
        .then((res)=>{
            return(
                res.data
                )
        }).then((a)=>{
            setUserName_main(a)
            console.log(deleteee)
            console.log(a);
            const cookies = new Cookies();
        a.forEach(element => {
                if(element.email==cookies.get('email')){
                    setDisplayy(element.photoURL);
                }
            });
        })

},[dispatch])
   
const classes =useSelector((state)=>state.posts);

const handleSubmit=async(e)=>{
    setRes_message(0)
    e.preventDefault()
    const message=e.target[0].value;
    const profileurl=e.target[2].value;
    const file=storeimage;
    const displayName=currentUser.displayName;
    console.log(file)
    console.log(profileurl)
    if(profileurl==undefined){
        profileurl="monish";
    }
    dispatch(createPosts(currentUser.displayName,message,file,profileurl));
}

const like_post=(id)=>{

    dispatch(likePosts(id));
}

const comment=(id)=>{

    Axios.post(`http://localhost:3001/bit_sih/users/comments`,{
        id:id,
        commentss:commentss,
    })
    .then(()=>{
        console.log("successfully commented !!")
    });
    const math=Math.random() * (1000 - 1) + 1
    setEvents(math)

}


/* 
const sendPost=(e)=>{
    e.preventDefault();
    addDoc(collection(db,"posts"),{
        name:currentUser.displayName,
        message:post_input,
        photoURL:""
    });
    setPostinput("");
}
*/

/*
      useEffect(()=>{
        getData(); 
        getImage();  
      },[])
 
      const getData=async ()=>{
        try{
            const data=await getDocs(userCollectionRef);
            setDisplayy(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
             
        }catch(err){
            console.log(err)
        }
    };

    const getImage=async ()=>{
        try{
            const data=await getDocs(userCollectionRef_image);
            setStoreimage(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        }catch(err){
            console.log(err)
        }
    };


        const createUser= async()=>{
            storeimage.map((item)=>{
                if(item.displayName == currentUser.displayName){
                    setApi_news(item.photoURL)
                    console.log(ImageURL)
                    
                }
            })
            try{ await addDoc(userCollectionRef,{
                uid:currentUser.uid,
                name:currentUser.displayName,
                message:post_input,
                photoURL:events,
                profileImage:api_news,
            });
            console.log("Done uploading the data!");
        }catch(err){
            console.log(err)
        }
    }
const leaderboard_array=[1,2,3,4,5]
const delete_post =async (id)=>{
    console.log(id)
    const userDoc=doc(db,"postMessage",id);
    await deleteDoc(userDoc);
};

useEffect(()=>{
    getimageUrl();
},[])

const getimageUrl=()=>{
    storeimage.map((item)=>{
        if(item.displayName == currentUser.displayName){
            setImageURL(item.photoURL)
            console.log(ImageURL)
            
        }
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const file=e.target[1].files[0];

const storageRef = ref(storage, currentUser.displayName);
const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
  (error) => {
    console.log(error)
  }, 
  () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(currentUser,{
        displayName,
        photoURL:downloadURL
      });
      setEvents(downloadURL)
      createUser();
      const updateUser_url =async(id)=>{
        const userDocc=doc(db,"postMessage",id)
        const neww={photoURL:downloadURL}
        await updateDoc(userDocc,neww)
      }
    });
  }
);
}*/
const leaderboard_array=[1,2,3,4,5]
    return(
        <>
<div className='content-entire'>
    <div className='section-1'>
<div className='profile'>
      <img className='coverpic' src="300.jpg"/>
      <div className='upper-section'><img src={currentUser.photoURL} alt="Avatar" class="avatar" style={{marginTop:"-10px"}}/>
      <div className='location-profile'><i class="fa fa-map-marker" style={{fontSize:"20px",color:"red"}}></i><p>Bangalore</p></div></div>
      <div className="profile-middle"><h3 >{currentUser.displayName}</h3>
      <p style={{marginTop:"-10px",fontSize:"12px",fontWeight:"400",color:"grey"}}>In nature, nothing is perfect and everything is perfect🍃.</p></div>
      <div className='bottom-profile'>
        <div className='profile-views'><p style={{fontWeight:"600"}}>Views</p><span><i class="fa fa-eye" style={{fontSize:"20px",color:"red"}}></i>141</span></div>
        <div className='profile-post'><p style={{fontWeight:"600"}}>post</p><span><i class="fa fa-eye" style={{fontSize:"20px",color:"red"}}></i>480</span></div>
        <button className='profile-button'>Visit profile</button>
      </div>
</div>
<div className='leaderboard' style={{paddingBottom:"10px"}}>
    <div className='header-leaderboard'>
        <h2 className='title-leaderboard' style={{marginTop:"10px",marginLeft:"10px"}}>Leaderboard 🏆</h2>
    </div>
    <div className='content-leaderboard' >

        { leaderboard_array.map((number)=>{
            return(
                <div className='message-card-upper leaderboard-card' style={{marginLeft:"10px",BorderRadiusTopright:"30%",backgroundColor:(number>3)?"white":(number==1)?"gold":(number==2)?"silver":"#CD7F32",paddingLeft:"18px"}}>
                <h3 style={{marginRight:(number>3)?"13px":"0px"}}>{number}</h3>
                {number<=3 && <svg style={{marginRight:"5px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>}
                <img src="profilepic.jpg" alt="Avatar" class="avatar" style={{height:"40px",width:"40px"}}/>
                <div className='message-upper-content'style={{marginLeft:"10px"}}><h5 style={{marginTop:"10px",marginRight:"100px",display: "inline-block",whiteSpace: "nowrap"}}>Shilpa P R</h5>
                <p style={{fontSize:"11px",marginTop:"-20px",color:"grey"}}>@Shilpa4050</p></div>
        </div>
            )
        })}
    </div>
</div>
<div className='event-display'>
        <Event_display/>
    </div>
</div>


<div className='post'>
<form onSubmit={handleSubmit}>
    <div className='post-input'>
        <input type='text' placeholder="Write a short note..."value={post_input} onChange={(e)=>{
            setPostinput(e.target.value)
        }}/>
        
                   </div>

    <div className='post-upload'>
        <FileBase64 type="file" multiple={false} id="file" onDone={({base64})=>setStoreimage(base64)}/>
        <label htmlFor='file' style={{fontWeight:"600"}}><i class="fa fa-camera" style={{fontSize:"19px",marginLeft:"10px"}}></i></label><i class="fa fa-video-camera" aria-hidden="true"style={{fontSize:"19px",marginLeft:"30px"}}></i><i class="fa fa-calendar" style={{fontSize:"19px",marginLeft:"30px"}}></i><i class="fa fa-file-text" style={{fontSize:"19px",marginLeft:"30px"}}></i>
        <input type="text" value={currentUser.photoURL } style={{display:"none"}} />
        <button className='sendbutton-post'><i class="fa fa-send-o" style={{fontSize:"20px",color:"grey",marginLeft:"30px"}}></i></button></div>

</form>
    <div className='post-section'>
        {classes.map(message=>{   
            return(<div className='message-card'>
                <div className='message-card-upper'>
                <div className='message-upper-inner'><img src={message.profilepic} alt="Avatar" class="avatar" style={{height:"40px",width:"40px"}}/>
                <div className='message-upper-content'><h5 style={{marginTop:"1px"}}>{message.name}</h5>
                <p style={{fontSize:"11px",marginTop:"-20px",color:"grey"}}>In nature, nothing is perfect and everything is perfect🍃.</p></div></div>
                <button onClick={()=>{
                    dispatch(deletePosts(message._id))
                }}>Delete</button>
                </div>
                <h3>{message.message}</h3>
                {message.photoURL.length>0 && <img className='coverpic' src={message.photoURL} style={{width:"100%",height:"265px"}}/>}
                <div className='bottom-post'><i class="fa fa-heart" style={{fontSize:"18px",color:"red"}}></i> <span style={{color:"#606060",fontSize:"16px"}}>{message.likes}</span> <i class='fa fa-comments' style={{fontSize:'20px'}}></i> <span style={{color:"#606060",fontSize:"16px"}}>{message.comments.length} comments</span></div>
                <hr style={{height:"1.3px",borderWidth:0,backgroundColor:"rgb(213, 219, 222)"}}/>
                <div className='response'>
                    <div className='likes'><i class="fa fa-heart-o" style={{fontSize:"18px",color:"red",marginRight:"3px"}} onClick={()=>{
                        like_post(message._id)
                    }}></i><p> likes</p></div><div className='likes'><i class='fa fa-comments-o' style={{fontSize:'20px',marginRight:"3px"}} onClick={()=>{
                        (comments=="")?setComments("ji"):setComments("")
                        console.log(comments)
                    }}></i> <p>comments</p></div><div className='likes'> <i class="fa fa-share-alt" style={{fontSize:"20px",marginRight:"3px"}}></i> <p>share</p> </div><div className='likes'><i class="fa fa-send-o" style={{fontSize:"20px",marginRight:"3px"}}></i> <p> send</p></div></div>

                    <div className='comments-comments' style={{display:(comments)?"block":"none"}}><div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"}}>
                        <img src={currentUser.photoURL} style={{height:"40px",width:"40px",borderRadius:"50%",marginRight:"10px"}}/>
                        <input type="text" placeholder='Add a comment...' style={{fontFamily:"poppins"}} onChange={(e)=>{
                        setCommentss(e.target.value) 
                    }}/>
                    <button onClick={()=>{
                        comment(message._id)
                    }}><i class="fa fa-send-o" style={{fontSize:"15px",paddingRight:"10px"}}></i></button></div>
                    {
                        message.comments.map(comment=>{
                            return(
                               <div className='comment'style={{padding:"0.5px 10px"}}>
                               <div className='comment-header' style={{display:"flex",flexDirection:"row",justifyContent:'flex-start',gap:"7px",marginTop:"10px"}}><img src={currentUser.photoURL} style={{height:"40px",width:"40px",borderRadius:"50%",marginTop:"10px"}}/>
                               <div style={{backgroundColor:"#F0F0F0",padding:"0px 15px",paddingBottom:"2px",width:"100%",borderRadius:"0px 15px 15px 15px"}}><h3 style={{fontSize:"15px"}}>{currentUser.displayName}</h3><p style={{fontSize:"11px",marginTop:"-20px",color:"grey"}}>In nature, nothing is perfect and everything is perfect🍃</p>
                               <p style={{marginTop:"-2px",marginLeft:"6px",fontFamily:"Exo"}}>{comment}</p>
                    <div className='response' style={{marginTop:"-11px",display:"flex",justifyContent:"flex-start",gap:"20px"}}>

                    <div className='likes'><i class="fa fa-heart-o" style={{fontSize:"18px",color:"red",marginRight:"3px"}} onClick={()=>{
                        like_post(message._id)
                    }}></i><p style={{color:"grey",fontSize:"14px"}}>16</p></div>
                    <div className='likes'><i class='fa fa-comments-o' style={{fontSize:'20px',marginRight:"3px"}} onClick={()=>{
                     
                    }}></i><p style={{color:"grey",fontSize:"14px"}}>16</p></div>
                    </div>
                    </div>
                    </div>
                               </div>
                            )
                        })
                    }
                    </div>
                </div>)
        })}
    </div>
</div >
<div className='newfeeds'>
    <h2 style={{marginTop:"-7px"}}>Newsfeed</h2>
    <Newsapi/>
</div>
</div>
        </>
    )
}   