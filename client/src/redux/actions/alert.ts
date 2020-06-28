import { TRIGGER_ALERT, REMOVE_ALERT } from "./types"


export const triggerAlert = (msg: string) => (dispatch: any) => {

    dispatch({
        type: TRIGGER_ALERT,
        payload:  msg
    })

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT
        })
    }, 3000)
}