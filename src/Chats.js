import React, { useEffect } from "react";
import { useState } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import Axios from "axios";
import { async } from "@firebase/util";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebases";

export const Chats=()=>{
    const [userlog,setuserlog]=useState({});
    //onAuthStateChanged(auth,(currentUser)=>{
     //   setuserlog(currentUser);
    //})
    const {currentUser}=useContext(AuthContext);
    const [loading,setLoading]=useState(true);
    for (let i = 0; i <currentUser.email.length-1; i++) {
        if(currentUser.email.substring(i, i+1)=="."){
            console.log(currentUser.email.substring(0, i));
           currentUser.displayName =currentUser.email.substring(0, i);
            break;
        }
    }
    console.log(currentUser);
    const user={
        userName:currentUser.displayName,
        photoURL:"https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1603315211843-NOJ0JY8WNGQB58VJ1A3M/image-asset.jpeg?format=1500w",
        email:currentUser.email,
        uid:currentUser.uid
    }
    const getFile =async (url)=>{
        const response =await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:'image/jpeg'})
    }
    useEffect(()=>{
        if(!user){
            return;
        }
        Axios.get('https://api.chatengine.io/users/me',{
            headers:{
                projectID:"5787cc32-3ef8-4a5e-a67f-69edc208d8f2",
                userName:user.userName,
                userSecret:user.userSecret
            }
        })
        .then(()=>{
            setLoading(false);
        })
        .catch(()=>{
            console.log("hii");
            let formdata =new FormData();
  
            formdata.append('username',user.userName);
            formdata.append('secret',user.uid);

            getFile(user.photoURL)
            .then((avatar)=>{
                formdata.append("avatar",avatar,avatar.name);

                Axios.post("https://api.chatengine.io/users",
                formdata,{
                    headers:{
                        'Private-Key':'{{dd60345e-263f-4e7c-9cce-c4ddb8ac2b56}}'
                    }
                }
                ).then(()=>{
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })
    },[user])
    return(
        <div className="chat-page">
            <ChatEngine
            height="calc(100vh)"
            projectID="5787cc32-3ef8-4a5e-a67f-69edc208d8f2"
            userName={user.userName}
            userSecret={user.uid}
            />
        </div>
    )
}