import { GET_CATEGORY_FAILURE, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

const intialState={
    Categories:[],
    Brand:[],
    Affiliates_List:[],
    Fulfillment_partners:[],
    Products:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_CATEGORY_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_CATEGORY_SUCCESS:{
            console.log(payload);
            return {
                ...state,
                Categories:payload.categories,
                Brand:payload.BrandsData,
                Affiliates_List:payload.affiliates_list,
                Fulfillment_partners:payload.fulfillment_list,
                isLoading:false,
                isError:false
            }
        }
        case GET_CATEGORY_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
          
        case GET_PRODUCTS_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,
                Products:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_PRODUCTS_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
    
        default:
            return {...state}
    }
}