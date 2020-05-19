import { useState ,useEffect, useContext  } from 'react';
import {LoaderComponent , SuccessComponent , FailureComponent } from '../../../statelessComponents/loadMoreProductsComponent';
import {CartContext} from '../../../contextAPI/cartContext';

export function CartItemDrawer(props) {
    const [itemQty , setItemQty ] = useState([]);
    const [checkQty , setCheckQty ] = useState(false);
    const [qtyAvailable , setQtyAvailable ] = useState(false);
    const [qtyNotAvailable , setQtyNotAvailable ] = useState(false);
    const [outOfStock , setOutOfStock ] = useState(0);
    const [selectedQty , setSelectedQty ] = useState(1);
    const [deleting , setDeleting ] = useState(false);
    const [savingForLater , setSavingForLater ] = useState(false);
    const [movingToWishlist , setMovingToWishlist ] = useState(false);
    const { getCart , addToWishlist , deleteFromCart , getSavedForLater , addToSavedForLater} = useContext(CartContext);
  
    useEffect(()=>{
       let _arr = [] ;
       for (let i = 1 ; i < props.itemInCart.qty+1; i++){
         _arr[i] = i;
       }
       setItemQty(_arr);
    },[]);
    useEffect(() => {
      setSelectedQty(props.itemInCart.selectedQty);    
    }, [props, qtyAvailable])
    const deleteItem = async (prop , reload) => {
      if(reload){
        setDeleting(true);
      }
      updateBasketItems({ name : prop.itemInCart.name , 
         cart : prop.cart , callBack : prop.updateBasket ,
         sku : prop.itemInCart.sku } , "deleteItem" );
    }
    const saveForLater = (prop) => {
      setSavingForLater(true);
      updateBasketItems({ name : prop.itemInCart.name , cart : prop.cart ,
        callBack : prop.updateBasket , sku : prop.itemInCart.sku ,
        saveForLater : prop.saveForLater , itemInCart : prop.itemInCart } , "deleteItem" );
    }
    const addItemToWishlist = async (prop) =>{
        setMovingToWishlist(true);
        await deleteItem(prop , false);
        let response = await addToWishlist(prop.itemInCart);
      if(response.success){
        setMovingToWishlist(false);
      }
    }
    const setQuantity = (e, prop ) => {
      e.persist();
      let dropdownVal = parseInt(e.target.value);
      setCheckQty(true);
      setQtyAvailable(false); 
      setQtyNotAvailable(false);
      setOutOfStock(0);
      setTimeout(() => {
        setCheckQty(false);
        let operation = "";
        if( dropdownVal > prop.itemInCart.availableQty ){
            setOutOfStock(dropdownVal);
            setQtyAvailable(false); 
            setQtyNotAvailable(true);  
        } else{      
          setQtyAvailable(true);
          setQtyNotAvailable(false);
          operation = "update";
          setSelectedQty(dropdownVal);
        }
       if("update" == operation ){
          updateBasketItems({ newQty : dropdownVal , name : prop.itemInCart.name , cart : prop.cart , callBack : prop.updateBasket } , "updateQty" );
       }
      }, 2000);
    }
    const updateBasketItems = async (payLoad , operation ) => {
      if("updateQty" == operation){
        payLoad.cart.find((_) => {
          if (_.name == payLoad.name){
              _.selectedQty = payLoad.newQty ;
          }
        });
      }else
      if("deleteItem" == operation){
        let response = await deleteFromCart(payLoad.sku , "cart");
        if(response.success){
          setDeleting(false);
          setQtyAvailable(false);
          if(payLoad.saveForLater) {
            console.log("saving ..." +   payLoad.itemInCart)
             let response = await addToSavedForLater(payLoad.itemInCart);
             if(response.success){
              setSavingForLater(false);
              payLoad.saveForLater(getSavedForLater());
             }
           }
        }
        payLoad.cart = getCart();
      }
      if(payLoad.callBack) {
         payLoad.callBack(payLoad.cart);
      }
    }
    return (<div className ="col-xs-12 __cart_item_card_wrapper">
        <div className ="col-xs-6 col-md-2 __cart_item_card_img">
            <a><img src = {props.itemInCart.img} className = "img-responsive"/></a>
        </div>
        <div className ="col-xs-6 col-md-6 __cart_item_card">
            <p style = {{margin:0}}> A genuine item from : <a> {props.itemInCart.brand} </a> </p>
             <p className ="__cart_product_name">{props.itemInCart.name}</p>
            <p>Delivered on : <span style ={{color: 'green', fontWeight: 'bold'}}>15/04/2020</span></p>
            <small style = {{color: '#B12704'}}>Only 3 left in stock (more on the way).</small><br/>
          <div className ="__cart_item_actions_inline_wrap"><div><i className="fas fa-trash-alt"></i><a onClick = {() => deleteItem(props , true)} className ="__cart_actions">Delete</a> { deleting ? <LoaderComponent label = "" paragraph = {false}/> : null } </div>
  |       <div><i className="fas fa-save"></i><a className ="__cart_actions" onClick = { () => saveForLater(props)}>Save for later</a> { savingForLater ? <LoaderComponent label = "" paragraph = {false}/> : null } </div>
  |       <div><i className="fas fa-heart"></i><a className ="__cart_actions" onClick = { () => addItemToWishlist(props)}>Move to wishlist</a> { movingToWishlist ? <LoaderComponent label = "" paragraph = {false}/> : null }</div></div>
  
        </div>
        <div className ="col-xs-6 col-md-2 __cart_item_card">
          <h3 style = {{color : '#B12704' , fontWeight: 'bold' , marginBottom: 0}}>AED {props.itemInCart.newPrice}</h3> 
          <p className = "__cart_was">was AED <strike>{props.itemInCart.oldPrice}</strike></p>                                 
        </div>
        <div className ="col-xs-6 col-md-2 __cart_item_card">
            <p style = {{fontWeight: 'bold'}}>Quantity</p>
             <p className="__cart_qty_wrapper">
                <select value = {selectedQty} onChange = {(e) => setQuantity(e, props )}>
                  { itemQty.map((qty) => <option key = {qty} value = {qty}> {qty} </option>) }
                </select>
            </p>
             { checkQty ? <LoaderComponent label = "Checking ..."  paragraph = {true}/> : null }    
             { qtyAvailable ? <SuccessComponent label = "Available" paragraph = {true}/> : null }
             { qtyNotAvailable ? <FailureComponent label = {"["+ outOfStock + "] Too many"} paragraph = {true} /> : null }
        </div>
  </div>)
  }
  

  export function WishlistItemDrawer(props) {
    const [deleting , setDeleting ] = useState(false);
    const [movingToWishlist , setMovingToWishlist ] = useState(false);
  
    const deleteItem = async (sku , loader ) => {
      loader ? setDeleting(true) : null;
      let response = await props.deleteItem(sku);
      if(response.success){
          setDeleting(false);
          props.updateWishlist();
      }
    }
    const addItemToCart = async (prop) =>{
          setMovingToWishlist(true);
          await deleteItem(prop.sku , false);
          let response = await props.addToCart(prop , "cart");
      if(response.success){
          setMovingToWishlist(false);
       }
   }

    return (<div className ="col-xs-12 __cart_item_card_wrapper">
         <div className ="col-xs-4 col-md-2 __cart_item_card_img">
            <a><img src = {props.itemInWishlist.img} className = "img-responsive"/></a>
         </div>
        <div className ="col-xs-4 col-md-5 __cart_item_card">
            <p style = {{margin:0}}> A genuine item from : <a> {props.itemInWishlist.brand} </a> </p>
             <p className ="__cart_product_name">{props.itemInWishlist.name}</p>
          <div className ="__cart_item_actions_inline_wrap"><div><i className="fas fa-trash-alt"></i><a onClick = {() => deleteItem(props.itemInWishlist.sku, true)} className ="__cart_actions">Delete</a> { deleting ? <LoaderComponent label = "" paragraph = {false}/> : null } </div>
  |       <div><i className="fas fa-shopping-cart"></i><a className ="__cart_actions" onClick = { () => addItemToCart(props.itemInWishlist)}>Move to cart</a> { movingToWishlist ? <LoaderComponent label = "" paragraph = {false}/> : null }</div></div>
  
        </div>
        <div className ="col-xs-4 col-md-5 __cart_item_card">
          <h3 style = {{color : '#B12704' , fontWeight: 'bold' , marginBottom: 0}}>AED {props.itemInWishlist.newPrice}</h3> 
          <p className = "__cart_was">was AED <strike>{props.itemInWishlist.oldPrice}</strike></p>                                 
        </div>
  </div>)
  }