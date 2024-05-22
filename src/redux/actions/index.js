import axios from "axios"

export const getData=()=>dispatch=>{
    axios
    .get("https://demotrainiq.com/case/dashboard")
    .then(response=>dispatch({type:'GET_DATA_SUCCESS', payload:response.data}))
    .catch(error=>dispatch({type:'GET_DATA_ERROR', payload:error}))
}