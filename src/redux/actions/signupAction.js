
import {
    REGISTER_REQUEST_ERROR,REGISTER_REQUEST_SUCCESS,REGISTER_REQUEST_PENDING
} from '../types/userTypes';
import { httpRequest } from '../../helper/httpRequest';


export const registerAction = (user) => async dispatch =>{
    dispatch({
        type: REGISTER_REQUEST_PENDING
    })
    const resp = await httpRequest("POST", '/user/signup', user)
    if(resp.error){
         dispatch({
             type: REGISTER_REQUEST_ERROR,
             error: resp.error
         })
     
         
    }else{
        dispatch({
            type: REGISTER_REQUEST_SUCCESS,
            payload: resp.response.data
        })
     
    }
    
          
         
}