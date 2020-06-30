import axios from 'axios'
import {triggerAlert} from './alert'
import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL } from './types'

export const sendMessage = (message: {
    name: string,
    email: string,
    title: string,
    message: string
}) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/messages', message)
        dispatch(triggerAlert(results.data.msg))
        return true
    } catch (error) {
        dispatch(triggerAlert((error.response.data.errors[0].msg)))
        return false
    }
}

export const getAllMessages = () => async (dispatch: any) => {
    try {
        console.log('action running')
        let results = await axios.get('http://localhost:5000/api/messages/all')
        dispatch({
            type: FETCH_MESSAGES_SUCCESS,
            payload: results
        })
    } catch (error) {
        dispatch({
            type: FETCH_MESSAGES_FAIL,
        })
    }
}