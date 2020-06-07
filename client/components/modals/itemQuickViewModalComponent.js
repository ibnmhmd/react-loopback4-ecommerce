import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from '../statelessComponents/customButtonComponent';
import {CartContext} from '../contextAPI/cartContext';
import {useContext , useRef , useState , useEffect} from 'react';
import Router from 'next/router';
import {SuccessComponent , FailureComponent , LoaderComponent } from '../statelessComponents/loadMoreProductsComponent';
import Validator from '../classes/validator';
import Service from '../classes/services';

const validator = new Validator();
const service = new Service();

function MyVerticallyCenteredModal(props) {
  const { addToCart , addToWishlist , isLoggedInUser } = useContext(CartContext);
  const addToCartRef = useRef();
  const addToWishlistRef = useRef();
  /******* cart hooks */
  const [addingItem , setAddingItem] = useState(false);
  const [itemAdded , setItemAdded] = useState(false);
  const [itemFailed , setItemFailed] = useState(false);
  const [addToCartLabel , setAddToCartLabel] = useState("ADD TO CART");
  const [processMessage , setProcessMessage] = useState("");
  const [showProcessMsg , setShowProcessMsg] = useState(false);
   /******* ends******/

    /******* wishlist hooks */
  const [addingToWishlist , setAddingToWishlist] = useState(false);
  const [itemAddedToWishlist , setItemAddedToWishlist] = useState(false);
  const [wishlistFailed , setWishlistFailed] = useState(false);
  const [addToWishlistLabel , setAddToWishlistLabel] = useState("ADD TO WISHLIST");
   /******* ends******/

  const addItemToCart = async (item) => {
    setAddToCartLabel("ADDING ...");
    setItemAdded(false);
    setAddingItem(true);
    setItemFailed(false);
    validator.disabledElem(addToCartRef);
    let itemAdded = false;
    let response = await addToCart(item , "cart");
    if(response.success){
      setItemAdded(true);
      setAddingItem(false);
      itemAdded = true;
    }else
    if(service.sessionTimeout(response)){
      setShowProcessMsg(true);
      setItemFailed(true);
      setProcessMessage("SESSION TIMED OUT, PLEASE LOGIN AND TRY AGAIN .");
    }else
     if(!response.success){
      setShowProcessMsg(true);
      setItemFailed(true);
      setProcessMessage(response.serverMessage);
     }else
      { 
        setItemFailed(true);
      }
    setAddToCartLabel(response.message.toUpperCase());
    /***** clear failure msg *****/
    setTimeout(() => {
      if(!itemAdded){
        validator.enableElem(addToCartRef);
        setItemFailed(false);
        setAddToCartLabel("ADD TO CART");
      }
      
    }, 4000);
  }
  const addItemToWishlist = async (item) => {
    /***add to wishlist for logged in users only***/
    const loggedIn = isLoggedInUser();
    if(!loggedIn){
      setShowProcessMsg(true);
      setProcessMessage("Please login to use this feature .");
      setTimeout(() => {
        setShowProcessMsg(false);
      }, 5000);
      return;
    }
    setAddToWishlistLabel("ADDING ...");
    setItemAddedToWishlist(false);
    setAddingToWishlist(true);
    setWishlistFailed(false);
    validator.disabledElem(addToWishlistRef);
    let itemAdded = false;
    let response = await addToWishlist(item);
    if(response.success){
      setItemAddedToWishlist(true);
      setAddingToWishlist(false);
      itemAdded = true;
    }else
    if(service.sessionTimeout(response)){
      setShowProcessMsg(true);
      setItemFailed(true);
      setProcessMessage("SESSION TIMED OUT, PLEASE LOGIN AND TRY AGAIN .");
    }else
    if(!response.success){
      setShowProcessMsg(true);
      setItemFailed(true);
      setProcessMessage(response.serverMessage);
    }else{ 
      setWishlistFailed(true);
    }
    setAddToWishlistLabel(response.message.toUpperCase());
    /***** clear failure msg *****/
    setTimeout(() => {
      if(!itemAdded){
        validator.enableElem(addToWishlistRef);
        setWishlistFailed(false);
        setAddToWishlistLabel("ADD TO WISHLIST");
      }
      
    }, 4000);
  }
  const fullView = (item) => {
    console.log("Breadcrumb :: " + props.item.breadCrumb);
    Router.push(`/details/${item}?${props.item.breadCrumb}`);
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton className = "text-center">
          <Modal.Title id="contained-modal-title-vcenter">
           {props.item.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <img className = "img-responsive" src= {props.item.bigImg ? props.item.bigImg :  props.item.img} alt=""/>
            </Col>
            <Col xs={12} md={6}>
            <span className="colorBlack">{props.item.description}</span>
            <div className = "__quickItem_no_small"><small> Item SKU : {props.item.sku}</small></div>
            <div className = "__quickItem_no_small"><small> From : <a className ="anchor">{props.item.brand}</a></small></div>
            <div className = "text-success __quickItem_aqty"> <small> Available Quantity : {props.item.availQty} | In Stock . </small> </div>
             <Row className="show-grid">
                <Col xs={12} md={6}>
                <div className = "__quickItem_no_small"><small> Original Price : <del className ="text-danger __quick_item_orp"> AED {props.item.oldPrice}</del></small></div>
                <div className = "__quickItem_no_small"><small> New Price : <strong className ="text-success __quick_item_newp"> AED {props.item.newPrice}</strong></small></div>
                <div className = "__quickItem_no_small"><small> You Saved : <strong className ="text-success"> AED {(props.item.oldPrice - props.item.newPrice).toFixed(2)}</strong></small></div>
                </Col>
               <Col xs={12} md={6} className ="__quick_item_price_note"> 
                 <div><small> <strong><ins>All prices include VAT. </ins></strong></small> </div>
                 <div className="__quick_item_price_note_market"><small><i>We bring you the best and latest prices from the market .</i></small></div>
               </Col>
            </Row>
               <div className="__quick_item_delivery">
                 <i>Want it Fast, Tomorrow or After Tomorrow ? <small>Choose Fast/Express Delivery when placing your order.</small></i>
              </div>

              <div className="__quick_item_delivered_by_us text-success">
                 <i className="fas fa-shipping-fast"></i><i><small>Delivered by us to your doorstep .</small></i>
              </div>
              {/**** buttons ****/}
                <Row className="show-grid text-uppercase">
                    <Col xs={12} md={6}>
                      <a ref = {addToCartRef} className="customButton __checkout_confirm_btn" onClick = { () => addItemToCart(props.item) }>{ !itemAdded ? <i className = "fas fa-shopping-cart __quick_item_font_awsome"></i>:null }
                                   { addToCartLabel }
                               { itemAdded ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { addingItem ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { itemFailed ?  <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                      </a> 
                   </Col>
                  <Col xs={12} md={6}>
                      <a ref = {addToWishlistRef} className="customButton __checkout_confirm_btn" onClick = { () => addItemToWishlist(props.item) }> {!itemAddedToWishlist ? <i className = "far fa-heart __quick_item_font_awsome"></i>:null }
                                    { addToWishlistLabel }
                               { itemAddedToWishlist ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { addingToWishlist ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { wishlistFailed ?  <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                      </a>
                  </Col>
                  <Col xs={12} md={12} className= "__quick_item_full_view" >
                      <CustomButton buttonName = "Full View" fontName = "far fa-eye" Click = {fullView} callBackParam = {props.item.sku} />
                  </Col>
                  { showProcessMsg ? <Col xs={12} md={12}>
                       <p className = "error">{processMessage}</p>
                  </Col> : null }
               </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      </Modal>);
  }
  

  function ItemQuickView(props) {
    const [modalShow, setModalShow] = React.useState(false);
  useEffect(()=>{
    props.item.breadCrumb = props.breadCrumb;
  })
    return (
      <>
        <MyVerticallyCenteredModal show={props.showModal} onHide={props.onHide}
          item ={props.item} />
      </>
    );
  }
  export default ItemQuickView;