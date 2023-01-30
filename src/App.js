import React, { useState } from 'react';
import menus from "./data"
import Categories from "./Components/Categories"
import Menu from './Components/Menu';

const allCategories = ["all", ...new Set(menus.map(menu => menu.category))]

function App() {

  const [allMenus, setAllMenus] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  const filterMenu = (category) => {
    if (category === "all") {
      setAllMenus(menus)
      return
    }
    let filternigMenus = menus.filter(menu => menu.category === category)
    setAllMenus(filternigMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
