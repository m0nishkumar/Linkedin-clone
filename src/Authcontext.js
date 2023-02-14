import { onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect,useState } from "react";
import { auth } from "./firebases";

export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{
    const [currentUserr,setCurrentUserr]=useState({})

    useEffect(()=>{
        const unsub =onAuthStateChanged(auth,(user)=>{
            if(user==null){
                user={displayName:"TempUser",email:"TempUser@gmail.com",phoneNumber:"7010220960",uid:"tempuserid"};
            }
                setCurrentUserr(user);
            
            for (let i = 0; i <user.email.length-1; i++) {
                if(user.email.substring(i, i+1)=="." || user.email.substring(i, i+1)=="@"){
                    console.log(user.email.substring(0, i));
                    user.displayName =user.email.substring(0, i);
                    break;
                }
                
            }
        });
        return () =>{
            unsub()
        }
    },[]);

    return(
    <AuthContext.Provider value={{currentUserr}}>
        {children}
    </AuthContext.Provider>
    )
};
