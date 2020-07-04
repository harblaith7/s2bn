import axios from 'axios'
import {triggerAlert} from './alert'
import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL, SET_MESSAGE_ID, SET_UPDATED_MESSAGES } from './types'

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

export const setCurrentMessageId = (id: string) => async (dispatch: any) => {
    dispatch({
        type: SET_MESSAGE_ID,
        payload: id
    })
}

export const updateMessageStatus = (id: String, messages: any, status: string) => async (dispatch: any) => {
    let updatedMessages = messages.map((message: any) => {
        if(message._id === id){
            message.status = status;
            return message
        }
        return message
    }).reverse()
    dispatch({
        type: SET_UPDATED_MESSAGES,
        payload: updatedMessages
    })
}