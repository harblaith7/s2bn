import axios from 'axios'
import {triggerAlert} from './alert'

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