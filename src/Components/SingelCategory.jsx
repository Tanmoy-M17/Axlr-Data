import React from 'react'
import { useSelector } from 'react-redux';

const SingelCategory = ({data,categoryChange,Brand,BrandChange,select}) => {
  const Brands=useSelector((state)=>state.AppReducer.Brand);
  
  return (
    <div>
      <div>CAtegory</div>
      <div onClick={()=>categoryChange(data.cat_slug)}>{data.cat_name}</div>
      <div>Brand</div>

      <div>
        {Brands.length>0&&Brands.map((data,i)=>(<div key={i}>
        <input type="checkbox" 
        onChange={(e)=>BrandChange(e)}
        value={Brand} 
        // defaultChecked={select.includes({Brand})}
        />
        <label>Motivational</label>
          </div>))}
      </div>
      </div>
  )  
}

export default SingelCategory