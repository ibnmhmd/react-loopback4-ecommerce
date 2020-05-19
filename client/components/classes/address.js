class Address {
   
    constructor(){
        this.address = {};
        this.emiratesMap = new Map();
        this.emiratesMap.set("adh" , "Abu Dhabi");
        this.emiratesMap.set("ain" , "Al Ain");
        this.emiratesMap.set("dxb" , "Dubai");
        this.emiratesMap.set("ajm" , "Ajman");
        this.emiratesMap.set("shj" , "Sharjah");
        this.emiratesMap.set("uml" , "Umm Al Khuyain");
        this.emiratesMap.set("rak" , "Ras Al Khaimah");
        this.address.fullName = "";
        this.address.mobileNumber = "";
        this.address.addressLine = "";
        this.address.emirates = "";
        this.address.addressType = "";
        this.address.isDeliveryAddress = false;
        this.address.id = 0;
        this.address.getEmirate = (key) => {
            return this.emiratesMap.get(key);
        }
    }

    setAddress(address){
        if(address.fullName){
            this.address.fullName = address.fullName;
        }
        if(address.mobileNumber){
            this.address.mobileNumber = address.mobileNumber;
        }
        if(address.addressLine){
            this.address.addressLine = address.addressLine;
        }
        if(address.emirates){
            this.address.emirates = address.emirates;
        }
        if(address.addressType){
            this.address.addressType = address.addressType;
        }
        if(address.id){
            this.address.id = address.id;
        }
    }
    getAddress(){
        return this.address;
    }
    getEmirates() {

    }
}
export default Address;