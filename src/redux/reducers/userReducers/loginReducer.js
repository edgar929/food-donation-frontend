import {
    LOGIN_REQUEST_PENDING,LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS
} from '../../types/userTypes'

const initialState = {
    loading:false,
    success: false,
    message: null,
    error: false,
    token: null,
    data: {},
    isLoggedIn:false,
}

export const loginReducer = (state = initialState, action)=>{

     switch(action.type){
        case LOGIN_REQUEST_PENDING:
            return {
                ...state,
                loading: true
            }
        case LOGIN_REQUEST_SUCCESS:
             return {
                    ...state,
                    loading: false,
                    success: true,
                    isLoggedIn: true,
                    message: action.payload.message,
                    data: action.payload.user
                    }
        case LOGIN_REQUEST_ERROR:
                        return {
                            ...state,
                            loading: false,
                            success: false,
                            error:true,
                            isLoggedIn: false,
                            message: action.payload.error
                        }
        default:
            return state
     }

}