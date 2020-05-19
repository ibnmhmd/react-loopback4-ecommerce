import React from 'react';
import Link from 'next/link'
import {
   Row, Col, Container, FormGroup, InputGroup, FormControl
} from 'react-bootstrap';
import {useState , useEffect , useContext} from "react";
import { CartContext } from './contextAPI/cartContext';
import Router from 'next/router';

const SearchBarComponent = () => (
<Container fluid className = "__searchbar_wrapper">
  <Row className="show-grid hidden-xs hidden-sm">
    <Col sm = {2} md={2}>
     <div className = "__searchbar_logo" >
       <Link href= {{pathname : "/"}}>
         <img src = "http://demo.mythemeshop.com/ecommerce-demo3/files/2015/07/logo-transparent.png" className = "img-responsive"/>
      </Link>
      </div>
         </Col>
         <Col   sm = {6} md={5}>
           {/* input search field */}
           <form>
                <FormGroup controlId="formValidationSuccess1" validationstate="success">
                    <FormControl className = "__searchbar_input_text" type="text" placeholder = "What are you looking for ?"/>
                    <button className = "btn btn-success __searchbar_searchbtn"><i className="glyphicon glyphicon-search"></i></button> 
                </FormGroup>
           </form>
          { /* input search field ends */ }
         </Col>

          <Col   sm = {4} md={5}>
             <Wishlist />
             <Cart />       
         </Col>
  </Row>

  <Row className="show-grid hidden-md hidden-lg hidden-xl">
          <Col   xs = {12} sm = {6}>
            LOGO
         </Col>

          <Col  className = " hidden-xs" sm = {6}>
           CART
         </Col>
         <Col   sm = {12} >
           {/* input search field */}
           <form>
                <FormGroup controlId="formValidationSuccess1" validationstate="success">
                    <FormControl className = "__searchbar_input_text" type="text" />
                </FormGroup>
           </form>
          { /* input search field ends */ }
         </Col>
        
         <Col className = "hidden-sm " xs = {12}>
             CART
         </Col>
  </Row>
</Container>
);

export default SearchBarComponent;

function Cart(props) {
   const { getCartSize } = useContext(CartContext);

  return (<>
          <div onClick = {() => Router.push("/cart/[id]", "/cart/my-cart")} className = "col-md-2 __searchbar_cart_icon __searchbar_cart">
            <i className="fas fa-shopping-cart"></i><span>Cart</span>
            <div className ="__searchbar_cart_wrapper">
               <div className = "__searchbar_cart_wrapper_counter">{ getCartSize()}</div>
            </div>
          </div>         
        </>)
}

function Wishlist(props) {
  const { getWishlistSize } = useContext(CartContext);
 return (<>
          <div className = "col-md-3 __searchbar_heart_icon __searchbar_wish" onClick = {() => Router.push("/cart/[id]", "/cart/my-wishlist")}>
            <i className="fas fa-heart"></i><span>Wish List</span>
            <div className ="__searchbar_cart_wrapper">
              <div className = "__searchbar_cart_wrapper_counter"> {getWishlistSize()}</div>
           </div>
         </div>
       </>)
}