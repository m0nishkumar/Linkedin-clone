import { async } from "@firebase/util";
import Axios from "axios";
/*export const fetchPosts=()=>{
    return(
        Axios.get("http://localhost:3001/bit_sih/users")
        .then((ress)=>{
            return(
                ress.data
            )
        }).then((resss)=>{
            setPost(resss)
            console.log(resss)
        })
    )
}*/
export const fetchPosts=()=>{
    return(
        Axios.get("http://localhost:3001/bit_sih/users")
    )
}
