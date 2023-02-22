import React, { useEffect, useState } from "react";
import "./Menu.css"

const Menu = ({ allMenus }) => {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    // let prices = document.querySelectorAll(".price");
    // prices.forEach((price) => {
    //   price.innerHTML = price.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // })
    fetch("https://mdresturant.iran.liara.run/api/products/")
      .then(res => res.json())
      .then(data => setAllProducts(data))

  })



  return (
    <div className="section-center d-flex flex-row flex-wrap align-items-center justify-content-around">
      {allProducts.map(pr => {
        return (
          <div className="product-section col-12 col-md-5 align-items-center ">
            <div className="prsc-img col-5 col-md-5 ">
              <img className="pr-img" src={pr.img} alt="" />
            </div>
            <div className="prsc-info col-5 col-md-6 ">
              <div className="prsc-title">{pr.title}</div>
              <div className="prsc-desc">lorem</div>
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
