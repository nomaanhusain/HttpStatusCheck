import { FETCH_WEBSTATUS_FAILURE, FETCH_WEBSTATUS_REQUEST, FETCH_WEBSTATUS_SUCCESS } from "./webstatusTypes";
const initialState = {
    loading: false,
    webstatus: [],
    error: ''
  }

  const webstatusReducer = (state=initialState, action)=>{
      switch(action.type){
            case FETCH_WEBSTATUS_REQUEST:
                return{
                    ...state,
                    loading:true
                }
            case FETCH_WEBSTATUS_SUCCESS:
                return{
                    loading:false,
                    webstatus:action.payload,
                    error:''
                }
            case FETCH_WEBSTATUS_FAILURE:
                return{
                    loading:false,
                    webstatus:[],
                    error:action.payload
                }
            default: return state
      }
  }
  export default webstatusReducer