import React from 'react'
import "./Cart.css"
export default function Cart() {
    return (
        <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">سبد خرید</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className='d-flex align-items-center justify-content-between'>
                    <img width={"100px"} src="https://mdresturant2.iran.liara.run/courses/covers/feb8750e36423312e98f29384e214465b4d8f4402abbf9d878492bcc3aaacbce.jpg" alt="" />
                    
                    <div>
                        <p>جوجه کباب</p>
                        <p>1,300,000
                            <span>تومان</span>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
