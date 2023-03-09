import React, { useState } from "react";
import "./Categories.css"

const Categories = ({ allCategory, filterCategory ,resetFilter }) => {

  const [mainCategory, setMaincategory] = useState(null);

  return (
    <div className="Allcatbtn d-flex flex-wrap justify-content-center my-5 px-2">
      <button
        type="button"
        className={mainCategory === null ? "btn catbtn highlight" : "btn catbtn"}
        onClick={() => {
          setMaincategory(null);
          resetFilter();
        }}
      >
        همه
      </button>
      {
        allCategory.map((category, index) => (
          <button key={index} type="button" className={
            category === mainCategory ? "btn catbtn highlight" : "btn catbtn"
          }
            onClick={() => {
              setMaincategory(category)
              filterCategory(category.title)

            }}>
            {category.title}
          </button>
        ))
      }
    </div>
  );
};

export default Categories;