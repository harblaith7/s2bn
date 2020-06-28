import axios from 'axios';
import { TRIGGER_ALERT } from './types';
import {triggerAlert} from './alert'


interface Fields {
    password: string,
    email: string
}

export const login = (fields: Fields) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/auth/login', fields);
        console.log(results.data)
    } catch (error) {
        dispatch(triggerAlert('Invalid Credentials'))
    }
}