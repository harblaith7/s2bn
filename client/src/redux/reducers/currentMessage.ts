import {SET_MESSAGE_ID} from '../actions/types';

const initialState = ''

export default ((state = initialState, action: any) => {
    const {type, payload} = action 

    switch(type){
        case SET_MESSAGE_ID:
            return payload;
        default:
            return state
    }
})