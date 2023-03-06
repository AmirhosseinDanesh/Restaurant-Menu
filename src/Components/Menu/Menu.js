import React, { useEffect, useState } from "react";
import "./Menu.css"
import { Data } from "../../data";
import { useParams } from "react-router-dom";
const Menu = ({ allMenus }) => {
  const [allProducts, setAllProducts] = useState([])
  const {categoryName} = useParams()
  
  useEffect(() => {
    
    fetch(`${Data.url}/courses/category/${categoryName}`)
      .then(res => res.json())
      .then(data =>{
        setAllProducts(data)
        console.log(data[0].cover)
      })
  },[categoryName])

  return (
    <div className="section-center d-flex flex-row flex-wrap align-items-center justify-content-around">
      {allProducts.map(pr => {
        return (
          <div key={pr._id} className="product-section col-12 col-md-5 align-items-center ">
            <div className="prsc-img col-5 col-md-5 ">
              <img className="pr-img" src={pr.cover} alt="" />
            </div>
            <div className="prsc-info col-5 col-md-6 ">
              <div className="prsc-title">{pr.name}</div>
              <div className="prsc-desc">{pr.description}</div>
              <div className="prsc-price">
                <div className="prsc-price__number">{pr.price.toLocaleString()}</div>
                <div className="prsc-price__toman">تومان</div>
              </div>
            </div>
          </div>
        )

      })}




    </div>

  );

};

export default Menu;
