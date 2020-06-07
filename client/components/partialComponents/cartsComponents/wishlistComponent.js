import { useState ,useEffect, useContext  } from 'react';
import CustomButton from '../../statelessComponents/customButtonComponent';
import Router from 'next/router';
import {CartContext} from '../../contextAPI/cartContext';
import EmptyBasket from './commonComponents/emptyBasketComponent';
import {WishlistItemDrawer} from './commonComponents/itemDrawerComponent';

function WishlistComponent (props) {
   const [productInfo , setProductInfo ] = useState([]);
   const { getWishlist , addToCart , deleteFromWishlist } = useContext(CartContext);
   useEffect(() => {
     setProductInfo(getWishlist());
   },[]);
   
   const goToBasket = ()=>{
      Router.push("/cart/my-cart");
   }
   const continueShopping = () => {
      Router.push("/");
   }
   const updateWishlist = ()=>{
      setProductInfo(getWishlist());
   }
    return(<>
          <div className="container-fluid __productlisting __cart_wrapper">
                 <div className="row">
                      <div className="col-xs-12 col-md-8">
                          <div className ="__cart_items_header">Items in Wishlist ({productInfo.length})</div>
                           <div className="row"> 
                            { productInfo.map ((item , index) => {
                              return  <WishlistItemDrawer itemInWishlist = {item} key = {index} deleteItem = {deleteFromWishlist} addToCart = {addToCart} updateWishlist = {updateWishlist}/>
                            })} 
                            {productInfo.length == 0 ? <EmptyBasket name = "Wishlist"/> : null } 
                          </div>                         
                      </div>
                      <div className="col-xs-12 col-md-4"> 
                                <div className="__cart_items_header">Wish List Actions</div> 
                              <div className = "row">
                                <div className ="col-xs-12">
                                  { productInfo.length !== 0 ? <CustomButton  buttonName = "GO TO BASKET" Click = {goToBasket}/> : null }
                                </div>
                                <div className ="col-xs-12" style = {{marginTop: 7 }}>
                                 <CustomButton  buttonName = "CONTINUE SHOPPING" Click = {continueShopping}/> 
                                </div>                       
                             </div>                                 
                     </div>
                 </div>
             </div>
    </>)
}
export default WishlistComponent;
