import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const ADD_USERS = 'ADD_USERS';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT= 'LOGGED_OUT';


export const showData = data => {
    return {
        type:GET_USERS,
        payload:data
    }
}

export const loggedIn = (data) => {
    return{
        type:LOGGED_IN,
        payload:data
    }
}

export const loggedOut = () => {
    return{
        type:LOGGED_OUT
    }
}

export const addData = data => {
    return {
        type:ADD_USERS,
        payload:data
    }
}

export const checkLogin = (data) => dispatch => {
    return axios.post('http://localhost:3003/users/login',data).then(res => {
        if(res.data !== 'gagal'){
            dispatch(loggedIn(res.data));
            localStorage.setItem('token',res.data);
            localStorage.setItem('isLogin',true);
        }else{
            alert('Password or Email Incorrect.')
        }
    }).catch(error => {
        console.log(error)
    })
}

export const fetchData = () => dispatch => {
    const token = localStorage.getItem('token');
    return axios.get('http://localhost:3003/users',{headers:{"authorization":`Bearer ${token}`}}).then(res => {
        dispatch(showData(res.data));
    })
}

export const PostData = (data) => dispatch => {
    return axios.post('http://localhost:3003/users',data).then(res => {
    })
}