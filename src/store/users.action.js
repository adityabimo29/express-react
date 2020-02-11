import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const ADD_USERS = 'ADD_USERS';

export const showData = data => {
    return {
        type:GET_USERS,
        payload:data
    }
}

export const addData = data => {
    return {
        type:ADD_USERS,
        payload:data
    }
}

export const fetchData = () => dispatch => {
    return axios.get('https://express-mongy.herokuapp.com/users').then(res => {
        dispatch(showData(res.data));
    })
}

export const PostData = (data) => dispatch => {
    return axios.post('https://express-mongy.herokuapp.com/users',data).then(res => {
        
    })
}