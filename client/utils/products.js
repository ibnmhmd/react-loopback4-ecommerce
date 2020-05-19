let product = new Array() , obj = {} , brands = ["Guice" , "Nike" , "Sony" , "Sony", "Promate", "Casio"];
     const prices = [319.25 , 690.23 , 2399.00 , 248.99 , 109.99 , 179.10 ];
     const was = [400.50 , 800.00 , 2500.00 , 279.00 , 150.00 , 249.99];
     const qty = [4 , 5 , 3 , 5 , 7 , 10];
     const avail = [3 , 7 , 2 , 20,8,7];
     const ratings = [4.3 , 4.6 , 3.7 , 4, 3.7 , 4.1];
     const comments = [587 ,1254 , 3004 , 874 , 4512 , 8745];
     const skus = ["ISHRT7845541224" , "RVFX788874471", "SON54587454112",
      "SON5458745417845" , "SON545874748717845","CAS34455875411"];
     const thumb = [
        "https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg" ,
       "https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg" , 
       "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"];
    const bigImg = [
    "https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg" 
    ,"https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg",
"https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"];
    const name = ["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation",
    "AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits" ,
    "Sony PlayStation 4 Pro 1TB Console (Black)",
    "Sony PS4 Dualshock 4 Controller, Black (Official Version)",
     "YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White",
    "Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"]

    /*********** browse categories *************/
    const browseCategories = [{
                                 category : "accessories",
                                 image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
                              },
                           {
                              category : "women",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"
                           },
                           {
                              category : "games",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"
                           },
                           {
                              category : "computers",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"
                           },
                           {
                              category : "mobiles",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"
                           },
                           {
                              category : "men",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"
                           },
                           {
                              category : "shoes",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"
                           },
                           {
                              category : "electronics",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
                           },
                           {
                              category : "kids",
                              image : "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"
                           }
                        ]
     for(let i = 0 ; i < name.length ; i++) {
        obj = {};
        obj.name = name[i]; 
        obj.oldPrice = was[i];
        obj.newPrice = prices[i];
        obj.brand = brands[i];
        obj.img = thumb[i];
        obj.qty = qty[i];
        obj.availableQty = avail [i];
        obj.selectedQty = 1 ;
        obj.bigImg = bigImg[i];
        obj.sku = skus[i];
        obj.ratings = ratings[i];
        obj.comments = comments[i];
        product.push(obj);
     }
     const getBestSellers = () => {
         return getProducts();
     }
     const getProducts = () => {
        return product;
     }
     const getNewArrivals = () => {
        return getProducts();
     }
     const getTopRated =() => {
        return getProducts();
     }
     const getMiscallaneous =() => {
        return getProducts();
     }
     const getTrendingNow =() => {
        return getProducts();
     }
     const getPopularProducts =() => {
        return getProducts();
     }
     const getRecommendations =() => {
        return getProducts();
     }
     const getBrowseByCategories = () => {
        return browseCategories;
     }

module.exports =  {
    getProducts,
    getBestSellers,
    getNewArrivals,
    getTopRated,
    getMiscallaneous,
    getTrendingNow,
    getPopularProducts,
    getRecommendations,
    getBrowseByCategories
}
