import {combineReducers} from "redux";
import { registerReducer } from "./userReducers/registerReducer"; 
import { loginReducer } from "./userReducers/loginReducer";
const RootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
})

export default RootReducer