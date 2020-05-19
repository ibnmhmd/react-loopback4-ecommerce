import React from 'react';
import Router from 'next/router';

const SaleBlockComponent= () => (
    <div className="container __homepage_second_block">
      <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
       <div className = "__homepage_second_block_inner">
       <figure>
         <a href=""><img className="img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/ob-2.jpg" alt=""/></a>
      </figure>
          {/*overlay div*/}
        <div className="__homepage_second_block_inner_overlay">
          <div className = "__homepage_second_block_inner_overlay_inner" onClick = {() => Router.push("/products/women-pullovers") }>
            <div className="__homepage_second_block_inner_text_women">
              <h1 className="__homepage_second_block_inner_text_discount_women"> Discount</h1>
              <h1 className="__homepage_second_block_inner_text_price_women"> 35% Off</h1>
              <h4 className="__homepage_second_block_inner_text_which_women">On Women's Pullovers</h4>
            </div>
          </div>
        </div>
        {/* overlay ends */}
     </div>
      
   
    </div>
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
    <div className = "__homepage_second_block_inner">
        <figure>
         <a href=""><img className="img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/ob-1.jpg" alt=""/></a>
        </figure>

          {/*overlay div*/}
          <div className="__homepage_second_block_inner_overlay">
           <div className = "__homepage_second_block_inner_overlay_inner" onClick = {() => Router.push("/products/men-suits") }>
           <div className="__homepage_second_block_inner_text_men">
             <h1 className="__homepage_second_block_inner_text_on"> ON</h1>
             <h1 className="__homepage_second_block_inner_text_sale"> SALE !</h1>
             <h4 className="__homepage_second_block_inner_text_which_men">Special Discounts On Men Suit</h4>
          </div>
          </div>
        </div>
        {/* overlay ends */}
    </div>
       
    </div>
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div className = "__homepage_second_block_inner" onClick = {() => Router.push("/products/women-shoes") }>
         <figure>
           <a href=""><img className="img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/ad-3.jpg" alt=""/></a>
         </figure>

          {/*overlay div*/}
          <div className="__homepage_second_block_inner_overlay" style = {{padding:'0rem!important'}}>
            <div className="__homepage_second_block_inner_text_small_women">
             <h4 className="__homepage_second_block_inner_text_which_women_small">On all women shoes</h4>
             </div>
           </div>
        {/* overlay ends */}
        </div>
        <div className = "__homepage_second_block_inner" style = {{marginTop:'2.8rem'}} onClick = {() => Router.push("/products/kids-clothes") }>
          <figure>
           <a href=""><img className="img-responsive" src="https://demo.mythemeshop.com/ecommerce/files/2015/07/ad-4.jpg" alt=""/></a>
          </figure>

           {/*overlay div*/}
           <div className="__homepage_second_block_inner_overlay" style = {{padding:'0rem!important'}}>
           <div className="__homepage_second_block_inner_text_small_women">
            <h4 className="__homepage_second_block_inner_text_which_women_small">On all Kids clothes</h4>
            </div>
          </div>
       {/* overlay ends */}
        </div>
    </div>
   </div>
  </div>  
)

export default SaleBlockComponent;