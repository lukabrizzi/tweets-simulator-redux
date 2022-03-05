import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import validationsReducer from "./validationsReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
    modals: modalsReducer,
    validations: validationsReducer,
    tweets: tweetsReducer
})