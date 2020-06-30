import { FETCH_MESSAGES_FAIL, FETCH_MESSAGES_SUCCESS } from "../actions/types";


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
        case FETCH_MESSAGES_FAIL:
            return {
                messages: []
            };
        default:
            return state
    }
}