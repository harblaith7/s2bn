import axios from 'axios';
import { TRIGGER_ALERT } from './types';
import {triggerAlert} from './alert'


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
        let results = await axios.post('http://localhost:5000/api/auth/login', fields)
        console.log(results.data)
    } catch (error) {
        dispatch(triggerAlert(error.response.data.errors[0].msg))
    }
}

export const register = (fields: RegisterFields) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/auth/signup', fields)
        console.log(results.data)
    } catch (error) {
        console.log("asdasdasda", error)
        const errorMessage: string = error.response.data.errors[0].msg
        dispatch(triggerAlert(errorMessage))
    }
}