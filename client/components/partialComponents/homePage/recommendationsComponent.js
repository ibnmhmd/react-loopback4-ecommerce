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

export default class Recommendations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recommendations : []
    }
  }
  componentDidMount() {
    this.setState({recommendations : PRODUCTSERVICE.getRecommendations()})
  }
    render() {
        return (
            <div className="container __recommendations_wrapper">
            <div className="row">
                <div className="col-md-12">
                 <span className = "__recommendations_title">recommendations for you</span>
                </div>
                <div className="col-md-12">
                <Slider {...settings}>
                { this.state.recommendations.map((recom , index) => {
                   return  (
                              <div className="col-xs-12 col-sm-4 col-md-3" key = {index}>
                                      <ProductCard productInfo = { recom } key = {index} breadCrumb = ""/>
                                </div>);
                            })} 
               </Slider>
               {/***** best sellers ends ***/}
             </div>
            </div>
           </div>
        )
    }
}