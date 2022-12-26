import React from 'react'

const Productcard = ({data}) => {
    console.log(data);
  return (
    <div>
        {data.product_name}
        <img src="https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8U3BpY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  )
}

export default Productcard