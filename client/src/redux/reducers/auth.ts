import { 
    REGISTER_FAIL, 
    REGISTER_SUCCESS, 
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    AUTH_ERROR, 
    USER_LOADED 
} from "../actions/types";

const initialState = {
    isAuthenticated: false,
    loading: true,
    token: localStorage.getItem("token"),
    user: null
}
 
export default (state = initialState, action: any) => {
    const {type, payload} = action

    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case USER_LOADED:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                user: null
            };
        default:
            return state
    }
}