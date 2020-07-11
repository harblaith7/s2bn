import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import messages from './messages'
import currentMessageId from './currentMessage'
import events from './events'


export default combineReducers({
    alert,
    auth,
    messages,
    currentMessageId,
    events
})