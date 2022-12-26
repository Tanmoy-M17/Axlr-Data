import axios from "axios";
import { GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

export const GetCategorylist=(params)=>(dispatch)=>{
    dispatch({type:GET_CATEGORY_REQUEST});
    axios.get("https://api.earthsfresh.in/api/categories/getCategorylist")
    .then((r)=>dispatch({type:GET_CATEGORY_SUCCESS,payload:r.data.result}))
    .catch((err)=>dispatch({type:GET_CATEGORY_FAILURE}))
}


export const GetProductlist=(params)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST});
    axios.post("https://api.earthsfresh.in/api/products/getcategoryProducts",params,
    {
        headers:{
        "content_type": "application / json",
        "SESSIONID": 45
        }
    })
    .then((r)=>dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data.result.product_list}))
    .catch((err)=>dispatch({type:GET_PRODUCTS_FAILURE}))
}
    