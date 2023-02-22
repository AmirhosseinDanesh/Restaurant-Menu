import React, { useState } from "react";
import "./Categories.css"

const Categories = ({categories,filterMenu }) => {

  const [mainCategory , setMaincategory] = useState("همه")

  return (
    <div className="Allcatbtn d-flex flex-wrap justify-content-center my-5 px-2">

      {
        categories.map((category, index)=>(
          <button key={index} type="button" className={
            category === mainCategory ? "btn catbtn  highlight" : "btn catbtn"
          }
          onClick={()=>{
            setMaincategory(category)
            filterMenu(category)
          }}>
          {category}
        </button>
        ))
      }

    </div>
  );
};

export default Categories;
