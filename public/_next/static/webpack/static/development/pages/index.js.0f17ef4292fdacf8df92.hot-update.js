webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/products.js":
/*!***************************!*\
  !*** ./utils/products.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var product = new Array(),
    obj = {},
    brands = ["Guice", "Nike", "Sony", "Sony", "Promate", "Casio"];
var prices = [319.25, 690.23, 2399.00, 248.99, 109.99, 179.10];
var was = [400.50, 800.00, 2500.00, 279.00, 150.00, 249.99];
var qty = [4, 5, 3, 5, 7, 10];
var avail = [3, 7, 2, 20, 8, 7];
var ratings = [4.3, 4.6, 3.7, 4, 3.7, 4.1];
var comments = [587, 1254, 3004, 874, 4512, 8745];
var skus = ["ISHRT7845541224", "RVFX788874471", "SON54587454112", "SON5458745417845", "SON545874748717845", "CAS34455875411"];
var thumb = ["https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg", "https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg", "https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"];
var bigImg = ["https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg", "https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg", "https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"];
var name = ["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation", "AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits", "Sony PlayStation 4 Pro 1TB Console (Black)", "Sony PS4 Dualshock 4 Controller, Black (Official Version)", "YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White", "Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"];
/*********** browse categories *************/

var browseCategories = [{
  category: "accessories",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
}, {
  category: "women",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"
}, {
  category: "games",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"
}, {
  category: "computers",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"
}, {
  category: "mobiles",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"
}, {
  category: "men",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"
}, {
  category: "shoes",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"
}, {
  category: "electronics",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"
}, {
  category: "kids",
  image: "https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"
}];

for (var i = 0; i < name.length; i++) {
  obj = {};
  obj.name = name[i];
  obj.oldPrice = was[i];
  obj.newPrice = prices[i];
  obj.brand = brands[i];
  obj.img = thumb[i];
  obj.qty = qty[i];
  obj.availableQty = avail[i];
  obj.selectedQty = 1;
  obj.bigImg = bigImg[i];
  obj.sku = skus[i];
  obj.ratings = ratings[i];
  obj.comments = comments[i];
  product.push(obj);
}

var nav = [{
  name: "home",
  path: "/",
  rootClass: "__navbar_home_link",
  show: true,
  href: "/"
}, {
  name: "men",
  rootNavigation: "products",
  navigationMapper: "/products/[id]",
  show: true,
  as: "/products/men",
  href: "/products/[id]",
  rootClass: "dropdown mega-dropdown",
  innerClass: "dropdown-toggle",
  toggle: true,
  toggleClass: "dropdown",
  children: [{
    name: "collection",
    type: "collection",
    requireInnerSliders: true,
    root: "men",
    show: true,
    children: [{
      image: "http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection",
      name: "Summer dress floral prints",
      price: 49.99,
      "class": "item active"
    }, {
      image: "http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection",
      name: "Gold sandals with shiny touch",
      price: 19.50,
      "class": "item"
    }, {
      image: "http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection",
      name: "Denin jacket stamped",
      price: 79.99,
      "class": "item"
    }]
  }, {
    name: "clothing",
    type: "clothing",
    show: true,
    requireInnerSliders: false,
    children: [{
      show: true,
      name: "all clothing"
    }, {
      show: true,
      name: "tees & polos"
    }, {
      show: true,
      name: "shirts"
    }, {
      show: true,
      name: "sports wear"
    }, {
      show: true,
      name: "jeans"
    }, {
      show: true,
      name: "shorts"
    }, {
      show: true,
      name: "pants"
    }, {
      show: true,
      name: "under wear"
    }]
  }, {
    name: "shoes",
    type: "shoes",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all shoes"
    }, {
      show: true,
      name: "loafers & slip-ons"
    }, {
      show: true,
      name: "boots"
    }, {
      show: true,
      name: "sandals"
    }, {
      show: true,
      name: "formal shoes"
    }, {
      show: true,
      name: "casual shoes"
    }]
  }, {
    name: "watches & accessories",
    type: "watches & accessories",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all accessories"
    }, {
      show: true,
      name: "sunglasses"
    }, {
      show: true,
      name: "jewellery"
    }, {
      show: true,
      name: "bags and wallets"
    }, {
      show: true,
      name: "luggage sets"
    }, {
      show: true,
      name: "casual shoes"
    }]
  }]
}, {
  name: "women",
  rootNavigation: "products",
  navigationMapper: "/products/[id]",
  show: true,
  as: "/products/women",
  href: "/products/[id]",
  rootClass: "dropdown mega-dropdown",
  innerClass: "dropdown-toggle",
  toggle: true,
  toggleClass: "dropdown",
  children: [{
    name: "clothing",
    type: "clothing",
    show: true,
    requireInnerSliders: false,
    children: [{
      show: true,
      name: "all clothing"
    }, {
      show: true,
      name: "shirts, tops & tees"
    }, {
      show: true,
      name: "dresses"
    }, {
      show: true,
      name: "arabian wear"
    }, {
      show: true,
      name: "sports wear"
    }, {
      show: true,
      name: "jeans"
    }, {
      show: true,
      name: "skirts"
    }, {
      show: true,
      name: "jackets & coats"
    }, {
      show: true,
      name: "underwear, lingerie & sleepwear"
    }]
  }, {
    name: "shoes",
    type: "shoes",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all shoes"
    }, {
      show: true,
      name: "loafers & slip-ons"
    }, {
      show: true,
      name: "boots"
    }, {
      show: true,
      name: "sandals"
    }, {
      show: true,
      name: "flats"
    }, {
      show: true,
      name: "pumps"
    }]
  }, {
    name: "watches & accessories",
    type: "watches & accessories",
    requireInnerSliders: false,
    show: true,
    children: [{
      show: true,
      name: "all accessories"
    }, {
      show: true,
      name: "sunglasses"
    }, {
      show: true,
      name: "jewellery"
    }, {
      show: true,
      name: "bags and wallets"
    }, {
      show: true,
      name: "luggage sets"
    }, {
      show: true,
      name: "body care"
    }, {
      show: true,
      name: "make-up"
    }]
  }, {
    name: "collection",
    type: "collection",
    requireInnerSliders: true,
    root: "women",
    show: true,
    children: [{
      image: "https://images-eu.ssl-images-amazon.com/images/I/317TZPdju8L._AA200_.jpg",
      name: "Roberto Cavalli Paradiso - perfumes for women - Eau de Parfum, 75ml",
      price: 103.58,
      "class": "item active"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/41MadHhMcjL._AC_SX184_.jpg",
      name: "Wish by Chopard for Women - Eau de Parfum, 75 ml",
      price: 65.50,
      "class": "item"
    }, {
      image: "https://images-eu.ssl-images-amazon.com/images/I/51--WVEXjdL._AC_SX184_.jpg",
      name: "Roberto Cavalli - perfumes for women - Eau de Parfum, 50ML",
      price: 83.00,
      "class": "item"
    }]
  }]
}];

var getBestSellers = function getBestSellers() {
  return getProducts();
};

var getProducts = function getProducts() {
  return product;
};

var getNewArrivals = function getNewArrivals() {
  return getProducts();
};

var getTopRated = function getTopRated() {
  return getProducts();
};

var getMiscallaneous = function getMiscallaneous() {
  return getProducts();
};

var getTrendingNow = function getTrendingNow() {
  return getProducts();
};

var getPopularProducts = function getPopularProducts() {
  return getProducts();
};

var getRecommendations = function getRecommendations() {
  return getProducts();
};

var getBrowseByCategories = function getBrowseByCategories() {
  return browseCategories;
};

var getNavMenu = function getNavMenu() {
  return nav;
};

module.exports = {
  getProducts: getProducts,
  getBestSellers: getBestSellers,
  getNewArrivals: getNewArrivals,
  getTopRated: getTopRated,
  getMiscallaneous: getMiscallaneous,
  getTrendingNow: getTrendingNow,
  getPopularProducts: getPopularProducts,
  getRecommendations: getRecommendations,
  getBrowseByCategories: getBrowseByCategories,
  getNavMenu: getNavMenu
};

/***/ })

})
//# sourceMappingURL=index.js.0f17ef4292fdacf8df92.hot-update.js.map