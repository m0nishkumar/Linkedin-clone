import { async } from '@firebase/util'
import * as api from '../api'
export const getPosts =()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        console.log(data)
        dispatch({type:"FECTH_ALL",payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}
export const createPosts =()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPosts();
        dispatch({type:"CREATE",payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}