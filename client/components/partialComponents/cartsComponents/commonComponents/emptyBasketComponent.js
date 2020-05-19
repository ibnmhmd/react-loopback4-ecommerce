import CustomButton from '../../../statelessComponents/customButtonComponent';

export default function EmptyBasket(props) {
    const continueShopping = () => {
      Router.push("/");
    }
    return ( <div className ="col-xs-12 __cart_item_card_wrapper __cart_empty_basket">
                  <h2>Your {props.name} is empty :) </h2>
                  <CustomButton  buttonName = "CONTINUE SHOPPING" Click = {continueShopping}/>
           </div>)
  }