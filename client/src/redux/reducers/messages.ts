import { FETCH_MESSAGES_FAIL, FETCH_MESSAGES_SUCCESS, SET_UPDATED_MESSAGES } from "../actions/types";


const initialState = {
    messages: []
}

export default (state = initialState, action: any) => {
    const {type, payload} = action;

    switch(type){
        case FETCH_MESSAGES_SUCCESS:
            return {
                messages: payload.data.messages
            };
        case SET_UPDATED_MESSAGES:
            return {
                messages: payload
            }
        case FETCH_MESSAGES_FAIL:
            return {
                messages: []
            };
        default:
            return state
    }
}