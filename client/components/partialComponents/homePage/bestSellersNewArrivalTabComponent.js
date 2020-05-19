import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import Slider from "react-slick";
import ProductCard from '../../statelessComponents/productCardComponent';
const PRODUCTSERVICE = require('../../../utils/products');
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
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 3000,
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
  
export default class ProductsTabComponent extends React.Component {
     constructor(props) {
       super();
       this.quickViewItem = this.quickViewItem.bind(this);
       this.onHide = this.onHide.bind(this);
       this.state = {
         itemData : {},
         showItemModal : false ,
         bestSellers : [],
         newArrivals : [],
         newTopRated : []
       }
     }
     quickViewItem(item) {
       console.log(item)
       this.setState({itemData : item , showItemModal : true }) ;
     }
     onHide(){
      this.setState({ showItemModal : false }) ;
     }
     componentDidMount(){
       this.setState({
       bestSellers : PRODUCTSERVICE.getBestSellers(),
       newArrivals : PRODUCTSERVICE.getNewArrivals() ,
       newTopRated : PRODUCTSERVICE.getTopRated() });
     }
    render() {
        return (
            <div className="container __bestSellers_tab_wrapper">
            <div className="row">
                <div className="col-md-12">
                                      <div className="">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active"><a href="#bestSellers" aria-controls="bestSellers" role="tab" data-toggle="tab">Best Sellers</a></li>
                                            <li role="presentation" ><a href="#newArrival" aria-controls="newArrival" role="tab" data-toggle="tab">New Arrivals</a></li>
                                            <li role="presentation"><a href="#topRated" aria-controls="topRated" role="tab" data-toggle="tab">Top Rated</a></li>
                                            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Miscellaneous</a></li>
                                        </ul>
    
                                        {/*********** relative info for tab titles *******/}
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane active" id="bestSellers">
                                              {/***** best sellers ******/}
                                               <Slider {...settings}>
                                                  {this.state.bestSellers.map((bestSeller , index) => {
                                                     return  (
                                                       <div className="col-xs-12 col-sm-4 col-md-3" key = {index}>
                                                         <ProductCard productInfo = { bestSeller } key = {index} breadCrumb = ""/>
                                                       </div>
                                                      );
                                                  })}
                                              </Slider>
                                              {/***** best sellers ends ***/}
                                            </div>

                                            {/******* new arrivals starts ***/}
                                            <div role="tabpanel" className="tab-pane" id="newArrival">
                                             {/***** new arrivals ******/}
                                             <Slider {...settings}>
                                              { this.state.newArrivals.map((newArrival , index) => {
                                                     return  (
                                                       <div className="col-xs-12 col-sm-4 col-md-3" key = {index}>
                                                         <ProductCard productInfo = { newArrival } key = {index} breadCrumb = ""/>
                                                       </div>
                                                      );
                                                  })}
                                            </Slider>     
                                            </div>
                                          {/***** new arrivals ends ******/}
                                  {/******* top rated starts *****/}
                                <div role="tabpanel" className="tab-pane" id="topRated"> 
                                     <Slider {...settings}>
                                      { this.state.newTopRated.map((topRated , index) => {
                                                      return  (
                                                        <div className="col-xs-12 col-sm-4 col-md-3" key = {index}>
                                                          <ProductCard productInfo = { topRated } key = {index} breadCrumb = ""/>
                                                        </div>
                                                        );
                                        })}
                                      </Slider>     
                                     </div>
                                    </div>
                                   </div>
                                  </div>
                                </div>
                             </div>)
    }
} 