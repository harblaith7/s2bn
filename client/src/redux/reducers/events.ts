import { FETCH_EVENTS } from "../actions/types";

type Event = {
    name: String,
    location: String,
    cardImageUrl: String,
    startDate: {
        day: String,
        time: String
    },
    endDate: {
        day: String,
        time: String
    },
    shortDescription: String,
    longDescription: String,
    price: Number,
    volume: Number,
    firstName: String
}

const inititalState: Event[] = []

export default (state = inititalState, action: any) => {
    const {type, payload} = action

    switch(type){
        case FETCH_EVENTS:
            return payload;
        default:
            return state
    }
}