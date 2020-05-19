import { useState ,useEffect , useRef , useContext} from 'react';
import { useRouter } from 'next/router';
import { SuccessComponent , FailureComponent , LoaderComponent } from '../../statelessComponents/loadMoreProductsComponent';
import {CartContext} from '../../contextAPI/cartContext';
import BreadCrumb from '../../statelessComponents/breadCrumbsComponent';
import Validator from '../../classes/validator';

const validator = new Validator();
const products = require('../../../utils/products');

function FullView (props) {
   const router = useRouter();
   const [productInfo , setProductInfo ] = useState([]);
   const { addToCart , addToWishlist } = useContext(CartContext);
   const addToCartRef = useRef();
   const addToWishlistRef = useRef();
   /******* cart hooks */
   const [addingItem , setAddingItem] = useState(false);
   const [itemAdded , setItemAdded] = useState(false);
   const [itemFailed , setItemFailed] = useState(false);
   const [addToCartLabel , setAddToCartLabel] = useState("ADD TO CART");
   const [link , setLink] = useState("");
    /******* ends******/
 
     /******* wishlist hooks */
   const [addingToWishlist , setAddingToWishlist] = useState(false);
   const [itemAddedToWishlist , setItemAddedToWishlist] = useState(false);
   const [wishlistFailed , setWishlistFailed] = useState(false);
   const [addToWishlistLabel , setAddToWishlistLabel] = useState("ADD TO WISHLIST");
    /******* ends******/
   useEffect(() => {
     let product = {} , _link = [] , sku;
     if(router.query && router.query.id) {
      try{
          sku = router.query.id;
          debugger
          if(router.asPath.indexOf("?") != -1){
            let splitted = router.asPath.split("?");
            if(splitted[1].indexOf("-") != -1){
              _link = splitted[1].split("-");
            }else{
              _link.push(splitted[1]);
            }
          }     
          product = products.getProducts().find((_) => _.sku == sku );
        } catch(e){
        
       }
     }
     setProductInfo( product );
     _link.push(product.name);
     setLink(_link);
   }, [productInfo]);
   const addItemToCart = async (item) => {
    setAddToCartLabel("ADDING ...");
    setItemAdded(false);
    setAddingItem(true);
    setItemFailed(false);
    validator.disabledElem(addToCartRef);
    let itemAdded = false;
    let response = await addToCart(item , "cart");
    if(response.success){
      setItemAdded(true);
      setAddingItem(false);
      itemAdded = true;
    }else{ 
      setItemFailed(true);
    }
    setAddToCartLabel(response.message.toUpperCase());
    /***** clear failure msg *****/
    setTimeout(() => {
      if(!itemAdded){
        validator.enableElem(addToCartRef);
        setItemFailed(false);
        setAddToCartLabel("ADD TO CART");
      }
      
    }, 4000);
  }
  const addItemToWishlist = async (item) => {
    setAddToWishlistLabel("ADDING ...");
    setItemAddedToWishlist(false);
    setAddingToWishlist(true);
    setWishlistFailed(false);
    validator.disabledElem(addToWishlistRef);
    let itemAdded = false;
    let response = await addToWishlist(item);
    if(response.success){
      setItemAddedToWishlist(true);
      setAddingToWishlist(false);
      itemAdded = true;
    }else{ 
      setWishlistFailed(true);
    }
    setAddToWishlistLabel(response.message.toUpperCase());
    /***** clear failure msg *****/
    setTimeout(() => {
      if(!itemAdded){
        validator.enableElem(addToWishlistRef);
        setWishlistFailed(false);
        setAddToWishlistLabel("ADD TO WISHLIST");
      }
      
    }, 4000);
  }
    return(<>
          <div className =""><BreadCrumb link = {link}/> </div>
          <div className="container-fluid __productlisting">
                 <div className="row">
                       <div className="col-xs-12 col-md-4">
                         <img className = "img-responsive" src= { productInfo.bigImg ? productInfo.bigImg :  productInfo.img } alt="product image"/>
                      </div>
                     <div className="col-xs-12 col-md-5 __fullview_products_wrapper"> 
                         <div className = "__fullview_title_wrapper">
                           <h1 className = "__fullview_title"><span>{productInfo.name}</span></h1>
                         </div> 
                          <div className ="line-height">by : <a>{productInfo.brand}</a></div>  
                          <div className ="__fullview_separator">ratings :  <span className ="yellow-tag">{productInfo.ratings}</span><a>({productInfo.comments} reviews)</a></div> 
                          <div className ="__fullview_price">Price : <span >AED {productInfo.newPrice}</span> </div>
                          <p className ="__fullview_vat_note">all prices are VAT inclusive</p>  
                          <div className ="__fullview_bold_note instock"><span >Usually ships within 2 to 3 days.</span> </div> 
                          <div className="line-height">Manufuctured and sold by {productInfo.brand} and ships and delivered by QExpress</div>  
                          <div className ="__fullview_bold_note" style ={{lineHeight: '1.8rem', marginTop:'1rem'}}>Get it as soon as Monday, April XX-XX, Month XX when you choose Standard Delivery at checkout.</div> 
                          <div className="">Edition : 5th Generation</div>  
                         
                          <div className = "row __fullview_action_btns">
                          <div className ="col-xs-12 col-md-6">
                             <a ref = {addToCartRef} className="customButton __checkout_confirm_btn" onClick = { () => addItemToCart(productInfo) }>{ !itemAdded ? <i className = "fas fa-shopping-cart __quick_item_font_awsome"></i>:null }
                                      { addToCartLabel }
                               { itemAdded ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { addingItem ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { itemFailed ? <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                            </a> 
                          </div>           
      
                          <div className ="col-xs-12 col-md-6">
                             <a ref = {addToWishlistRef} className="customButton __checkout_confirm_btn" onClick = { () => addItemToWishlist(productInfo) }> {!itemAddedToWishlist ? <i className = "far fa-heart __quick_item_font_awsome"></i>:null }
                                    { addToWishlistLabel }
                               { itemAddedToWishlist ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { addingToWishlist ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { wishlistFailed ?  <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                              </a> 
                          </div> 
                        </div>
                     </div>
                      <div className="col-xs-12 col-md-3 __fullview_ishop_facts">  
                          <p><i className="fas fa-undo"></i> Enjoy hassle free returns with this offer.</p>  
                          <p><i className="fas fa-credit-card"></i>We accept major credit & debut cards.</p> 
                          <p><i className="fas fa-home"></i>Trusted suppliers.</p> 
                          <p><i className="fas fa-truck"></i>Fast delivery.</p>   
                          <p><i className="fas fa-user"></i>Warranty guaranteed.</p>                         
                     </div>
                 </div>
                 <div className = "row __fullview_product_description"> 
                  <div className = "col-xs-12">
                    <ProductSpecs item = {productInfo}/>
                  </div>  
                 </div>
             </div>
    </>)
}
export default FullView;

function ProductSpecs(props) {
  return(     
    <div className="tabsCard">
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><span>OVERVIEW</span></a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"> <span>PRODUCT DETAILS</span></a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><span>PRODUCT SPECS</span></a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"><span>RATINGS & COMMENTS</span></a></li>
      </ul>
      

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="home">
          <p className ="line-height bold">INTRODUCTION</p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
          <p className ="line-height bold mtop-2">HIGHLIGHTS</p>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
          </ul>
         </div>
        <div role="tabpanel" className="tab-pane" id="profile">
        <p className ="line-height bold">DETAILS</p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
        </div>
        <div role="tabpanel" className="tab-pane" id="messages">
        <p className ="line-height bold">SPECIFICATIONS</p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <div role="tabpanel" className="tab-pane" id="settings">
         <p className ="line-height bold">OVERALL RATING</p>
        
         <div className ="col-xs-4">
            <div className ="overallratings bold" >{props.item.ratings}</div>
            <p className ="line-height">based on the reviews</p>
          </div>
      
        <div className ="col-xs-8">
        <p className ="line-height bold underline">OVERVIEWS</p>
         
             <p className ="line-height bold mb-0">User 1</p>
             <p className ="line-height"> Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and</p>

             <p className ="line-height bold mb-0">User 2</p>
             <p className ="line-height"> Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and</p>

             <p className ="line-height bold mb-0">User 3</p>
             <p className ="line-height"> Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and</p>

             <p className ="line-height bold mb-0">User 4</p>
             <p className ="line-height"> Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and</p>

             <p className ="line-height bold mb-0">User 5</p>
             <p className ="line-height"> Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type and</p>
            </div>
           </div>
      </div>
    </div>);
}
