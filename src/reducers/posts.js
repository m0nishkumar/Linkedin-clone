import { post } from "jquery";

export default (posts=[],action)=>{
    switch (action.type) {
        case 'FECTH_ALL':
            return action.payload;
        case 'CREATE':
            return [action.payload,...posts];
        case 'LIKES':
            return posts.map((post)=>(post._id==action.payload._id)? action.payload:post)
        case 'DELETE':
            return posts.filter((post)=>post._id!=action.payload);
        default:
            return posts;
    }
}
