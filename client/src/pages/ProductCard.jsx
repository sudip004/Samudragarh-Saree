/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Provider";
import "./Pages-main.css";

const ProductCard = ({ demo }) => {
const {setCartData} = useGlobalContext()
console.log("demo",demo);
// useEffect(()=>{
// handleclick()
// },[])

const handleclick = ()=>{
  setCartData((pre)=> [...pre,demo])
}


  return (
    <div className="card-container" onClick={()=>handleclick()}>
      <div className="card">
        <div className="card-header">
          <img src={`http://localhost:3000/${demo.pic}`} alt="" />
        </div>
        <div className="card-footer">
          <p>owner: {demo.name}</p>
          <p>catagory: {demo.catagory}</p>
          <p>price: {demo.price}</p>
          <p>stock: {demo.stock}</p>
          <p>{demo.mobileNumber}</p>
        </div>
        <button>add cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
