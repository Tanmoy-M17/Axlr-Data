import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategorylist, GetProductlist } from '../Redux/AppReducer/action';
import SingelCategory from '../Components/SingelCategory';
import Productcard from '../Components/Productcard';

const Filter = () => {

    const [Category,setCategory]=useState([]);
    const [Brand,setBrand]=useState([]);
    const[Limit,setLimit]=useState(8)
    const[Sortby,setSortBy]=useState("DESC");
    const dispatch=useDispatch();
   
        
    useEffect(() => {
        const body={
            category_slug: Category,
            fulfillment_slug: [],
            sub_cat_slug: [],
            brand_names: Brand,
            afiliate_names: [],
            imit: Limit,
            page_no: 0,
            user_id: "",
            sorting_type:Sortby 
            }
     dispatch(GetProductlist(body))
     dispatch(GetCategorylist())
    }, [dispatch,Category,Brand,Limit,Sortby])

    const Products=useSelector((state)=>state.AppReducer.Products);
    const Categories=useSelector((state)=>state.AppReducer.Categories)||[];
    
    const HandelCategory=(data)=>{
        setCategory(Category => [...Category, data])
    }
    
    const handelCheckBox=(e)=>{
      const option =e.target.value;
      let newBrand=[...Brand];
      if(Brand.includes(option)){
          newBrand.splice(newBrand.indexOf(option),1);
      }
      else{
          newBrand.push(option);
      }
      setBrand(newBrand)
  }
  return (
    <div>
      <div>
        {Categories.length>0&&Categories.map((data,i)=>(<SingelCategory key={i} data={data} 
        categoryChange={HandelCategory} branChange={handelCheckBox}/>))}
      </div>
      

        {Products.length>0&&Products.map((data,i)=>(<Productcard data={data} category={Category} key={i}/>))}
        </div>
  )
}

export default Filter