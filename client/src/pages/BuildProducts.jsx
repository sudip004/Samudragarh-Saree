/* eslint-disable react/prop-types */
// import {useState} from 'react'


const BuildProducts = ({demo}) => {



const handleClick = ()=>{
console.log("hellow");
}

  return (
    <div className="card-container" onClick={()=>handleClick()}>
      <div className="card">
        <div className="card-header">
          <img src="../../saree.jpg" alt="" />
        </div>
        <div className="card-footer">
          <p>owner: {demo.owner}</p>
          <p>catagory: {demo.catagory}</p>
          <p>price: {demo.price}</p>
          <p>stock: {demo.stock}</p>
          <p>{demo.mobileNumber}</p>
        </div>
        <button>add cart</button>
      </div>
    </div>
  )
}

export default BuildProducts