import React, { useState } from "react";

const Categories = ({categories}) => {
  
  return (
    <div className="btn-container">

      {
        categories.map((category)=>(
          <button type="button" className="filter-btn">
          {category}
        </button>
        ))
      }

    </div>
  );
};

export default Categories;
