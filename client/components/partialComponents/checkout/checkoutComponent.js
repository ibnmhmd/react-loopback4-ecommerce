import { CartContext } from '../../contextAPI/cartContext';
import { useState , useEffect , useContext , useRef  } from 'react';
import Router from 'next/router';
import {LoaderComponent , SuccessComponent , FailureComponent } from '../../statelessComponents/loadMoreProductsComponent';
import CustomButton from '../../statelessComponents/customButtonComponent';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormBuilder from '../../formBuilderComponent/formComponent';
import Validator from '../../classes/validator';
import Address from '../../classes/address';
import PaymentCard from '../../classes/card';

let addressInstance = new Address();
let paymentCardInstance = new PaymentCard();
const validator = new Validator();

function Checkout (props) {
    const {cartSize , clearBasket , getCheckout , getBasketConfirmation , confirmBakset} = useContext(CartContext);
    const [checkoutItems , setCheckoutItems] = useState([]);
    const [placeOrderLabel , setPlaceOrderLabel] = useState("Place Order");
    const [orderPlaced , setOrderPlaced] = useState(false);
    const [placingOrder , setPlacingOrder] = useState(false);
    const [orderFailed , setOrderFailed] = useState(false);
    const [showError , setShowError] = useState(false);
    const [errors , setErrors] = useState([]);
    const [showPlaceOrder , setShowPlaceOrder] = useState(true);
    const [orderReferenceNum , setOrderReferenceNum] = useState(0);
    const placeOrderRef = useRef();
    useEffect(()=> {
      setCheckoutItems(getCheckout());
      const initBasket = [{key : "deliveryAddressConfirmed" ,confirmed : false }, {key : "paymentConfirmed" ,confirmed : false },{key : "summaryConfirmed" ,confirmed : false } ];
      initBasket.map((init , idx) => {
        confirmBakset(init);
      });

    },[]);
    const openCart = () => {
        Router.push("/cart/my-cart");
    }
    const continueShopping = () => {
        Router.push("/");
    }
    const flushBasket = () => {
        clearBasket();
        Router.push("/");     
    }

    const placeOrder = async () => {
        let orderSent = false;
        setPlaceOrderLabel("Validating Order ...");
        setPlacingOrder(true);
        setOrderFailed(false);
        setOrderPlaced(false);
        setShowError(false);
        validator.disabledElem(placeOrderRef);
        let response = await validateOrder();
        setPlacingOrder(false);
        if(response.errors.length > 0 ){
          setOrderFailed(true);
          setErrors(response.errors);
          setShowError(true);
          setPlaceOrderLabel("Order Failed");
        }else{
          setOrderPlaced(true);
          setPlaceOrderLabel("Your order has been successfully placed.");
          setOrderReferenceNum(generateOrderRefNumber());
          orderSent = true ;
        }

        setTimeout(() => {  
           if(!orderSent) {
              setOrderFailed(false);
              setOrderPlaced(false);
              setPlaceOrderLabel("Place Order");
              validator.enableElem(placeOrderRef); 
           }                  
        }, 6000);
    }
    const validateOrder = async () => {
       let errors = [] , error = {};
       let basketConfirmation = getBasketConfirmation();
       if(!basketConfirmation.summaryConfirmed){
          error.key = "Basket Summary";
          error.error = "Please confirm the Basket Summary.";
          errors.push(error);
       }
       if(!basketConfirmation.deliveryAddressConfirmed){
          error = {};
          error.key = "Delivery Address";
          error.error = "Please add/set the Delivery Address.";
          errors.push(error);
       }
      if(!basketConfirmation.paymentConfirmed){
         error = {};
         error.key = "Payment Method";
         error.error = "Please add/confirm the Payment Method.";
         errors.push(error);
       }
       let promise = new Promise((resolve , reject) => {
         setTimeout(() => {
           resolve({ success : true , errors : errors });
         }, 2000 );
       })
       return await promise;
    }
    const generateOrderRefNumber = () => {
      return 'I'+ Math.random().toString(36).substr(2, 9);
    }
    return(<>
             <div className="row">
                <div className="col-xs-12">                     
                    <h2 className = "text-center">  CHECKOUT ( <a className ="__checkout_items_count" onClick = { () => openCart()}>{cartSize} ITEMS</a> )  </h2>   
                     <div className = "row">
                      { orderPlaced ? <Congratulations referenceNumber = {orderReferenceNum} /> : <Tabs checkoutItems = {checkoutItems}/>   }
                        <div className = "col-xs-12 col-md-4 __checkout_btns">
                             <p>
                               Please go through each and every step on the left side to finish checking out. You'll have a chance to review and edit your order before it's final.
                            </p>
                            { showPlaceOrder ? <a ref = {placeOrderRef} className="customButton __checkout_confirm_btn" onClick = { () => placeOrder() }> { placeOrderLabel }
                               { orderPlaced ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                               { placingOrder ? <LoaderComponent label = "" paragraph = {false}/> : null }
                               { orderFailed ?  <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null } 
                              </a> : null } 
                              { !orderPlaced ? <CustomButton  buttonName = "CLEAR BASKET" Click = {flushBasket}/> : null } 
                           <CustomButton  buttonName = "CONTINUE SHOPPING" Click = {continueShopping}/> 
                           {/***** validation errors section ****/}
                           { showError ?  <div className = "outofstock __checkout_erros">
                                 {errors.map((err, index) => {
                                  return  <h5 key = {index}><span><i>{err.key}</i></span>: {err.error}</h5>
                                })}
                            </div>: null }
                          {/***** validation errors ends ****/}
                        </div>
                     </div>
                          
                </div>
             </div>
        </>);
}

export default Checkout;
 
  function Tabs(props) {
    const {cartSize , confirmBakset , getBasketConfirmation  } = useContext(CartContext);
    const onChange = () => {
      triggerEvent();
    }
    const paymentMethodData = [ {
      label : "Name on Card" ,
      type : "text",
      placeholder : "Enter your name",
      controlId : "fullNameController",
      validate : true,
      required : true,
      class : "text-muted default",
      validationRules : { minLength : 10 },
      change : onChange,
      name :"nameOnCard",
      showLoader : false
    },{ 
      label : "Card Number" ,
      type : "text",
      placeholder : "Enter the card number",
      controlId : "numberController",
      validate : true,
      required : true,
      class : "default",
      validationRules : { minLength : 10 , digitsValidator : "" },
      change : onChange,
      name : "cardNumber",
      showLoader : false
    },
    { 
      label : "CVV Number" ,
      type : "text",
      placeholder : "Enter the CVV number",
      controlId : "cvvController",
      validate : true,
      required : true,
      class : "default",
      validationRules : { minLength : 3 , maxLength : 3 , digitsValidator : "" },
      change : onChange,
      name : "cvvNumber",
      showLoader : false
    },
    { 
      label : "Expiry Month" ,
      type : "select",
      placeholder : "Enter your address",
      controlId : "monthController",
      validate : false,
      required : true,
      class : "default form-control",
      options : [
        {key : "01" , label : "Jan"},
        {key : "02" , label : "Feb"},
        {key : "03" , label : "Mar"},
        {key : "04" , label : "Apr"},
        {key : "05" , label : "May"},
        {key : "06" , label : "Jun"},
        {key : "07" , label : "Jul"},
        {key : "08" , label : "Aug"},
        {key : "09" , label : "Sep"},
        {key : "10" , label : "Oct"},
        {key : "11" , label : "Nov"},
        {key : "12" , label : "Dec"}
      ],
      change : onChange,
      name : "expiryMonth",
    },
    { 
      label : "Expiry Year" ,
      type : "select",
      placeholder : "Enter your address",
      controlId : "yearController",
      validate : false,
      required : true,
      class : "default form-control",
      change : onChange,
      name : "expiryYear",
      options : [
        {key : "2020" , label : "2020"},
        {key : "2021" , label : "2021"},
        {key : "2022" , label : "2022"},
        {key : "2023" , label : "2023"},
        {key : "2024" , label : "2024"},
        {key : "2025" , label : "2025"},
        {key : "2026" , label : "2026"},
        {key : "2027" , label : "2027"},
        {key : "2028" , label : "2028"},
        {key : "2029" , label : "2029"},
        {key : "2030" , label : "2030"}
      ],
    },
    {
      note : "All fields are mandatory .",
      type : "none",
      class : "text-muted __checkout_card_note outofstock",

    }];
      const confirmPaymentRef = useRef();
      /**************** price ******************/
      const [totalPrice , setTotalPrice] = useState(0);
      const [grandTotal , setGrandTotal] = useState(0);
      /************ ends  *******************/
      const [deliveryAddressSelected , setDeliveryAddressSelected ] = useState(false);
      /************ summary hooks starts *************/
      const [confirmSummaryLabel , setConfirmSummaryLabel ] = useState("Confirm");
      const [confirmed , setConfirmed ] = useState(false);
      const [confirming , setConfirming ] = useState(false);
      /************ summary hooks ends *************/
      /************ address hooks starts *************/
      const [addNewAddress , setAddNewAddress ] = useState(false);
      const [partyHasAddress , setPartyHasAddress ] = useState(false);
      const [newAddressAdded , setNewAddressAdded ] = useState(false);
      const [customerNewAddresses , setCustomerNewAddresses] = useState([]);
      const [removing , setRemoving] = useState(false);
      const [selectedDeliveryAddress , setSelectedDeliveryAddress] = useState({});
      /************ address hooks ends *************/
      /************ payment hooks starts *************/
      const [confirmPaymentLabel , setConfirmPaymentLabel] = useState("Confirm Card");
      const [paymentConfirmed , setPaymentConfirmed ] = useState(false);
      const [confirmingPayment , setConfirmingPayment ] = useState(false);
      const [paymentCardFields , setPaymentCardFields ] = useState({expiryMonth : "Jan" , expiryYear : "2020"});
      /************ payment hooks ends *************/
      
      /**** disable confirm payment method *****/
      useEffect(()=> {
        let price = 0 ;
        validator.disabledElem(confirmPaymentRef);
        props.checkoutItems.map((item , i ) => {
            price += item.newPrice*item.selectedQty;
        });
        setTotalPrice(price);
        setGrandTotal(price+getVAT(price));
      });
    const getVAT = (price) => {
      return .05*price;
    }
    const triggerEvent = () => {  
        let response = [] , self = this;
        let currentElement = JSON.parse(event.target.dataset.formdata);
        response = validator.validate(event);
        console.log(response);
        /**** valid field ****/
        validator.processFieldPostValidation(response, currentElement, paymentCardFields, setPaymentCardFields);
        paymentCardInstance.setCardDetails(paymentCardFields);
        /*** enable save button when all fields provided ***/
        if(Object.keys(paymentCardFields).length == 6 ){
          validator.enableElem(confirmPaymentRef);
        }else{
          setPaymentConfirmed(false);
          setConfirmPaymentLabel("Confirm Card");
          validator.disabledElem(confirmPaymentRef);
          confirmBakset({key : "paymentConfirmed" , confirmed : false });
        }
        console.log(paymentCardFields);
    }
    const confirmBasketSummary = () => {
        setConfirming(true);
        setConfirmed(false);
        setConfirmSummaryLabel("Confirming ..");
        setTimeout(() => {
            setConfirming(false);
            setConfirmed(true);
            confirmBakset({key : "summaryConfirmed" ,confirmed : true });
            setConfirmSummaryLabel("Confirmed");
        }, 2000);
    }
    let checkoutConfirmation = {
      summaryConfirmed : false,
      deliveryAddressConfirmed : false,
      paymentConfirmed : false
  }
    const confirmPaymentDetails = () => {
      setConfirmingPayment(true);
      setPaymentConfirmed(false);
      setConfirmPaymentLabel("Confirming ..");
      setTimeout(() => {
        setConfirmingPayment(false);
        setPaymentConfirmed(true);
        confirmBakset({key : "paymentConfirmed" , confirmed : true });
        setConfirmPaymentLabel("Details Confirmed");
      }, 2000);
  }
    const showAddressPopup = () => {
        addressInstance = new Address();
        setAddNewAddress(true);
    }
    const closeAddressPop = () => {
        setAddNewAddress(false);
    }
    const saveNewAddress = async () => {
        console.log("Saving new address, please wait ... ");
        let newAddress = customerNewAddresses;
        let promise = new Promise((resolve , reject) => {
          setTimeout(()=>{
              resolve({ message : "Address has been successfully saved ." , success : true});
              setNewAddressAdded(true);
              newAddress.push(addressInstance.getAddress());
              setCustomerNewAddresses(newAddress);
            //resolve({ message : "Error occured while saving your address ." , success : false});
          }, 3000)
        })
      return await promise;
    }
    const setAsDeliveryAddress = (e, address) => {
      console.log(address);
      console.log(e.target.checked);
      address.isDeliveryAddress = e.target.checked;
      setDeliveryAddressSelected(e.target.checked);
      setSelectedDeliveryAddress(address);
      confirmBakset({key : "deliveryAddressConfirmed" , confirmed : e.target.checked });
      customerNewAddresses.map((_ , i) => {
        /***** if selected as a main address all others should be unchecked *****/
        _.isDeliveryAddress = false
        if(_.id == address.id && e.target.checked ){
           _.isDeliveryAddress = true;
        }
      });
    }
    const removeAddress = (address) => {
      setRemoving(true);
      setTimeout(() => {
        let _address = customerNewAddresses.filter((_) => _.id !== address.id );
        if(address.isDeliveryAddress){
          setDeliveryAddressSelected(false);
          confirmBakset({key : "deliveryAddressConfirmed" ,confirmed : false });
        }
        setCustomerNewAddresses(_address);
        setRemoving(false);
      }, 2000);
    }
    const editBasket = () => {
      setTimeout(() => {
          Router.push("/cart/my-cart");   
      }, 1000);     
  }
    return (
        <div className = "col-xs-12 col-md-8">
            <div className="panel-group" id="accordion">

            {/**** Summary starts ****/}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                <i className="fas fa-shopping-basket __checkout_icons"></i> <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#basketSummary">
                      BASKET SUMMARY
                    </a>
                </h4>
                </div>
                <div id="basketSummary" className="panel-collapse collapse in">
                 <div className="panel-body">
                      <div className ="col-xs-6"><p>Items :</p></div>
                      <div className ="col-xs-6"><p>AED {totalPrice} </p></div>
                      <div className ="col-xs-6"><p>Shipping & Handling : </p></div>
                      <div className ="col-xs-6"><p>AED 0.00</p></div>
                      <div className ="col-xs-6"><p>Order total :</p></div>
                      <div className ="col-xs-6"> <p>AED {grandTotal} </p></div>
                      <div className ="col-xs-6"> <p>Confirm your basket ? </p></div>
                      <div className ="col-xs-6"> <a className="customButton __checkout_confirm_btn" onClick = { () => confirmBasketSummary() }>{confirmSummaryLabel}
                       {confirmed ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                       {confirming ? <LoaderComponent label = "" paragraph = {false}/> : null }
                       </a></div>
                 </div>
                </div>
            </div>
            {/**** Summary ends ****/}

             {/**** Address starts ****/}
             <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">
                <i className="fas fa-address-card __checkout_icons"></i> <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#shippingAddress">
                      SHIPPING ADDRESS
                </a>
                </h4>
                </div>
                <div id="shippingAddress" className="panel-collapse collapse">
                <div className="panel-body">
                     <div className = "col-xs-12">
                       <a className = "__checkout_add_new_addr" onClick = {() => showAddressPopup()} > <i className="fas fa-plus-circle"></i> Add a new address </a>
                    </div>
                    <div className = "col-xs-12">
                        <p className ="__checkout_address_label"> Exisiting Address ( {!partyHasAddress ? ("Not available") : null } ) </p>
                    </div>
                    {/**** new address section starts ****/}
                    { newAddressAdded ?
                      customerNewAddresses.map((address , index) => {
                       return(<div className = "col-xs-12 __checkout_new_address_wrapper" key = {index}>
                                <p className ="__checkout_address_label"> New Address ( # {index+1})</p>
                                <div className ="col-xs-6"><p>Full Name : </p></div>
                                <div className ="col-xs-6"><p>{address.fullName}</p></div>
                                <div className ="col-xs-6"><p>Phone Number : </p></div>
                                <div className ="col-xs-6"><p>{address.mobileNumber}</p></div>
                                <div className ="col-xs-6"><p>Address Line : </p></div>
                                <div className ="col-xs-6"><p>{address.addressLine}</p></div>
                                <div className ="col-xs-6"><p>Emirate : </p></div>
                                <div className ="col-xs-6"><p>{address.getEmirate(address.emirates)}</p></div>
                                <div className ="col-xs-6"><p>Address Type : </p></div>
                                <div className ="col-xs-6"><p>{address.addressType}</p></div>
                                <div className ="col-xs-6"><label style = {{marginRight : 6}} htmlFor ="deliveryAddress">Set as delivery address</label><input checked = {address.isDeliveryAddress} type = "checkbox" onChange = {(e) => setAsDeliveryAddress(e, address)} value = "mainAddress" id = "deliveryAddress"></input></div>
                                <div className ="col-xs-6"><i className="fas fa-trash-alt"></i><a onClick = {() => removeAddress(address)} className ="__cart_actions">Remove</a> { removing ? <LoaderComponent label = "" paragraph = {false}/> : null }</div>
                            </div>);
                      })
                       : null 
                     }
                    {/**** new address section ends ****/}
                </div>
                </div>
            </div>
            {/**** Address ends ****/}

            {/**** Payment Method starts ****/}
            <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">
                <i className="fas fa-money-check-alt __checkout_icons"></i> <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#paymentMethod">
                      PAYMENT METHOD
                    </a>
                </h4>
                </div>
                <div id="paymentMethod" className="panel-collapse collapse">
                 <div className="panel-body">
                   <Form>
                           { 
                             paymentMethodData.map((form , index) => {
                              return <div className = "col-xs-6 col-md-4" key = {index}><FormBuilder  props = {form}/></div>
                             })  
                           }                      
                   </Form>
                      <div className ="col-xs-6 col-md-4"> 
                       <a className="customButton __checkout_confirm_btn" onClick = { () => confirmPaymentDetails() } ref = {confirmPaymentRef}>{confirmPaymentLabel}
                          {paymentConfirmed ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                          {confirmingPayment ? <LoaderComponent label = "" paragraph = {false}/> : null }
                       </a>
                      </div>
                    </div>
                </div>
            </div>
             {/**** Payment Method ends ****/}

              {/**** Shipping starts ****/}
            <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">
                <i className="fas fa-truck __checkout_icons"></i> <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#itemsShipping">
                       SHIPPING & ITEMS
                    </a>
                </h4>
                </div>
                <div id="itemsShipping" className="panel-collapse collapse">
                <div className="panel-body">
                           <div  className = "col-xs-12">
                            <p className = "__checkout_delivery_note">Delivery date : 05/05/2020 </p>
                          </div>
                          <div  className = "col-xs-12 __checkout_items_final">
                            <p>Items</p>
                            {/**** items ****/}
                            { props.checkoutItems.map((item , index) => {
                                return  <div className = "__checkout_items row" key = {index}>
                                            <div className = "col-xs-2 __checkout_bold">Name : </div>
                                            <div className = "col-xs-2"> {item.name} </div>
                                            <div className = "col-xs-2 __checkout_bold">Price : </div>
                                            <div className = "col-xs-2"> AED {item.newPrice} </div>
                                            <div className = "col-xs-2 __checkout_bold">Quantity : </div>
                                            <div className = "col-xs-2">{item.selectedQty}</div>
                                        </div>
                             })}                           
                             <div className = "col-xs-12"><a className = "__checkout_edit_basket" onClick = {() => editBasket()}><i className="fas fa-edit"></i> Edit basket</a></div>
                          </div>
                </div>
                </div>
            </div>
             {/**** shipping  starts ****/}
     </div>
     {/**** new address modal ****/}
     {addNewAddress ? <AddAddress  show = {addNewAddress} handleClose = {closeAddressPop} saveNewAddress = {saveNewAddress}/> : null}
</div>);
}


function AddAddress(props) {
    const [adding, setAdding] = useState(false);
    const [added, setAdded] = useState(false);
    const [failed, setFailed] = useState(false);
    const [saveLabel, setSaveLabel] = useState("Save Address");
    const [addressFields , setAddressFields] = useState ({emirates : "adh" , addressType: "Home"});
    const saveAddressRef = useRef();
    useEffect(()=> {
      validator.disabledElem(saveAddressRef);
    });
    const onChange = () => {  
      let response = [] , self = this;
      let currentElement = JSON.parse(event.target.dataset.formdata);
      response = validator.validate(event);
      console.log(response);
      /**** valid field ****/
      validator.processFieldPostValidation(response , currentElement ,addressFields, setAddressFields );
      addressInstance.setAddress(addressFields);
      /*** enable save button when all fields provided ***/
      if(Object.keys(addressFields).length == 6 ){
        validator.enableElem(saveAddressRef);
      }else{
        validator.disabledElem(saveAddressRef);
      }
    }
    const formData = [ {
        label : "Full Name" ,
        type : "text",
        placeholder : "Enter your name",
        controlId : "fullNameController",
        validate : true,
        required : true,
        class : "text-muted default",
        validationRules : { minLength : 10 },
        change : onChange,
        name :"fullName",
        showLoader : false
     },{ 
        label : "Mobile Number" ,
        type : "text",
        placeholder : "Enter your mobile number e.g : 05XXXXXXXX",
        controlId : "numberController",
        validate : true,
        required : true,
        class : "default",
        validationRules : { minLength : 10 , digitsValidator : "" },
        change : onChange,
        name : "mobileNumber",
        showLoader : false
      },
      { 
        label : "Street name / no., Building name / no., Floor no, apartment or villa no"  ,
        type : "text",
        placeholder : "Enter your address",
        controlId : "address1Controller",
        validate : true,
        required : true,
        class : "default",
        validationRules : { minLength : 10 },
        change : onChange,
        name : "addressLine",
        showLoader : false
      },
      { 
        label : "Emirates" ,
        type : "select",
        placeholder : "Enter your address",
        controlId : "emiratesController",
        validate : false,
        required : true,
        class : "default form-control",
        options : [
          {key : "adh" , label : "Abu Dhabi"},
          {key : "ain" , label : "Al Ain"},
          {key : "ajm" , label : "Ajman"},
          {key : "dxb" , label : "Dubai"},
          {key : "shj" , label : "Sharjah"},
          {key : "uml" , label : "Umm Al Khuyain"},
          {key : "rak" , label : "Ras Al Khaimah"}
        ],
        change : onChange,
        name : "emirates",
      },
      { 
        label : "Address Type" ,
        type : "select",
        placeholder : "Enter your address",
        controlId : "addressTypeController",
        validate : false,
        required : true,
        class : "default form-control",
        change : onChange,
        name : "addressType",
        options : [
          {key : "Home" , label : "Home"},
          {key : "Office" , label : "Office"}
        ],
      }];

    const setNewAddress = async () => {
        setAdding(true);
        setFailed(false);
        setAdded(false);
        setSaveLabel("Saving ...");
        validator.enableElem(saveAddressRef);
        const response = await props.saveNewAddress();
        setAdding(false);
        setFailed(false);
        setSaveLabel(response.message);
        if(response.success){ 
          setAdded(true);     
          validator.disabledElem(saveAddressRef);
        }else{
          setFailed(true); 
          validator.enableElem(saveAddressRef);
        }
    }
 
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title className = "text-center font-weight-bold text-uppercase">ADD A NEW ADDRESS</Modal.Title>
        </Modal.Header>
         <Modal.Body className="font-weight-bold " ><span style = {{color : 'red', fontSize: 13}}>All below fields are mandatory, save button is disabled unless all fields are provided .</span>
            <Form>
                           { 
                             formData.map((form , index) => {
                               return <FormBuilder key = {index} props = {form}/>
                             })  
                           }                      
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <a ref = {saveAddressRef} className="customButton __checkout_confirm_btn __checkout_save_new_add" onClick = { () => setNewAddress() }> {saveLabel}
                       { added ?  <SuccessComponent label = "" paragraph = {false} class = "instock"/> : null } 
                       { adding ? <LoaderComponent label = "" paragraph = {false}/> : null }
                       { failed ? <FailureComponent label = "" paragraph = {false} class = "outofstock"/> : null }
          </a>
          <a className="customButton __checkout_confirm_btn __checkout_save_new_add" onClick = { props.handleClose }> Close</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Congratulations(props) {
  return(<>
           <div className = "col-xs-12 col-md-8 __cart_item_card_wrapper __cart_empty_basket instock">
             <h2 className = "__checkout_congrats">Congratulations, your order is received :) </h2>
             <h4>Thank you for shopping with us, we hope you had a smooth and soft shopping, get back soon .</h4>
             <br></br>
             <h4 style = {{textDecoration : 'underline'}}>You order reference number is : <i>{props.referenceNumber}</i></h4>
          </div>
        </>)
}