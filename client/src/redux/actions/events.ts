import axios from 'axios'
import { FETCH_EVENTS } from './types'

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
    firstName: String,
    filterWords: String[]
}

export const createEvent = (event: Event) => async (dispatch: any) => {
    try {
        let results = await axios.post('http://localhost:5000/api/events/create', {...event})
        dispatch(fetchEvent())
    } catch (error) {
        console.log(error)
    }
}

export const fetchEvent = () => async (dispatch: any) => {
    try {
        console.log("called")
        let results = await axios.get('http://localhost:5000/api/events')

        dispatch({
            type: FETCH_EVENTS,
            payload: results.data.events
        })
    } catch (error) {
        console.log('Error', error)
    }
}


export const updateEvent = (_id: String, changes: Object[]) => async (dispatch: any) => {
    try {
        let results = await axios.patch('http://localhost:5000/api/events', {
            _id,
            changes
        })
        dispatch(fetchEvent())
    } catch (error) {
        console.log(error)
    }
}