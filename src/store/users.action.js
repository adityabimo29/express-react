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
    return axios.get('http://localhost:3003/users').then(res => {
        dispatch(showData(res.data));
    })
}

export const PostData = (data) => dispatch => {
    return axios.post('http://localhost:3003/users',data).then(res => {
        
    })
}