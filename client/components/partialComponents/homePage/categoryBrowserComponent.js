import React from 'react';
import Router from 'next/router';
const RPODUCTS = require("../../../utils/products");

export default class CategoryBrowserComponent extends React.Component {
     
     constructor(props) {
       super(props);
       this.state = {
         categories : RPODUCTS.getBrowseByCategories()
       }       
     }
    
    componentDidMount() {
      $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    }
      render() {
          return (
            <div className="container __categoryBrowser_block">
            <div className="row">
             <div className="col-xs-12">
              <span className="__categoryBrowser_block_title">Browse Our Categories</span>
              <span  className="__categoryBrowser_block_viewall">
                 View all
              </span>
             </div>
            
             <div className="col-xs-12 owl-carousel owl-theme ">
               {this.state.categories.map((item , index ) => {
                 return <Category category= { item } key = {index} />
               })}          
            </div>
           </div>
          </div>)
      }
}
function Category(props) {
    const redirect = (url) => {
      Router.push(`/products/${url}`);
    }
  return (<div className="item">
           <figure>
              <a href="">
                <img className = "img-responsive" src = {props.category.image} alt="item" srcSet=""/>
              </a>
          </figure>
        {/*overlay div*/}
          <div className="__homepage_second_block_inner_overlay">
            <div className = "__homepage_second_block_inner_overlay_inner">
            <div className="__categoryBrowser_block_overlay">
              <h4 className="__homepage_second_block_inner_text_which_men" onClick = {() => redirect(props.category.category)} >{props.category.category}</h4>
           </div>
          </div>
        </div>
       {/* overlay ends */}
</div>)
}