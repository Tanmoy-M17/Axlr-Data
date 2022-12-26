import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./ActionType"

export const login=(payload)=>(dispatch)=>{
dispatch({type:USER_LOGIN_REQUEST});
return axios.post("https://api.earthsfresh.in/api/users/userLogin",payload,
{
    headers:{
    "content_type": "application / json",
    "SESSIONID": 45
    }
})
    .then((r)=>{
    console.log(r.data)
    
    dispatch({type:USER_LOGIN_SUCCESS,payload:r.data.result.user_details.token})
 
    alert(r.data.result.message)})
.catch((err)=>{
console.log(err);
dispatch({type:USER_LOGIN_FAILURE})})
}

