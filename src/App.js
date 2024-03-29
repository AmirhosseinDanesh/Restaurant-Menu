import React, { useState, useEffect } from 'react';
import { Data } from './Data/Data';
import Categories from "./Components/Categories/Categories"
import Menu from './Components/Menu/Menu';
import './App.css';
import foodContext from './Contexts/FoodContext';
import Cart from './Components/Cart/Cart';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false)

  useEffect(() => {
    fetch(`${Data.url}/courses/`)
      .then(res => res.json())
      .then(products => {
        setAllProducts(products);
        setFilterProducts(products); // initialize filterProducts with all products
      });

    fetch(`${Data.url}/category/`)
      .then(res => res.json())
      .then(categories => {
        setAllCategories(categories);
      });
  }, []);

  const filterCategory = (category) => {
    let filteringCategory = allProducts.filter(pr => pr.categoryID.title === category);
    setFilterProducts(filteringCategory);
  }
  const resetFilter = () => {
    setFilterProducts(allProducts);
  };

  return (
    <main className='container w-100'>
      <foodContext.Provider value={{
        isShowCart, setIsShowCart
      }}>
        <div className="title text-center pt-5">
          <h1 className=''>رستوران جنیدی</h1>
        </div>
        <section className="menu section my-5">
          <Categories
            allCategory={allCategories}
            filterCategory={filterCategory}
            resetFilter={resetFilter} // pass resetFilter as prop
          />
          <Menu allProducts={filterProducts} />
        </section>
        <Cart/>
      </foodContext.Provider>
    </main>
  );
}

export default App;