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
    const [loading,setLoading]=useState(true);
    //onAuthStateChanged(auth,(currentUser)=>{
     //   setuserlog(currentUser);
    //})
    const {currentUserr}=useContext(AuthContext);
    


    console.log(currentUserr.email);
    const user={
        userName:currentUserr.displayName,
        photoURL:"https://images.squarespace-cdn.com/content/v1/562cfd50e4b0db46045fb676/1603315211843-NOJ0JY8WNGQB58VJ1A3M/image-asset.jpeg?format=1500w",
        email:currentUserr.email,
        uid:currentUserr.uid
    }
    const getFile =async (url)=>{
        const response =await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:'image/jpeg'})
    }
    useEffect(()=>{
        if(currentUserr.displayName==undefined){
            console.log("siufghiuhgiusfngiojsfgnijsbgij")
        }
        else{
            console.log("im in")
        Axios.get('https://api.chatengine.io/users/me',{
            headers:{
                projectID:"c2277920-9bd1-412e-b64e-a270b273c807",
                userName:user.userName,
                userSecret:user.uid
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
                        'Private-Key':'{{33a0d3fd-f3d0-4be8-85d4-fdb0df9acf37}}'
                    }
                }
                ).then(()=>{
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
            })
        })}
    },[currentUserr.displayName])
    return(
        <div>
        {(currentUserr.displayName)? 
            <div className="chat-page">
            <ChatEngine
            height="calc(100vh)"
            projectID="c2277920-9bd1-412e-b64e-a270b273c807"
            userName={currentUserr.displayName}
            userSecret={currentUserr.uid}
            />
        </div>:<h1 style={{position:"relative",textAlign:"center"}}>Loading...</h1>}
        </div>
    )
}