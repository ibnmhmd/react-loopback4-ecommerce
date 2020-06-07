import { useState ,useEffect, useContext  } from 'react';
import CustomButton from '../../statelessComponents/customButtonComponent';
import Router from 'next/router';
import {LoaderComponent , SuccessComponent , FailureComponent } from '../../statelessComponents/loadMoreProductsComponent';
import {CartContext} from '../../contextAPI/cartContext';
import EmptyBasket from './commonComponents/emptyBasketComponent';
import {CartItemDrawer} from './commonComponents/itemDrawerComponent';
import Service from '../../classes/services';
import ErrorModal from '../../modals/errorModalComponent';

const service = new Service();

function CartComponent (props) {
   const [itemsInCart , setItemsInCart ] = useState([]);
   const [totalPrice , setTotalPrice ] = useState(0);
   const [basketQty , setBasketQty ] = useState(0);
   const [itemsSavedForLater , setItemsSavedForLater ] = useState([]);
   const { getCart , addToCheckout , deleteFromCart , getSavedForLater} = useContext(CartContext);
   const [processMessage , setProcessMessage] = useState("");
   const [ showError, setShowError] = useState(false);
 
   const closeModal = () => {
     setShowError(false);
   }
   useEffect(() => {
    let product = getCart();
    let saveForLater = getSavedForLater();
     if(product.length !== 0 ){
       setItemsInCart(product);
     }
     if(saveForLater.length !== 0 ){
       setItemsSavedForLater(saveForLater);
    }
   }, []);
   /*********/
   useEffect(() => {
     setTotalPrice( getBasketSummary("price") );
     setBasketQty(  getBasketSummary("qty"));
   },[itemsInCart, itemsSavedForLater, basketQty , totalPrice]);

   const getBasketSummary = (caller) => {
    let result = 0 ;  
    itemsInCart.map((_ , i) => {
          if("price" == caller){
            result += _.newPrice*_.selectedQty;
          }else
          if("qty" == caller){
            result += _.selectedQty;
          }
    });
    return result;
   }
   const checkoutBasket = async (items) => {
    let response = await addToCheckout(items);
    if(response.success){
       Router.push("/buy/checkout");
     }
   }
   const continueShopping = () => {
    Router.push("/");
   }
   const updateBasket = (modifiedBasket) => {
     setItemsInCart(modifiedBasket);
     setItemsSavedForLater(getSavedForLater());
     updatePriceAndQuantity();
   }
   const saveForLater = (items) => {
      setItemsSavedForLater(items);
      updatePriceAndQuantity();
   }
   const updateSavedForLater = (items) => {
    setItemsSavedForLater(items);
    updatePriceAndQuantity();
   }
   const updatePriceAndQuantity = () => {
    setTotalPrice( getBasketSummary("price") );
    setBasketQty(  getBasketSummary("qty")); 
   }
    return(<>
          <div className="container-fluid __productlisting __cart_wrapper">
                 <div className="row">
                      <div className="col-xs-12 col-md-8">
                          <div className ="__cart_items_header">Items in Basket ({itemsInCart.length})</div>
                           <div className="row"> 
                            { itemsInCart.map ((item , index) => {
                              return  <CartItemDrawer itemInCart = {item} key = {index} updateBasket = {updateBasket} cart = {itemsInCart} saveForLater = {saveForLater}/>
                            })} 
                            {itemsInCart.length == 0 ? <EmptyBasket name = "Cart"/> : null } 

                            {/*** saved for later starts ***/}
                              { itemsSavedForLater.length > 0 ? <div>                                        
                               <div className ="__cart_items_header">Items saved for later ({itemsSavedForLater.length})</div>
                               { itemsSavedForLater.map ((item , index) => {
                                 return  <SavedForLater itemInSavedForLater = {item} key = {index}
                                  updateSavedForLater = {updateSavedForLater} savedForLater = {itemsSavedForLater} 
                                 cart ={itemsInCart} updateBasket = {updateBasket}/>
                               })} 
                            </div> : null }  
                            {/*** saved for later ends ***/} 

                          </div>                         
                      </div>
                      <div className="col-xs-12 col-md-4"> 
                                <div className="__cart_items_header">Bakset Summary</div> 
                              <div className = "row">
                                 <div className ="col-xs-12">
                                    <div className ="__cart_basket_summary __cart_item_card_wrapper">
                                      <h4> Subtotal : ( {itemsInCart.length} ) items  |  Quantities : {basketQty} </h4>
                                      <h4> Shipping : Free shipping</h4>
                                      <h4> Total price : AED { totalPrice.toFixed(2) } </h4>
                                      <h4> VAT : 5 % | AED { (.05*totalPrice).toFixed(2) }</h4>
                                      <h4> Grand total <small>(VAT inclusive)</small> : AED { ((.05*totalPrice) + totalPrice).toFixed(2)} </h4>
                                   </div>                                 
                                </div>
                                <div className ="col-xs-12">
                                  { itemsInCart.length !== 0 ? <CustomButton  buttonName = "CHECKOUT BASKET" Click = {checkoutBasket} callBackParam ={itemsInCart}/> : null }
                                </div>
                                <div className ="col-xs-12" style = {{marginTop: 7 }}>
                                 { itemsInCart.length !== 0 ? <CustomButton  buttonName = "CONTINUE SHOPPING" Click = {continueShopping}/> : null }
                                </div>                       
                             </div>                                 
                     </div>
                 </div>
                 { showError ? <ErrorModal handleClose = { closeModal } show = {showError} errorMessage = {processMessage}/> : null }
             </div>
    </>)
}

export default CartComponent;

function SavedForLater(props) {
  const [movingToCart , setMovingToCart ] = useState(false);
  const [deleting , setDeleting ] = useState(false);
  const { getCart , addToCart , deleteFromCart,
         deleteFromSavedForLater ,
         getSavedForLater } = useContext(CartContext);
  const [processMessage , setProcessMessage] = useState("");
  const [ showError, setShowError] = useState(false);
       
  const closeModal = () => {
           setShowError(false);
  }
  useEffect(()=>{ 
    console.log("called saving ... ")
  },[]);
  const deleteItem = async (prop) => {
    setDeleting(true)
    updateSavedForLaterItems({ sku : prop.itemInSavedForLater.sku , cart : prop.savedForLater , callBack : prop.updateSavedForLater , flag:"D" } , "deleteItem" );
  }
  const moveToCart = (prop) => {
    setMovingToCart(true);
    updateSavedForLaterItems({ sku : prop.itemInSavedForLater.sku , cart : prop.savedForLater , flag : "D" } , "deleteItem" );
    updateSavedForLaterItems({ newItem : prop.itemInSavedForLater , cart : prop.cart , callBack : prop.updateBasket } , "addItem" );
  }
  const updateSavedForLaterItems = async (payLoad , operation ) => {
    if("addItem" == operation){
       const response = await addToCart(payLoad.newItem , "cart");
       if(service.sessionTimeout(response)){
         console.error("SESSION TIMED OUT, PLEASE LOGIN AND TRY AGAIN .");
       }
    }else
    if("deleteItem" == operation){
       const response = await deleteFromSavedForLater(payLoad.sku);
       setDeleting(false);
       if(service.sessionTimeout(response)){
        setShowError(true);
        setProcessMessage("SESSION TIMED OUT, PLEASE LOGIN AND TRY AGAIN .");
        setTimeout(() => {
          Router.push("/"); 
        }, 2000);
       }else
       if(!response.success)
       {
        setShowError(true);
        setProcessMessage(response.serverMessage);
       }
    }
    setMovingToCart(false);
    if(payLoad.callBack) {
       payLoad.callBack("D" == payLoad.flag ? getSavedForLater() :  getCart() );
    }
  }
  return (<div className ="col-xs-12 __cart_item_card_wrapper">
        <div className ="col-xs-4 col-md-2 __cart_item_card_img">
          <a><img src = {props.itemInSavedForLater.img} className = "img-responsive"/></a>
        </div>
        <div className ="col-xs-4 col-md-6 __cart_item_card">
           <p style = {{margin:0}}> A genuine item from : <a> {props.itemInSavedForLater.brand} </a> </p>
           <p className ="__cart_product_name">{props.itemInSavedForLater.name}</p>
           <p>Delivered on : <span style ={{color: 'green', fontWeight: 'bold'}}>15/04/2020</span></p>
           <small style = {{color: '#B12704'}}>Only 3 left in stock (more on the way).</small><br/>
           <i className="fas fa-trash-alt"></i><a onClick = {() => deleteItem(props)} className ="__cart_actions">Delete</a> { deleting ? <LoaderComponent label = "" paragraph = {false}/> : null } 
|          <i className="fas fa-save"></i><a className ="__cart_actions" onClick = { () => moveToCart(props)}>Move to cart</a>{ movingToCart ? <LoaderComponent label = "" paragraph = {false}/> : null } 
      </div>
      <div className ="col-xs-4 col-md-4 __cart_item_card">
        <h3 style = {{color : '#B12704' , fontWeight: 'bold' , marginBottom: 0}}>AED {props.itemInSavedForLater.newPrice}</h3> 
        <p className = "__cart_was">was AED <strike>{props.itemInSavedForLater.oldPrice}</strike></p>                                 
      </div>
      { showError ? <ErrorModal handleClose = { closeModal } show = {showError} errorMessage = {processMessage}/> : null }

</div>)
}
