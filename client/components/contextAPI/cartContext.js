import React, { createContext , useState , useEffect } from 'react';
export const CartContext = createContext();
const CARTMANAGER = require('../../utils/cartManager');
const USER = require('../../utils/customerManager');
const SIZE = CARTMANAGER.getCartSize();

function CartContextProvider(props){
    const [ cartSize , setSize ] = useState(SIZE);
    const [ wishlistSize , setWishlistSize ] = useState(SIZE);

    const addToCart = async (item , store) => {
      let promise = new Promise((resolve , reject) => {
            setTimeout(() => {
                switch(store){
                    case "cart" : 
                        if(CARTMANAGER.addToCart(item)){
                             resolve ({ success : true , cartSize : setSize(CARTMANAGER.getCartSize()) , message : "added to cart"});
                        }else{
                            reject ({ success : false , cartSize : setSize(CARTMANAGER.getCartSize()) , message : "failed to add to cart"});   
                        }
                    break;
                    case "wishlist" : 
                        if(CARTMANAGER.addToWishlist(item)){
                            resolve ({ success : true , wishlistSize : setWishlistSize(CARTMANAGER.getWishlistSize()) , message : "added to wishlist"});
                        }else{
                            reject ({ success : false , wishlistSize : setWishlistSize(CARTMANAGER.getWishlistSize()) , message : "failed to add to wishlist"});
                        }
                        break;
                    case "saveForLater":
                        if(CARTMANAGER.addToSavedForLater(item)){
                            resolve ({ success : true , cartSize : setSize(CARTMANAGER.getSavedForLaterSize()) , message : "added to saved for later"});
                         }else{
                            reject ({ success : false , cartSize : setSize(CARTMANAGER.getSavedForLaterSize()) , message : "failed to save for later"}); 
                         }
                         break;
                    case "checkout" :
                        if(CARTMANAGER.addToCheckout(item)){
                            resolve ({success : true , message : "Items have been successfully added to checkout ."});
                        }else{
                            reject({success : false , message : "Failed to add to checkout ."});
                        }
                        break;
                    default :
                     return getCart();
                }
               
            }, 2000);
        })
       return await promise;
    }
    const addToSavedForLater = async (item) => {
        let promise = await addToCart(item , "saveForLater");
        return  promise;
    }
    const addToWishlist = async (item) => {
        let promise = await addToCart(item , "wishlist");
        return  promise;
    }
    const getCart = () => {
        return CARTMANAGER.getCart();
    }
    const getSavedForLater = () => {
        return CARTMANAGER.getSavedForLater();
    }
    const clearBasket = () => {
        return CARTMANAGER.clearBasket();
    }
    const getCheckout = () => {
        return CARTMANAGER.getCheckout();
    }
    const confirmBakset = (basket) => {
        CARTMANAGER.setBasketConfirmation(basket);
    }
    const getBasketConfirmation = () => {
        return CARTMANAGER.getBasketConfirmation();
    }
    const getCartSize = () => {
        return CARTMANAGER.getCartSize();
    }
    const getSavedForLaterSize = () => {
        return CARTMANAGER.getSavedForLaterSize();
    }
    const getWishlist = () => {
        return CARTMANAGER.getWishlist();
    }
    const getWishlistSize = () => {
        return CARTMANAGER.getWishlistSize();
    }
    const addToCheckout = async (items) => {
        let promise = await addToCart(items , "checkout");
        return  promise;
    }
    const getCustomerProfile =() => {
        return USER.getCustomerProfile();
    }
    const loggedInUser =() => {
        return USER.isUserLoggedIn();
    }
    const deleteFromCart = async (sku , store) => {
        let promise = new Promise((resolve , reject) => {
              setTimeout(() => {
                  switch(store) {
                      case "saveForLater" :
                        if(CARTMANAGER.deleteFromSavedForLater(sku)){
                            resolve({ success : true , cartSize : setSize(CARTMANAGER.getSavedForLaterSize()) , message : "Item has been deleted."});
                         }else{
                          reject({ success : false , cartSize : setSize(CARTMANAGER.getSavedForLaterSize()) , message : "Error deleting item."});
                         }
                         break;
                     case "cart" :
                        if(CARTMANAGER.deleteFromCart(sku)){
                            resolve ({ success : true , cartSize : setSize(CARTMANAGER.getCartSize()) , message : "Item has been deleted."});
                         }else{
                          reject ({ success : false , cartSize : setSize(CARTMANAGER.getCartSize()) , message : "Error deleting item."}); 
                         }
                         break;
                    case "wishlist" :
                            if(CARTMANAGER.deleteFromWishlist(sku)){
                                resolve ({ success : true , cartSize : setSize(CARTMANAGER.getWishlistSize()) , message : "Item has been deleted."});
                             }else{
                              reject ({ success : false , cartSize : setSize(CARTMANAGER.getWishlistSize()) , message : "Error deleting item."}); 
                             }
                             break;
                    default:
                        return null;
                  }
                 
              }, 2000);
          })
       return await promise;
      }
      const deleteFromSavedForLater = async (sku) => {
        let promise = await deleteFromCart(sku , "saveForLater");
       return promise;
      }
      const deleteFromWishlist = async (sku) => {
        let promise = await deleteFromCart(sku , "wishlist");
       return promise;
      }
      const signOut = async () => {
        const promise = await new Promise((resolve , reject) => {
            setTimeout(()=> {
                if(USER.signOut()){
                    resolve({success : true , message : "Successfully signed out"});
                }else{
                    reject({success : false});
                }
            }, 1000);
        });
        return await promise;
      }
    return (<CartContext.Provider value = { { cartSize , wishlistSize , addToCart , 
              addToWishlist , getCart,
              clearBasket , addToCheckout,
              getCheckout, confirmBakset , 
              getBasketConfirmation , getCartSize ,
              deleteFromCart, addToSavedForLater , deleteFromSavedForLater , 
              getSavedForLaterSize , getSavedForLater , deleteFromWishlist , 
              getWishlist, getWishlistSize , getCustomerProfile , loggedInUser,
              signOut
               } }>
              { props.children }
           </CartContext.Provider>) ;
}

export default CartContextProvider;