import React, { useEffect, useState } from "react";
import "./Menu.css"
import { Data } from "../../Data/Data"
const Menu = ({ allProducts }) => {
  const sortedProducts = (allProducts.sort((a, b) => a.shortName - b.shortName))

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
                <div className="prsc-stk">
                  <span className="prsc-stk-text">
                    {
                      pr.status === "presell" ? ("تمام شد") : ("")
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

