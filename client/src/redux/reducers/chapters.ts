import { FETCH_CHAPTERS } from "../actions/types"

const initialState = {
    snippet: "",
    members: []
}

export default (state = initialState, action: any) => {
    const {type, payload} = action

    switch(type){
        case FETCH_CHAPTERS:
            return payload;
        default:
            return state;
    }
}