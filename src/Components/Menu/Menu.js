import React, { useEffect, useState , useContext } from "react";
import "./Menu.css"
import { Data } from "../../Data/Data"
import foodContext from "../../Contexts/FoodContext";
const Menu = ({ allProducts }) => {
  const contextData = useContext(foodContext)
  const sortedProducts = (allProducts.sort((a, b) => a.shortName - b.shortName))
  const addToCart = ()=>{
    contextData.setIsShowCart(true)
  }
  return (

    <div className="section-center d-flex flex-row flex-wrap align-items-center justify-content-around">
      {
        sortedProducts.map(pr => {
          return (
            <div key={pr._id} className="product-section col-12 col-md-5 align-items-center ">
              <div className="prsc-img col-5 col-md-5 ">
                <img className="pr-img" src={`${Data.urlnotV1}/courses/covers/${pr.cover}`} alt="" />
              </div>
              <div className="prsc-info col-5 col-md-6 ">
                <div className="prsc-title">{pr.name}</div>
                <div className="prsc-desc">{pr.description}</div>
                <div className="prsc-price">
                  <div className="prsc-price__number">{pr.price.toLocaleString()} </div>
                  <div className="prsc-price__toman"> تومان </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary btn-sm d-flex justify-content-between gap-2" onClick={()=>addToCart()}>
                    سفارش
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" style={{ width: "1.5rem" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </button>
                </div>
                <div className="prsc-stk">
                  <span className="prsc-stk-text">
                    {
                      pr.status === "presell" ? ("تمام شد") : (" ")
                    }
                  </span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Menu;

