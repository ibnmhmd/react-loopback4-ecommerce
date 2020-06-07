import { useState , useContext, useRef } from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import ItemQuickView from '../../components/modals/itemQuickViewModalComponent';
import {CartContext} from '../contextAPI/cartContext';
import Router from 'next/router';
import Validator from '../classes/validator';
import ErrorModal from '../modals/errorModalComponent';
import {SuccessComponent, LoaderComponent , FailureComponent} from '../statelessComponents/loadMoreProductsComponent';
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

const validator = new Validator();
const ProductCard = (props) => {
    const [showItemModal , setShowItemModal ] = useState(false);
    const [ itemData , setItemData ] = useState ({});
    const { addToCart , addToWishlist , isLoggedInUser} = useContext(CartContext);
    /******* cart hooks */
    const [addingItem , setAddingItem] = useState(false);
    const [itemAdded , setItemAdded] = useState(false);
    const [itemFailed , setItemFailed] = useState(false);
    const [addToCartLabel , setAddToCartLabel] = useState("ADD TO CART");
    const addRef = useRef();
    /******* ends******/
    /****** wishlist message hooks ****/
    const [processMessage , setProcessMessage] = useState("");
    const [ showError, setShowError] = useState(false);

  const closeModal = () => {
    setShowError(false);
  }
 const addItemToWishlist = (item) => {
  const loggedIn = isLoggedInUser();
  if(!loggedIn){
    setProcessMessage("PLEASE LOGIN TO USE THIS FEATURE .")
    setShowError(true);
    return false;
  }
  addToWishlist(item);
 }
 const quickViewItem = (props) => {
    setShowItemModal(true);
    setItemData(props);
 }
 const onHide = () => {
    setShowItemModal(false);
 }
const addItemToCart = async (item) => {
  setAddToCartLabel("ADDING ...");
  setAddingItem(true);
  setItemFailed(false);
  setItemAdded(false);
  validator.disabledElem(addRef);
  let response = await addToCart(item , "cart");
  setAddingItem(false);
  if(response.success){
    setItemAdded(true);
    setAddToCartLabel("ADDED"); 
  }else{
    setAddToCartLabel("FAILED");
    setItemFailed(true);
    validator.enableElem(addRef);
  }
}
 const fullView = () => {
   event.preventDefault();
   let breadCrumb = props.breadCrumb ? "?"+props.breadCrumb : "";
  Router.push(`/details/${props.productInfo.sku}${breadCrumb}`);
 }
   return (
    <div className="__item_listing_card">
        <div className = "__item_listing_card_main_wrapper">
          <div className="__item_listing_card_img_wrapper">                 
              <img onClick = {() => fullView(props.productInfo.sku)} className = "__item_listing_card_img img-responsive" src = { props.productInfo.img }  alt=""/>
          </div>
          <div className="__item_listing_card_info">
               <h5 className="__item_listing_card_name"> { props.productInfo.name.substr(0,20)+"...." } </h5>
               <p> <strike className = "__item_listing_card_strike"> $ { props.productInfo.oldPrice } </strike>
               <span className = "__item_listing_card_price"> $ { props.productInfo.newPrice } </span>
               </p>
               <a ref = {addRef} className="btn btn-primary __item_listing_card_add_to_cart" onClick = { () => addItemToCart(props.productInfo) }> {addToCartLabel}</a>
                               { itemAdded ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { addingItem ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { itemFailed ? <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null }           
           </div> 
           
              {/**** overlay starts*****/}
           <span className = "__item_listing_card_overlay">
             <OverlayTrigger placement="top" overlay={wishListTooltip}>
              <i className="far fa-heart" onClick = { () => addItemToWishlist(props.productInfo) } ></i>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={quickViewTooltip}>
               <i className="far fa-eye"  onClick = { () => quickViewItem(props.productInfo)}></i>
            </OverlayTrigger>
          </span>
           {/**** ends ******/}
       </div>
       { showItemModal ?  <ItemQuickView onHide= { onHide } showModal = { showItemModal } item = { itemData } breadCrumb = {props.breadCrumb}/> : null }
       { showError ? <ErrorModal handleClose = { closeModal } show = {showError} errorMessage = {processMessage}/> : null }
    </div>
   );
}
export default ProductCard;