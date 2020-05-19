import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import Slider from "react-slick";

const wishListTooltip = (
    <Tooltip id="tooltip">
      Add this item to your <strong>Wish list</strong>.
    </Tooltip>
  );

  const quickViewTooltip = (
    <Tooltip id="tooltip">
      Quick view this <strong>Item</strong>.
    </Tooltip>
  );
const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
};

export default class Brands extends React.Component {

    render() {
        return (
            <div className="container __popular_products_wrapper">
            <div className="row">
                <div className="col-md-12">
                 <span className = "__popular_products_title">shop by brands</span>
                </div>
                <div className="col-md-12">
                <Slider {...settings}>
                <div className="__item_listing_card">
               
                  <div className="__item_listing_card_img_wrapper">
                    <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-5-170x100.png" alt=""/></a>
                  </div>
               
               </div>
               
               <div className="__item_listing_card">
      
               <div className="__item_listing_card_img_wrapper"> 
               <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-4-170x100.png" alt=""/></a>
               </div>                     
             </div>

               <div className="__item_listing_card">
             
                      <div className="__item_listing_card_img_wrapper"> 
                      <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-4-170x100.png" alt=""/></a>
                      </div>                        
              
              </div>

               <div className="__item_listing_card">
             
               <div className="__item_listing_card_img_wrapper">
                 <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-1-170x100.png" alt=""/></a>
               </div>
            </div>
          

           <div className="__item_listing_card">
          
                  <div className="__item_listing_card_img_wrapper">                 
                    <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-2-170x100.png" alt=""/></a>
                  </div>
             </div>
         

           <div className="__item_listing_card">
         
           <div className="__item_listing_card_img_wrapper">  
           <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-3-170x100.png" alt=""/></a>
           </div>                      
      
       </div>

          <div className="__item_listing_card">
        
          <div className="__item_listing_card_img_wrapper">
          <a href=""><img className = "__item_listing_card_img img-responsive img-fluid" src="https://demo.mythemeshop.com/ecommerce/files/2015/06/brand-4-170x100.png" alt=""/></a>
          </div>
       
             </div>
 
   
               </Slider>
              {/***** best sellers ends ***/}
             </div>
            </div>
            <style jsx>{`
             .__item_listing_card_img_wrapper{
                 margin-bottom:0px!important;
             }
             .__item_listing_card{
                 border-radius:0px!important;
                 box-shadow:none!important;
                 -webkit-box-shadow:none!important;
             }
            `}</style>
           </div>
          
        )
    }
}