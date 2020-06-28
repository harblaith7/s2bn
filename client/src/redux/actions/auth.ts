import axios from 'axios';
import { 
    TRIGGER_ALERT, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    USER_LOADED,
    AUTH_ERROR
} from './types';
import {triggerAlert} from './alert'
import setAuthToken from "../../utils/setAuthToken"


interface LoginFields {
    password: string,
    email: string
}

interface RegisterFields {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    authenticationCode: string
}

export const login = (fields: LoginFields) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/auth/login', fields);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                token: results.data.token
            }
        })
        dispatch(loadUser())
    } catch (error) {
        dispatch(triggerAlert(error.response.data.errors[0].msg))
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const register = (fields: RegisterFields) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/auth/signup', fields)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: {
                token: results.data.token
            }
        })
        dispatch(loadUser())
    } catch (error) {
        const errorMessage: string = error.response.data.errors[0].msg
        dispatch(triggerAlert(errorMessage))
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const loadUser = () => async (dispatch: any) => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('http://localhost:5000/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}