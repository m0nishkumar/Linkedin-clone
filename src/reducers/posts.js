export default (posts=[],action)=>{
    switch (action.type) {
        case 'FECTH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}