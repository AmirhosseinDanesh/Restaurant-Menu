import React, { useEffect, useState } from "react";
import "./Categories.css"
import { Data } from "../../Data/Data";
import { NavLink } from "react-router-dom";

const Categories = () => {

  const [allMenu, setAllMenu] = useState([])
  useEffect(() => {
    fetch(`${Data.url}/menus`)
      .then(res => res.json())
      .then(data => setAllMenu(data))
  }, [])

  return (
    <div className="Allcatbtn d-flex flex-wrap justify-content-center my-5 px-2">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'btn catbtn highlight' : 'btn catbtn')}>
        همه
      </NavLink>
      {
        allMenu.map((ct) => (
          <NavLink key={ct._id} to={`/${ct.href}`} className={({ isActive }) => (isActive ? 'btn catbtn highlight' : 'btn catbtn')}>
            {ct.title}
          </NavLink>
        ))
      }

    </div>
  );
};

export default Categories;
