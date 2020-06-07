import CustomButton from '../../../statelessComponents/customButtonComponent';
import Router from 'next/router';
import { useState , useEffect } from 'react';
const CUST = require('../../../../utils/customerManager');

export default function EmptyBasket(props) {
    const [ message , setMessage ] = useState(`Your ${props.name} is empty :)`);
    const continueShopping = () => {
      Router.push("/");
    }
    useEffect(()=>{
      if("Wishlist" == props.name && !CUST.isLoggedInUser()){
         setMessage("PLEASE LOGIN TO USE THIS FEATURE .");
      }
    });
    return ( <div className ="col-xs-12 __cart_item_card_wrapper __cart_empty_basket">
                  <h2> { message }</h2>
                  <CustomButton  buttonName = "CONTINUE SHOPPING" Click = {continueShopping}/>
           </div>)
  }