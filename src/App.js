import React, { useState, useEffect } from 'react';
import {menus} from "./data"
import Categories from "./Components/Categories/Categories"
import Menu from './Components/Menu/Menu';
import './App.css'

const allCategories = ["همه", ...new Set(menus.map(menu => menu.category))]

function App() {
  const [allMenus, setAllMenus] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  const filterMenu = (category) => {
    if (category === "همه") {
      setAllMenus(menus)
      return
    }
    let filternigMenus = menus.filter(menu => menu.category === category)
    setAllMenus(filternigMenus)
  }

  let prices = document.querySelectorAll(".price");

  prices.forEach((price) => {
    price.innerHTML = price.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  })


  return (
    <main className='container w-100'>
      <div className="title text-center pt-5 ">
        <h1 className=''>رستوران جنیدی</h1>
      </div>
      <section className="menu section">
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
