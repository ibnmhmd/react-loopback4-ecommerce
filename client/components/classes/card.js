class PaymentCard {
   
    constructor(){
        this.cardDetails = {};
        this.cardDetails.nameOnCard = "";
        this.cardDetails.cardNumber = "";
        this.cardDetails.cvvNumber = "";
        this.cardDetails.expiryMonth = "";
        this.cardDetails.expiryYear = "";
        this.cardDetails.id = 0;
    }

    setCardDetails(card){
        if(card.nameOnCard){
            this.cardDetails.nameOnCard = card.nameOnCard;
        }
        if(card.cardNumber){
            this.cardDetails.mobileNumber = card.cardNumber;
        }
        if(card.cvvNumber){
            this.cardDetails.cvvNumber = card.cvvNumber;
        }
        if(card.expiryMonth){
            this.cardDetails.expiryMonth = card.expiryMonth;
        }
        if(card.expiryYear){
            this.cardDetails.expiryYear = card.expiryYear;
        }
        if(card.id){
            this.cardDetails.id = card.id;
        }      
    }
    getCardDetails(){
        return this.cardDetails;
    }
}
export default PaymentCard;