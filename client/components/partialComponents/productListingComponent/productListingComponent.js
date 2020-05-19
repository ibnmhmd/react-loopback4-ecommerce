import { useState ,useEffect  } from 'react';
import ProductCard from '../../statelessComponents/productCardComponent';
import { LoadMore } from '../../statelessComponents/loadMoreProductsComponent';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import BreadCrumb from '../../statelessComponents/breadCrumbsComponent';

const products = require('../../../utils/products');
function ProductLisiting (props) {
   const [productInfo , setProductInfo ] = useState([]);
   const [sort , setSort ] = useState([{key : "Featured" , flag : "featured"} , {key : "Price: High to Low", flag : "hTl"} , {key : "Price: Low to High" , flag: "lTh"} , {key : "Newest Arrival", flag:"nA"}]);
   const [selectedtSort , setSelectedSort] = useState("featured");
   const [breadCrumb , setBreadCrumbs] = useState([]);
   useEffect(() => {
      let link = [];
     if(props.breadCrumb.indexOf("-") != -1){
       link = props.breadCrumb.split("-");
     }else{
      link.push(props.breadCrumb);
     }
     setProductInfo( products.getProducts());
     setBreadCrumbs(link);
   }, [productInfo]);

   const sortProduct = (e) => {
     setSelectedSort(e.target.value);
   }

   const loadMore = () => {
    console.log("Loading more products ... ");
   }
    return(      <>  
                      <div className="col-xs-12 col-md-3">
                        <FiltersComponent />
                      </div>
                     <div className="col-xs-12 col-md-9 __productlisting_products_wrapper">  
                         <div className="row __productlisting_products"> 
                               <div className=" col-xs-12 __productlisting_products_sort">
                                  <div className="pull-left"> Showing 15 of 200 results for : {props.search}</div>
                                 <div className="pull-right"><label>Sort by </label><select value = {selectedtSort} onChange = { (event)=> sortProduct(event)}>
                                    { sort.map((_sort , index) => {
                                      return <option key = {index} value = { _sort.flag }> {_sort.key} </option>
                                    })}
                                   </select></div>
                              </div>               
                            {
                               productInfo.map(( product , index ) => {
                                 return  (
                                    <div className="col-xs-12 col-sm-4 col-md-3" key = {index}>
                                      <ProductCard productInfo = { product } key = {index} breadCrumb = {props.breadCrumb}/>
                                   </div>
                               );
                              })
                            } 
                        </div>  
                        {/**** load more ... ****/}  
                        <LoadMore LoadMore = { () => loadMore()} />                                       
                     </div>
    </>)
}
export default ProductLisiting;

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button type="button" onClick={decoratedOnClick}>
       {children}
    </button>
  );
}

function FiltersComponent(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0"> Category </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
             <div><a>Active wear</a></div>
             <div><a>Hoodie</a></div>
             <div><a>Shorts</a></div>
             <div><a>Pants</a></div>
             <div><a>Jeans</a></div>
             <div><a>Vests</a></div>
             <div><a>Jackets</a></div>
            </Card.Body>
 
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Fulfillment </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
             <div><input type = "checkbox"></input> <a>iShop</a></div>
             <div><input type = "checkbox"></input> <a>Euros</a></div>
             <div><input type = "checkbox"></input> <a>QExpress</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Brand </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
             <div><input type = "checkbox"></input>  <a>Nike</a></div>
             <div><input type = "checkbox"></input>  <a>Addidas</a></div>
             <div><input type = "checkbox"></input>  <a>Puma</a></div>
             <div><input type = "checkbox"></input>  <a>Costa</a></div>
             <div><input type = "checkbox"></input>  <a>American Polo</a></div>
             <div><input type = "checkbox"></input>  <a>Tommy Hilfiger</a></div>
             <div><input type = "checkbox"></input>  <a>Reebok</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">Price </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
             <div><a>$ 0 - 10000</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="4">Colour </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
             <div><input type = "checkbox"></input> <a>Yellow</a></div>
             <div><input type = "checkbox"></input> <a>Green</a></div>
             <div><input type = "checkbox"></input> <a>Black</a></div>
             <div><input type = "checkbox"></input> <a>Red</a></div>
             <div><input type = "checkbox"></input> <a>Gray</a></div>
             <div><input type = "checkbox"></input> <a>Blue</a></div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="5">Seller </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
           <Card.Body>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
           </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="6">Seller 1</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
           <Card.Body>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
             <div><a>Hello! I'm the body</a></div>
           </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}