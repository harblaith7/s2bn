import {TRIGGER_ALERT, REMOVE_ALERT} from "../actions/types"

const initialState = ''

export default (state = initialState, action: {type: string, payload: string}) => {
    const {type, payload} = action;

    switch(type){
        case TRIGGER_ALERT:
            return payload;
        case REMOVE_ALERT:
            return "";
        default:
            return state;
    }
}
