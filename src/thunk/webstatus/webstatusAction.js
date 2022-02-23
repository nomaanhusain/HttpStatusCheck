import axios from "axios";
import { FETCH_WEBSTATUS_FAILURE, FETCH_WEBSTATUS_REQUEST, FETCH_WEBSTATUS_SUCCESS } from "./webstatusTypes";

export const fetchWebstatus = () => {
    return (dispatch)=>  {
      dispatch(fetchWebstatusRequest())
      axios.get('http://localhost:8080').then(response => {
          // response.data is the users
          const webstatus = response.data
          dispatch(fetchWebstatusSuccess(webstatus))
        }).catch(error => {
          // error.message is the error message
          dispatch(fetchWebstatusFailure(error.message))
        })
    }
  }

  //Different funtions to descirbe the action in the application
  //These functions are called action creators

  export const fetchWebstatusRequest = () => {
    //This object is an action in redux
    return {
      type: FETCH_WEBSTATUS_REQUEST
    }
  }

  export const fetchWebstatusSuccess = webstatus => {
     //This object is an action in redux
    return {
      type: FETCH_WEBSTATUS_SUCCESS,
      // payload will be digtest if load was succesfull
      payload: webstatus
    }
  }

  export const fetchWebstatusFailure = error => {
     //This object is an action in redux
    return {
      type: FETCH_WEBSTATUS_FAILURE,
      // Payload will be the error message if load was unsucessfull
      payload: error
    }
  }