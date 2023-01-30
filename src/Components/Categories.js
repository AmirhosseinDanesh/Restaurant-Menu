import React, { useState } from "react";

const Categories = ({categories,filterMenu }) => {

  const [mainCategory , setMaincategory] = useState("all")

  return (
    <div className="btn-container">

      {
        categories.map((category, index)=>(
          <button key={index} type="button" className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          onClick={()=>{
            setMaincategory(category)

          }}>
          {category}
        </button>
        ))
      }

    </div>
  );
};

export default Categories;
