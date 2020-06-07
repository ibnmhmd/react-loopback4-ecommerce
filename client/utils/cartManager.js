const CUST = require('./customerManager');
const getCartSize = () => {
    let size = 0 ;
    if (typeof window !== 'undefined') {
        if(CUST.isLoggedInUser()){
            size = getCustomerCartSize("cart");
        }else
        if(localStorage.getItem("iShopCart")){
            try {
                 size = JSON.parse(localStorage.getItem("iShopCart")).length;
            } catch (error) {
                console.error("Error getting cart :: "+ error );
            }
       }else{
           initCart("getCartSize");
       }
    } else {
        console.log('we are running on the server');
    }  
    return size;
}

const getSavedForLaterSize = () => {
    let size = 0 ;
    if (typeof window !== 'undefined') {
        if(CUST.isLoggedInUser()){
            size = getCustomerCartSize("savedForLater");
        }else
        if(localStorage.getItem("iShopSavedForLater")){
            try {
                 size = JSON.parse(localStorage.getItem("iShopSavedForLater")).length;
            } catch (error) {
                console.error("Error getting cart :: "+ error );
            }
       }else{
           initCart("getCartSize");
       }
    } else {
        console.log('we are running on the server');
    }  
    return size;
}

const addToCart = (item) => {
    let cartAdded = false ;
    try {   
              let cartData = getCart();
              cartData.push(item); 
              resetItemByKey("iShopCart");    
              localStorage.setItem("iShopCart",JSON.stringify(cartData));
              cartAdded = true;
    } catch (error) {
             console.error("Error adding to cart :: "+ error );
    }
  return cartAdded;
}

const resetItemByKey = (key) => {
    if(localStorage.getItem(key)){
        localStorage.setItem(key , "");
    }
}
const deleteFromCart = (sku) => {
    let cart = getCart() , deleted = false;
    if(cart.length > 0){
        cart = cart.filter((_) => {return _.sku !== sku});
        resetItemByKey("iShopCart");
        localStorage.setItem("iShopCart",JSON.stringify(cart));   
        deleted = true;
    }
    return deleted;
}
const deleteFromWishlist = (sku) => {
    let cart = getWishlist() , deleted = false;
    if(cart.length > 0){
        cart = cart.filter((_) => {return _.sku !== sku});
        resetItemByKey("iShopWishlist");
        localStorage.setItem("iShopWishlist",JSON.stringify(cart));   
        deleted = true;
    }
    return deleted;
}
const getCart = () => {
    if(getCartSize() !== 0 ){
        if(CUST.isLoggedInUser()){
           const customerProfile = CUST.getCustomerProfile();
           return customerProfile.basket.cart.items
        }
        return JSON.parse(localStorage.getItem("iShopCart"));
    }else{
        return new Array();
    }
}
const getWishlist = () => {
    if(getWishlistSize() !== 0 ){
        if(CUST.isLoggedInUser()){
            const customerProfile = CUST.getCustomerProfile();
            return customerProfile.basket.wishlist.items;
         }
        return JSON.parse(localStorage.getItem("iShopWishlist"));
    }else{
        return new Array();
    }
}
const getWishlistSize = () => {
    let size = 0 ;
    if (typeof window !== 'undefined') {
        if(CUST.isLoggedInUser()){
            size = getCustomerCartSize("wishlist");
        }else
        if(localStorage.getItem("iShopWishlist")){
            try {
                 size = JSON.parse(localStorage.getItem("iShopWishlist")).length;
            } catch (error) {
                console.error("Error getting cart :: "+ error );
            }
       }else{
           initCart("iShopWishlist");
       }
    }  
    return size;
}
const getSavedForLater = () => {
    if(getSavedForLaterSize() !== 0 ){
        if(CUST.isLoggedInUser()){
            const customerProfile = CUST.getCustomerProfile();
            return customerProfile.basket.savedForLater.items;
         }
        return JSON.parse(localStorage.getItem("iShopSavedForLater"));
    }else{
        return new Array();
    }
}
const clearBasket = () => {
    localStorage.removeItem("iShopCart");
    localStorage.removeItem("iShopSavedForLater");
    localStorage.removeItem("iShopSavedForLater");
}
const initCart = (caller) => {
    localStorage.setItem("iShopSavedForLater" , JSON.stringify([]));
    localStorage.setItem("iShopCart" , JSON.stringify([]));
    localStorage.setItem("iShopWishlist" , JSON.stringify([]));
    localStorage.setItem("iShopCartAudit" , JSON.stringify({caller  , reason : "Empty cart initialization ."}));
}
const addToCheckout = (items) => {
    localStorage.setItem("iShopCheckoutCart" , JSON.stringify([]));
    localStorage.setItem("iShopCheckoutCart" , JSON.stringify(items));
    return true;
}

const getCheckout = () => {
    return JSON.parse (localStorage.getItem("iShopCheckoutCart"));
}
const setBasketConfirmation = (item) => {
  let basketConfirmation = localStorage.getItem("iShopBasketConfirmation");
  if(null !== basketConfirmation ) {
    basketConfirmation = JSON.parse(basketConfirmation);
  }else{
    basketConfirmation = {};
  }
  basketConfirmation[item.key] = item.confirmed;
  localStorage.setItem("iShopBasketConfirmation", JSON.stringify(basketConfirmation));
}
const getBasketConfirmation = () => {
   return JSON.parse (localStorage.getItem("iShopBasketConfirmation"));
}
const addToSavedForLater = (item) => {
    let cartAdded = false ;
    try {   
              let cartData = getSavedForLater();
              cartData.push(item); 
              resetItemByKey("iShopSavedForLater");    
              localStorage.setItem("iShopSavedForLater",JSON.stringify(cartData));
              cartAdded = true;
    } catch (error) {
             console.error("Error adding to saved for later :: "+ error );
    }
  return cartAdded;
}
const addToWishlist = (item) => {
    let cartAdded = false ;
    try {   
              let cartData = getWishlist();
              cartData.push(item); 
              resetItemByKey("iShopWishlist");    
              localStorage.setItem("iShopWishlist",JSON.stringify(cartData));
              cartAdded = true;
    } catch (error) {
             console.error("Error adding to iShopWishlist :: "+ error );
    }
  return cartAdded;
}
const deleteFromSavedForLater = (sku) => {
    let cart = getSavedForLater() , deleted = false;
    if(cart.length > 0){
        cart = cart.filter((_) => {return _.sku !== sku});
        resetItemByKey("iShopSavedForLater");
        localStorage.setItem("iShopSavedForLater",JSON.stringify(cart));   
        deleted = true;
    }
    return deleted;
}
const getCustomerCartSize = (target) => {
  const profile = CUST.getCustomerProfile();
  if(profile && profile.basket){
      switch(target){
          case "cart":
            return profile.basket.cart ? profile.basket.cart.items.length : 0;
          case "wishlist":
            return profile.basket.wishlist ? profile.basket.wishlist.items.length : 0;
          case "savedForLater":
            return profile.basket.savedForLater ? profile.basket.savedForLater.items.length : 0;
          default:
              return 0;
      }
  }else{
      return 0;
  }
}
module.exports = {
  getCartSize,
  addToCart,
  getCart,
  clearBasket,
  addToCheckout,
  getCheckout,
  setBasketConfirmation,
  getBasketConfirmation,
  deleteFromCart,
  addToSavedForLater,
  deleteFromSavedForLater,
  getSavedForLaterSize,
  getSavedForLater,
  addToWishlist,
  getWishlist,
  deleteFromWishlist,
  getWishlistSize,
  getCustomerCartSize
}