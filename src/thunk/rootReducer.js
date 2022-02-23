import { combineReducers } from "redux";
import webstatusReducer from "./webstatus/webstatusReducer";
const rootReducer =combineReducers({
    webstatus:webstatusReducer
})
export default rootReducer