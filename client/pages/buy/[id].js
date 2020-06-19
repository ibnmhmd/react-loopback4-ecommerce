import React from 'react';
import Wrapper from '../../components/appWrapper';
import { useEffect , useState , useContext } from 'react';
import {CartContext} from '../../components/contextAPI/cartContext';
import Checkout from '../../components/partialComponents/checkout/checkoutComponent';
export default function ProductListing() {

    useEffect(function(){
        console.log("cart size :: ")
    });
        return (
             <Wrapper title = "Checkout items" description = "Checkout page for iBoutique">
             <div className="container __registeration">
               <Checkout />        
             </div>
            </Wrapper>
        )
}