import axios from 'axios'

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
    volume: Number
}


export const createEvent = (event: Event) => async (dispatch: any) => {
    try {
        console.log("In action", event)
        let results = await axios.post('http://localhost:5000/api/events/create', {...event})
    } catch (error) {
        console.log(error)
    }
}