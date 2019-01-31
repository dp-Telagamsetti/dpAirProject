const initialstate = {
    posts: 0
};

const reducer = (state = initialstate, action) => {
    const newState = {...state};
    
    if(action.type === "Item_add"){
        newState.posts++;
    }
    
    return newState;
    
}

export default reducer;