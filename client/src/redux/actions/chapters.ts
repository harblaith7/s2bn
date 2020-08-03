import axios from 'axios'
import { FETCH_CHAPTERS } from './types'

export const fetchChapters = () => async (dispatch: any) => {

    let results = await axios.get("/api/chapters")

    dispatch({
        type: FETCH_CHAPTERS,
        payload: results.data.cities
    })

}