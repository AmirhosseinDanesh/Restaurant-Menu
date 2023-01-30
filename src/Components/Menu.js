import React, { useEffect } from "react";

const Menu = ({ allMenus }) => {

  useEffect(() => {
    let prices = document.querySelectorAll(".price");
    prices.forEach((price) => {
      price.innerHTML = price.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
  })



  return (
    <div className="section-center">
      {allMenus.map(menu => {
        return (
          <article key={menu.id} className="menu-item">
            <img src={menu.img}
              className="photo"
              alt={menu.desc}
            />
            <div className="item-info">
              <header>
                <h4>{menu.title}</h4>

                <h4 className="price">
                  {menu.price}  
                  <span className="toman">
                      تومان  
                  </span>
                </h4>
              </header>
              <p className="item-text">{menu.desc}</p>
            </div>
          </article>
        )

      })}
    </div>

  );

};

export default Menu;
