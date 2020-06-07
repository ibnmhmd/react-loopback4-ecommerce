import React, { createContext , useState , useEffect } from 'react';
import Service from '../classes/services';
export const CartContext = createContext();
const CARTMANAGER = require('../../utils/cartManager');
const USER = require('../../utils/customerManager');
const SIZE = CARTMANAGER.getCartSize();
const URI = require('../../api/config.property');
const service = new Service();
function CartContextProvider(props){
    const [ cartSize , setSize ] = useState(SIZE);
    const [ wishlistSize , setWishlistSize ] = useState(SIZE);
    const [ jwtAuthHeader , setJWTHeader ] = useState("");
    const refreshCart = () => {
        setSize(SIZE);
        setWishlistSize(getWishlistSize());
    }
    useEffect(()=>{
        setJWTHeader(`Bearer ${localStorage.getItem('iShopUserToken')}`);
    },[jwtAuthHeader])
    const addToCart = async (item , store) => {
      let promise = new Promise( async (resolve , reject) => {
            setTimeout( async () => {
                switch(store){
                    case "cart" : 
                      if(isLoggedInUser()){
                        item.itemStatus="Added to cart";
                        const url = `${URI.ADD_TO[0]}/${getCustomerProfile().basket.id}`;
                        const requestBody = { item }
                          await service.post({url, requestBody , headers : { Authorization : jwtAuthHeader } }).then( async (response) => {
                                if(response.data.success){
                                    await getProfile();
                                    resolve({ success : response.data.success , cartSize : setSize(getCartSize()), message : response.data.message });   
                                }
                           }).catch( (error) => {
                             console.error(error);
                              reject ({ success : false, cartSize : setSize(getCartSize()), message : "failed to add to cart", serverMessage : error.response.data.error.message});   
                           });
                      }else
                        if(CARTMANAGER.addToCart(item)){
                             resolve ({ success : true , cartSize : setSize(getCartSize()) , message : "added to cart"});
                        }else{
                            reject ({ success : false , cartSize : setSize(getCartSize()) , message : "failed to add to cart"});   
                        }
                    break;
                    case "wishlist" : 
                       if(isLoggedInUser()){
                        item.itemStatus="Added to wishlist";
                        const url = `${URI.ADD_TO[1]}/${getCustomerProfile().basket.id}`;
                        const requestBody = { item }
                          await service.post({url, requestBody , headers : { Authorization : jwtAuthHeader } }).then( async (response) => {
                                if(response.data.success){
                                    await getProfile();
                                    resolve({ success : response.data.success , wishlistSize : setWishlistSize(getWishlistSize()), message : response.data.message });   
                                }
                           }).catch( (error) => {
                             console.error(error);
                              reject ({ success : false, wishlistSize : setWishlistSize(getWishlistSize()), message : "failed to add to wishlist", serverMessage : error.response.data.error.message});   
                           });
                       }else
                        if(CARTMANAGER.addToWishlist(item)){
                            resolve ({ success : true , wishlistSize : setWishlistSize(getWishlistSize()) , message : "added to wishlist"});
                        }else{
                            reject ({ success : false , wishlistSize : setWishlistSize(getWishlistSize()) , message : "failed to add to wishlist"});
                        }
                        break;
                    case "saveForLater":
                        if(isLoggedInUser()){
                            item.itemStatus="Added to savedforlater";
                            const url = `${URI.ADD_TO[2]}/${getCustomerProfile().basket.id}`;
                            const requestBody = { item }
                              await service.post({url, requestBody, headers : { Authorization : jwtAuthHeader } }).then( async (response) => {
                                    if(response.data.success){
                                        await getProfile();
                                        resolve({ success : response.data.success , cartSize : setSize(getSavedForLaterSize()), message : response.data.message });   
                                    }
                               }).catch( (error) => {
                                 console.error(error);
                                  reject ({ success : false, wishlistSize : setSize(getSavedForLaterSize()), message : "failed to add to saveforlater", serverMessage : error.response.data.error.message});   
                               });
                           }else
                        if(CARTMANAGER.addToSavedForLater(item)){
                            resolve ({ success : true , cartSize : setSize(getSavedForLaterSize()) , message : "added to savedforlater"});
                         }else{
                            reject ({ success : false , cartSize : setSize(getSavedForLaterSize()) , message : "failed to saveforlater"}); 
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
        });

       return await promise;
    }
    const addToSavedForLater = async (item) => {
        let promise = await addToCart(item , "saveForLater").catch((err) => { 
            return err.JSON || err;
        });
        return  promise;
    }
    const addToWishlist = async (item) => {
        let promise = await addToCart(item , "wishlist").catch((err) => { 
            return err.JSON || err;
        });
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
        let promise = await addToCart(items , "checkout").catch((err) => { 
            return err.JSON || err;
        });
        return  promise;
    }
    const getCustomerProfile =() => {
        return USER.getCustomerProfile();
    }
    const isLoggedInUser =() => {
        return USER.isLoggedInUser();
    }
    const isJWTValid = async () => {

        const headers = {
              headers : {
                 ContentType: 'application/json',
                 Authorization : `Bearer ${localStorage.getItem('iShopUserToken')}`
              }
            };
        return await service.get({url : URI.CHECK_JWT , headers }).then( (response) => {
                      return {validJWT : response.data.valid};
                     }).catch( (error) => {
                       return {validJWT : false, message : error };
                     }); 
    }
    const deleteFromCart = async (sku , store) => {
        let promise = new Promise((resolve , reject) => {
              setTimeout( async () => {
                  switch(store) {
                      case "saveForLater" :
                        if(isLoggedInUser()){
                            const url = `${URI.DELETE_FROM[2]}/${getCustomerProfile().basket.id}/${sku}`;
                              await service.get({url , headers : { headers: {Authorization : jwtAuthHeader} }}).then( async (response) => {
                                    if(response.data.success){
                                        await getProfile();
                                        resolve({ success : response.data.success , cartSize : setSize(getSavedForLaterSize()), message : response.data.message });   
                                    }
                               }).catch( (error) => {
                                 console.log(error.response);
                                  reject ({ success : false, cartSize : setSize(getSavedForLaterSize()), message : "failed to delete from savedforlater", serverMessage : error.response.data.error.message});   
                               });
                          }else
                        if(CARTMANAGER.deleteFromSavedForLater(sku)){
                            resolve({ success : true , cartSize : setSize(getSavedForLaterSize()) , message : "Item has been deleted."});
                         }else{
                          reject({ success : false , cartSize : setSize(getSavedForLaterSize()) , message : "Error deleting item."});
                         }
                         break;
                     case "cart" :
                        if(isLoggedInUser()){
                            const url = `${URI.DELETE_FROM[0]}/${getCustomerProfile().basket.id}/${sku}`;
                              await service.get({url, headers : { headers: {Authorization : jwtAuthHeader} } }).then( async (response) => {
                                    if(response.data.success){
                                        await getProfile();
                                        resolve({ success : response.data.success , cartSize : setSize(getCartSize()), message : response.data.message });   
                                    }
                               }).catch( (error) => {
                                  console.log(error.response);
                                  reject ({ success : false, cartSize : setSize(getCartSize()), message : "failed to delete from cart", serverMessage : error.response.data.error.message});   
                               });
                          }else
                          if(CARTMANAGER.deleteFromCart(sku)){
                            resolve ({ success : true , cartSize : setSize(getCartSize()) , message : "Item has been deleted."});
                          }else{
                            reject ({ success : false , cartSize : setSize(getCartSize()) , message : "Error deleting item."}); 
                          }
                         break;
                    case "wishlist" :
                           if(isLoggedInUser()){
                            const url = `${URI.DELETE_FROM[1]}/${getCustomerProfile().basket.id}/${sku}`;
                              await service.get({url, headers : { headers: {Authorization : jwtAuthHeader} }}).then( async (response) => {
                                    if(response.data.success){
                                        await getProfile();
                                        resolve({ success : response.data.success , cartSize : setWishlistSize(getWishlistSize()), message : response.data.message });   
                                    }
                               }).catch( (error) => {
                                 console.error(error.response.data.error.message);
                                  reject ({ success : false, cartSize : setWishlistSize(getWishlistSize()), message : "failed to delete from cart", serverMessage : error.response.data.error.message});   
                               });
                           }else
                            if(CARTMANAGER.deleteFromWishlist(sku)){
                                resolve ({ success : true , cartSize : setWishlistSize(getWishlistSize()) , message : "Item has been deleted."});
                             }else{
                              reject ({ success : false , cartSize : setWishlistSize(getWishlistSize()) , message : "Error deleting item."}); 
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
        let promise = await deleteFromCart(sku , "saveForLater").catch((err) => { 
            return err.JSON || err;
        });
       return promise;
      }
      const deleteFromWishlist = async (sku) => {
        let promise = await deleteFromCart(sku , "wishlist").catch((err) => { 
            return err.JSON || err;
        });
       return promise;
      }
      const signOut = async () => {
        const promise = await new Promise((resolve , reject) => {
            setTimeout(()=> {
                if(USER.signOut()){
                    refreshCart();
                    resolve({success : true , message : "Successfully signed out"});
                }else{
                    reject({success : false});
                }
            }, 1000);
        });
        return await promise;
      }

      const getProfile = async () =>{
        const self = this;
        const headers =  {
          headers: {
                   Authorization: jwtAuthHeader
              } 
         }
         await service.get({ url : URI.GET_PROFILE , headers }).then((profile) => {
            localStorage.removeItem("customerProfile");
            profile.data.status = "loggedIn";
            localStorage.setItem("customerProfile" , JSON.stringify(profile.data));
          }).catch((err) => {
            console.log(err);
          });
       }

    return (<CartContext.Provider value = { { cartSize , wishlistSize , addToCart , 
              addToWishlist , getCart,
              clearBasket , addToCheckout,
              getCheckout, confirmBakset , 
              getBasketConfirmation , getCartSize ,
              deleteFromCart, addToSavedForLater , deleteFromSavedForLater , 
              getSavedForLaterSize , getSavedForLater , deleteFromWishlist , 
              getWishlist, getWishlistSize , getCustomerProfile , isLoggedInUser,
              signOut, isJWTValid
               } }>
              { props.children }
           </CartContext.Provider>) ;
}

export default CartContextProvider;