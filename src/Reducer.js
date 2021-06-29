 
// intialise Initial state
export const initialState={
    user: null,
}

// implement reducer to manage user state

const reducer =( state,action)=>{
    switch(action.type){ 
        case  'SET_USER':
        return {
            ...state,
            user:action.user,
        } 
        default:
        return state; 
    }
}
export default reducer

