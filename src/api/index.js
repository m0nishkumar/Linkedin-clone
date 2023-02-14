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
 export const likePostss=(id)=>{
    return(
        Axios.patch(`http://localhost:3001/bit_sih/users/update/${id}`)
        .then(()=>{
            console.log("successfully liked !!")
        }))
}
export const deletepost=(id)=>{
    return(
        Axios.post("http://localhost:3001/bit_sih/users/delete",
    {
        Userid:id
    })
    )
}
export const createPosts=(a,b,c,d)=>{
    return(
        Axios.get("http://localhost:3001/bit_sih/users/create",
    {
       params:{ 
        a:a,
        b:b,
        c:c,
        d:d
    }
    })
    )
}

