
import {
    LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_PENDING
} from '../types/userTypes';
import { httpRequest } from '../../helper/httpRequest';



export const loginAction = (values) => async dispatch => {
    dispatch({
        type: LOGIN_REQUEST_PENDING
    })

    const resp = await httpRequest("POST", "/user/login", values)
    console.log("loginAction", resp)
    if (resp.error) {
        dispatch({
            type: LOGIN_REQUEST_ERROR,
            error: resp.error
        })
    }
    else {
        console.log("loginAction", resp)
        dispatch({
            type: LOGIN_REQUEST_SUCCESS,
            payload: resp.response.data
        })
        localStorage.setItem("userData", JSON.stringify(resp.response.data.user));
        // cogoToast.success(resp.response.data.message)
        const user = resp.response.data.data.displayData
        if (user.RoleId === 2 || user.RoleId === 3) {
            window.location.href = "/user-dashboard"
        }
        if (user.RoleId === 4 || user.RoleId === 5) {
            window.location.href = "/"
        }
        if (user.RoleId === 1) {
            window.location.href = "/admin-dashboard"
        }
    }

}