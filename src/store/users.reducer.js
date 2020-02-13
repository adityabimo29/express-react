const initialState = {
    data : [],
    isLogin:false,
    user:[]
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "GET_USERS":
            
            return{
                data:action.payload
            }
        case "ADD_USERS" :
            return{
                ...state,
                data:state.data.concat(action.payload)
            }
        case "LOGGED_IN" :
            return{
                ...state,
                isLogin:true,
                user:action.payload
            }
        case "LOGGED_OUT" :
            return{
                ...state,
                isLogin:false
            }
    
        default:
            return state || []
    }
}

export default reducer;