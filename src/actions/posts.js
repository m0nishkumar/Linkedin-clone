import { async } from '@firebase/util'
import * as api from '../api'
export const getPosts =()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        console.log(data)
        dispatch({type:"FECTH_ALL",payload:data});
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}

export const createPosts =(a,b,c,d)=>async(dispatch)=>{
    console.log(a);
    try{
        const {data}=await api.createPosts(a,b,c,d);
        console.log(data)
        dispatch({type:"CREATE",payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}

export const likePosts =(id)=>async(dispatch)=>{
    try{
        const {data}=await api.likePostss(id);
        dispatch({type:"LIKES",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const deletePosts=(id)=>async(dispatch)=>{
    
    try{
        console.log("in");
        await api.deletepost(id);
        console.log("out");
        dispatch({type:"DELETE",payload:id});
    }
    catch(error){
        console.log(error.message);
    }
}