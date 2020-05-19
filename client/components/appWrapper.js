import Head from './head';
import Nav from './nav';
import SearchBarComponent from './searchBar';
import TopBarComponent from './stickyTopBar';
import DiscountBarComponent from './discountBar';
import Footer from './footerComponent';
import { string } from 'prop-types';
import  StyleContextProvider from '../components/contextAPI/styleContext';
import  RouteContextProvider from './contextAPI/routingContext';
import CartContextProvider from './contextAPI/cartContext';
import {useState , useContext } from "react";

const title = '';
function Wrapper (props) {
    return (<React.Fragment>
                <StyleContextProvider>
                <Head title= {props.title} description = {props.description} />
                <CartContextProvider>
                <TopBarComponent />              
                <SearchBarComponent />
                    <Nav />
                    <DiscountBarComponent />
                    {props.children}
              </CartContextProvider>
            </StyleContextProvider>   
            <Footer />
       </React.Fragment>);
} 

Wrapper.prototype = {
 title : string
}
export default React.memo(Wrapper);