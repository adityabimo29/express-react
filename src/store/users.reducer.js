const initialState = {
    data : []
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
    
        default:
            return state || []
    }
}

export default reducer;