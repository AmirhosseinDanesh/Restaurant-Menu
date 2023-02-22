import React, { useEffect, useState } from "react";

const Menu = ({ allMenus }) => {
  const [allProducts , setAllProducts] = useState([])
  useEffect(() => {
    // let prices = document.querySelectorAll(".price");
    // prices.forEach((price) => {
    //   price.innerHTML = price.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    // })
    fetch("https://mdresturant.iran.liara.run/api/products/")
    .then(res=> res.json())
    .then(data=> setAllProducts(data))

  })



  return (
    <div className="section-center">
      {allProducts.map(pr => {
        return (
          <article key={pr.id} className="menu-item">
            <img src={pr.img}
              className="photo"
              alt={pr.desc}
            />
            <div className="item-info">
              <header>
                <h4>{pr.title}</h4>

                <h4 className="price">
                  {pr.price}  
                  <span className="toman">
                      تومان  
                  </span>
                </h4>
              </header>
              <p className="item-text">{pr.desc}</p>
            </div>
          </article>
        )

      })}
    </div>

  );

};

export default Menu;
