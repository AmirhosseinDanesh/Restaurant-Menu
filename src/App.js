import React from 'react';
import Categories from "./Components/Categories/Categories"
import './App.css'
import { useRoutes } from 'react-router-dom';
import routes from './Routes/routes'

function App() {
  const router = useRoutes(routes)

  return (
    <main className='container w-100'>
      <div className="title text-center pt-5 ">
        <h1 className=''>رستوران جنیدی</h1>
      </div>
      <section className="menu section">
        <Categories />
        {router}
      </section>
    </main>
  );
}

export default App;
