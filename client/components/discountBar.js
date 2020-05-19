import React from 'react';

const DiscountBarComponent = () => (
    <div className = "container-fluid __discountbar_wrapper">
     <div className="row text-center text-uppercase">
       <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
         <h4 className = "__discountbar_info __discountbar_info_rightborder"> SAVE 18% NOW </h4>
         <p className = "__discountbar_info_rightborder">COUPON CODE: EC02142</p>
       </div>
       <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
         <h4 className = "__discountbar_info __discountbar_info_rightborder"> DISCOUNT UP TO 25% </h4>
         <p className = "__discountbar_info_rightborder">BUY MORE SAVE MORE. CAUPON CODE: EC02142</p>
       </div>
       <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
         <h4 className = "__discountbar_info"> GET ADDITIONAL 10% </h4>
         <p>FOR NEW CUSTOMERS. CAUPON CODE: EC02142</p>
       </div>
     </div>
    </div>
)

 export default DiscountBarComponent;