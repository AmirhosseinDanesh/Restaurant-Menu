import React, { useEffect, useState } from 'react'
import { Data } from '../../Data/Data'

export default function Index() {
  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    fetch(`${Data.url}/courses`)
      .then(res => res.json())
      .then(data => setAllCourses(data))
  }, [])
  return (
    <div className="section-center d-flex flex-row flex-wrap align-items-center justify-content-around">
      {allCourses.map(pr => {
        return (
          <div key={pr._id} className="product-section col-12 col-md-5 align-items-center ">
            <div className="prsc-img col-5 col-md-5 ">
              <img className="pr-img" src={pr.cover} alt="" />
            </div>
            <div className="prsc-info col-5 col-md-6 ">
              <div className="prsc-title">{pr.name}</div>
              <div className="prsc-desc">{pr.description}</div>
              <div className="prsc-price">
                <div className="prsc-price__number">{pr.price.toLocaleString()}</div>
                <div className="prsc-price__toman">تومان</div>
              </div>
            </div>
          </div>
        )

      })}
    </div>
  )
}
