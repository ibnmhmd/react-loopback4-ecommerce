(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/RR4":function(e,a,s){"use strict";var t=s("q1tI"),n=s.n(t),o=n.a.createElement;a.a=function(e){return o(n.a.Fragment,null,o("a",{className:"customButton",onClick:""!==e.Click?function(){e.callBackParam?e.Click(e.callBackParam):e.Click()}:null},o("i",{className:"".concat(e.fontName," __quick_item_font_awsome")}),e.buttonName))}},"/fyh":function(e,a,s){"use strict";var t=s("q1tI"),n=s.n(t),o=s("wx14"),i=s("zLVn"),r=s("TSYQ"),l=s.n(r),m=s("vUet"),c=s("dbZe"),u=n.a.forwardRef((function(e,a){var s=e.bsPrefix,t=e.active,r=e.className,u=e.as,d=void 0===u?"li":u,p=Object(i.a)(e,["bsPrefix","active","className","as"]),h=Object(m.b)(s,"breadcrumb-item"),g=p.href,f=p.title,v=p.target,w=Object(i.a)(p,["href","title","target"]),y={href:g,title:f,target:v};return n.a.createElement(d,{ref:a,className:l()(h,r,{active:t}),"aria-current":t?"page":void 0},t?n.a.createElement("span",Object(o.a)({},w,{className:l()({active:t})})):n.a.createElement(c.a,Object(o.a)({},w,y)))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1};var d=u,p=n.a.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,r=e.listProps,c=e.children,u=e.label,d=e.as,p=void 0===d?"nav":d,h=Object(i.a)(e,["bsPrefix","className","listProps","children","label","as"]),g=Object(m.b)(s,"breadcrumb");return n.a.createElement(p,Object(o.a)({"aria-label":u,className:t,ref:a},h),n.a.createElement("ol",Object(o.a)({},r,{className:l()(g,r.className)}),c))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}},p.Item=d;var h=p,g=n.a.createElement;a.a=function(e){return g(n.a.Fragment,null,g(h,null,g(h.Item,{href:"/"},"HOME"),(e.link.length,g(h.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]))},decodeURIComponent(e.link[0]).toUpperCase())),2==e.link.length?g(h.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},decodeURIComponent(e.link[1]).toUpperCase()):g(h.Item,{href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},e.link[1]?decodeURIComponent(e.link[1]).toUpperCase():""),3==e.link.length?g(h.Item,{active:!0},decodeURIComponent(e.link[2]).toUpperCase()):null))}},AKbA:function(e,a,s){"use strict";var t=s("rePB"),n=s("1OyB"),o=s("vuIU");s("q1tI");function i(e,a){var s;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(s=function(e,a){if(!e)return;if("string"===typeof e)return r(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(e,a)}(e))||a&&e&&"number"===typeof e.length){s&&(e=s);var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==s.return||s.return()}finally{if(l)throw o}}}}function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=e[s];return t}function l(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function m(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){Object(t.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var c=s("TkVQ"),u=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,[{key:"Validator",value:function(){this.response=[]}},{key:"validate",value:function(e){var a=this;return this.getFormCandidates(e).map((function(e,s){return e.required&&e.validate?a.executeValidations(e):(e.valid=!0,e.executor="N/A",a.response=[],a.response.push(e),a.response)}))}},{key:"getFormCandidates",value:function(e){var a=new Array,s=e.srcElement;return s.dataset.formdata&&a.push(m(m({},JSON.parse(s.dataset.formdata)),{},{value:s.value,ref:s})),a}},{key:"executeValidations",value:function(e){var a,s=[],t={},n=i(e.validationRules?Object.keys(e.validationRules):[]);try{for(n.s();!(a=n.n()).done;){var o=a.value;if(c[o]&&(t=c[o](e),s.push(t),!t.forwardToNextValidator)){s=[];break}}}catch(r){n.e(r)}finally{n.f()}return s}},{key:"processFieldPostValidation",value:function(e,a,s,t){var n=s;if(0!==e[0].length){var o=e[0][0],i=o.value;n[o.name]=i,n.id=this.getRandomInt(1,1e3)}else n[a.name]&&delete n[a.name];t(n)}},{key:"getRandomInt",value:function(e,a){return Math.floor(Math.random()*(a-e+1)+e)}},{key:"disabledElem",value:function(e){null!==e&&e.current.classList.add("disabled")}},{key:"enableElem",value:function(e){null!==e&&e.current.classList.remove("disabled")}}]),e}();a.a=u},Cj2W:function(e,a,s){"use strict";s.d(a,"b",(function(){return r})),s.d(a,"c",(function(){return l})),s.d(a,"d",(function(){return m})),s.d(a,"a",(function(){return c}));var t=s("q1tI"),n=s.n(t),o=s("/RR4"),i=n.a.createElement,r=function(e){return i(n.a.Fragment,null,i("div",{className:"row",style:{margin:"2rem 0"}},i("div",{className:"col-xs-12 col-md-4"}),i("div",{className:"col-xs-12 col-md-4"},i(o.a,{buttonName:"LOAD MORE ITEMS..",Click:e.LoadMore?e.LoadMore:""})),i("div",{className:"col-xs-12 col-md-4"})))},l=function(e){return e.paragraph?i("p",{className:"__cart_qty_loader"},e.label," ",i("i",{className:"fas fa-sync fa-spin"})):i("i",{className:"fas fa-sync fa-spin"})},m=function(e){return e.paragraph?i("p",{className:"__cart_qty_loader instock"},e.label," ",i("i",{className:"fas fa-check-circle"})):i("i",{className:"".concat(e.class?e.class:""," fas fa-check-circle")})},c=function(e){return e.paragraph?i("p",{className:"__cart_qty_loader outofstock"},e.label," ",i("i",{className:"fas fa-times-circle"})):i("i",{className:"".concat(e.class?e.class:""," fas fa-times-circle")})}},"D/r9":function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[id]",function(){return s("qjIw")}])},EfoT:function(e,a){for(var s=new Array,t={},n=["Guice","Nike","Sony","Sony","Promate","Casio"],o=[319.25,690.23,2399,248.99,109.99,179.1],i=[400.5,800,2500,279,150,249.99],r=[4,5,3,5,7,10],l=[3,7,2,20,8,7],m=[4.3,4.6,3.7,4,3.7,4.1],c=[587,1254,3004,874,4512,8745],u=["ISHRT7845541224","RVFX788874471","SON54587454112","SON5458745417845","SON545874748717845","CAS34455875411"],d=["https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg","https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"],p=["https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"],h=["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation","AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits","Sony PlayStation 4 Pro 1TB Console (Black)","Sony PS4 Dualshock 4 Controller, Black (Official Version)","YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White","Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"],g=[{category:"accessories",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"women",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"},{category:"games",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"},{category:"computers",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"},{category:"mobiles",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"},{category:"men",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"},{category:"shoes",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"},{category:"electronics",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"kids",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"}],f=0;f<h.length;f++)(t={}).name=h[f],t.oldPrice=i[f],t.newPrice=o[f],t.brand=n[f],t.img=d[f],t.qty=r[f],t.availableQty=l[f],t.selectedQty=1,t.bigImg=p[f],t.sku=u[f],t.ratings=m[f],t.comments=c[f],s.push(t);var v=[{name:"home",path:"/",rootClass:"__navbar_home_link",show:!0,href:"/",as:"/"},{name:"men",rootNavigation:"products",navigationMapper:"/products/[id]",show:!0,as:"/products/men",href:"/products/[id]",rootClass:"dropdown mega-dropdown",innerClass:"dropdown-toggle",toggle:!0,toggleClass:"dropdown",children:[{name:"collections",type:"collections",requireInnerSliders:!0,root:"men",show:!0,children:[{image:"https://images-eu.ssl-images-amazon.com/images/I/51RZAz12utL._AA200_.jpg",name:"Summer dress floral prints",price:49.99,class:"item active"},{image:"https://images-eu.ssl-images-amazon.com/images/I/51nvv5VSUsL._AA200_.jpg",name:"Fifth Sun Official Liverpool FC Vintage Reds Men's Tee, Heather, Medium",price:75.5,class:"item"},{image:"https://images-eu.ssl-images-amazon.com/images/I/41aese32iYL._AA200_.jpg",name:"DADIJIER Brogue Ankle Boot for Men Motorcycle Boots Genuine Leather Lace up ...",price:238,class:"item"}]},{name:"clothing",type:"clothing",show:!0,requireInnerSliders:!1,children:[{show:!0,name:"all clothing"},{show:!0,name:"tees & polos"},{show:!0,name:"shirts"},{show:!0,name:"sports wear"},{show:!0,name:"jeans"},{show:!0,name:"shorts"},{show:!0,name:"pants"},{show:!0,name:"under wear"}]},{name:"shoes",type:"shoes",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all shoes"},{show:!0,name:"loafers & slip-ons"},{show:!0,name:"boots"},{show:!0,name:"sandals"},{show:!0,name:"formal shoes"},{show:!0,name:"casual shoes"}]},{name:"watches & accessories",type:"watches & accessories",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all accessories"},{show:!0,name:"sunglasses"},{show:!0,name:"jewellery"},{show:!0,name:"bags and wallets"},{show:!0,name:"luggage sets"},{show:!0,name:"casual shoes"}]}]},{name:"women",rootNavigation:"products",navigationMapper:"/products/[id]",show:!0,as:"/products/women",href:"/products/[id]",rootClass:"dropdown mega-dropdown",innerClass:"dropdown-toggle",toggle:!0,toggleClass:"dropdown",children:[{name:"clothing",type:"clothing",show:!0,requireInnerSliders:!1,children:[{show:!0,name:"all clothing"},{show:!0,name:"shirts, tops & tees"},{show:!0,name:"dresses"},{show:!0,name:"arabian wear"},{show:!0,name:"sports wear"},{show:!0,name:"jeans"},{show:!0,name:"skirts"},{show:!0,name:"jackets & coats"},{show:!0,name:"underwear, lingerie & sleepwear"}]},{name:"shoes",type:"shoes",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all shoes"},{show:!0,name:"loafers & slip-ons"},{show:!0,name:"boots"},{show:!0,name:"sandals"},{show:!0,name:"flats"},{show:!0,name:"pumps"}]},{name:"watches & accessories",type:"watches & accessories",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all accessories"},{show:!0,name:"sunglasses"},{show:!0,name:"jewellery"},{show:!0,name:"bags and wallets"},{show:!0,name:"luggage sets"},{show:!0,name:"body care"},{show:!0,name:"make-up"}]},{name:"collections",type:"collections",requireInnerSliders:!0,root:"women",show:!0,children:[{image:"https://images-eu.ssl-images-amazon.com/images/I/317TZPdju8L._AA200_.jpg",name:"Roberto Cavalli Paradiso - perfumes for women - Eau de Parfum, 75ml",price:103.58,class:"item active"},{image:"https://images-eu.ssl-images-amazon.com/images/I/41MadHhMcjL._AC_SX184_.jpg",name:"Wish by Chopard for Women - Eau de Parfum, 75 ml",price:65.5,class:"item"},{image:"https://images-eu.ssl-images-amazon.com/images/I/51--WVEXjdL._AC_SX184_.jpg",name:"Roberto Cavalli - perfumes for women - Eau de Parfum, 50ML",price:83,class:"item"}]}]},{name:"electronics",rootNavigation:"products",navigationMapper:"/products/[id]",show:!0,as:"/products/electronics",href:"/products/[id]",rootClass:"dropdown mega-dropdown",innerClass:"dropdown-toggle",toggle:!0,toggleClass:"dropdown",children:[{name:"mobiles",type:"mobiles",show:!0,requireInnerSliders:!1,children:[{show:!0,name:"all mobiles"},{show:!0,name:"apple"},{show:!0,name:"samsung"},{show:!0,name:"lenovo"},{show:!0,name:"oppo"},{show:!0,name:"vivo"},{show:!0,name:"huawei"},{show:!0,name:"realme"},{show:!0,name:"nokia"},{show:!0,name:"mobile accessories"}]},{name:"computers",type:"computers",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all computers"},{show:!0,name:"apple"},{show:!0,name:"hp"},{show:!0,name:"dell"},{show:!0,name:"lenovo"},{show:!0,name:"samsung"},{show:!0,name:"toshiba"},{show:!0,name:"microsoft"},{show:!0,name:"sony"}]},{name:"televisions",type:"televisions",requireInnerSliders:!1,show:!0,children:[{show:!0,name:"all televisions"},{show:!0,name:"lg"},{show:!0,name:"samsung"},{show:!0,name:"philips"},{show:!0,name:"sony"},{show:!0,name:"tcl"},{show:!0,name:"others"}]},{name:"home electronics",type:"home electronics",requireInnerSliders:!1,root:"electronics",show:!0,children:[{show:!0,name:"all home electronics"},{show:!0,name:"fridges"},{show:!0,name:"microwaves"},{show:!0,name:"laundry machines"},{show:!0,name:"ovens"},{show:!0,name:"home theatres"},{show:!0,name:"others"}]}]},{name:"events",path:"/ishop/events",rootClass:"__navbar_home_link",show:!0,href:"/ishop/events",as:"/ishop/events"},{name:"store locator",path:"/ishop/locations",rootClass:"__navbar_home_link",show:!0,href:"/ishop/locations",as:"/ishop/locations"},{name:"today's offer",path:"/ishop/ioffers",rootClass:"__navbar_home_link",show:!0,href:"/ishop/ioffers",as:"/ishop/ioffers"}],w=function(){return s};e.exports={getProducts:w,getBestSellers:function(){return w()},getNewArrivals:function(){return w()},getTopRated:function(){return w()},getMiscallaneous:function(){return w()},getTrendingNow:function(){return w()},getPopularProducts:function(){return w()},getRecommendations:function(){return w()},getBrowseByCategories:function(){return g},getNavMenu:function(){return v}}},TkVQ:function(e,a){var s=!1,t=!0;e.exports={minLength:function(e){var a=e.value,n=e.validationRules,o=e.ref,i=e.name;return a.length<parseInt(n.minLength)?(o.classList.remove("valid"),o.classList.add("in-valid"),t=!1,s=!1):(o.classList.remove("in-valid"),o.classList.add("valid"),s=!0,t=!0),{valid:s,executor:"minLength",forwardToNextValidator:t,name:i,value:a,ref:o}},maxLength:function(e){var a=e.value,n=e.validationRules,o=e.ref,i=e.name;return a.length>parseInt(n.maxLength)?(o.classList.remove("valid"),o.classList.add("in-valid"),t=!1,s=!1):(o.classList.remove("in-valid"),o.classList.add("valid"),s=!0,t=!0),{valid:s,executor:"maxLength",forwardToNextValidator:t,name:i,value:a,ref:o}},emailValidator:function(e){var a=e.value,n=(e.validationRules,e.ref),o=e.name;return/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(a)?(n.classList.remove("in-valid"),n.classList.add("valid"),s=!0,t=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),t=!1,s=!1),{valid:s,executor:"emailValidator",forwardToNextValidator:t,name:o,ref:n,value:a}},passwordValidator:function(e){var a=e.value,n=(e.validationRules,e.ref),o=e.name;return/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(a)?(n.classList.remove("in-valid"),n.classList.add("valid"),s=!0,t=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),t=!1,s=!1),{valid:s,executor:"passwordValidator",forwardToNextValidator:t,name:o,value:a,ref:n}},digitsValidator:function(e){var a=e.value,n=(e.validationRules,e.ref),o=e.name;return/^\d+$/.test(a)?(n.classList.remove("in-valid"),n.classList.add("valid"),s=!0,t=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),t=!1,s=!1),{valid:s,executor:"numberValidator",forwardToNextValidator:t,name:o,ref:n,value:a}}}},qjIw:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return b}));var t=s("q1tI"),n=s.n(t),o=s("NvAs"),i=s("nOHt"),r=s("o0o1"),l=s.n(r),m=s("HaE+"),c=s("Cj2W"),u=s("MB5O"),d=s("/fyh"),p=s("AKbA"),h=n.a.createElement,g=new p.a,f=s("EfoT");var v=function(e){var a=Object(i.useRouter)(),s=Object(t.useState)([]),o=s[0],r=s[1],p=Object(t.useContext)(u.a),v=p.addToCart,y=p.addToWishlist,b=Object(t.useRef)(),_=Object(t.useRef)(),I=Object(t.useState)(!1),N=I[0],k=I[1],L=Object(t.useState)(!1),j=L[0],S=L[1],C=Object(t.useState)(!1),x=C[0],O=C[1],A=Object(t.useState)("ADD TO CART"),P=A[0],E=A[1],R=Object(t.useState)(""),T=R[0],D=R[1],V=Object(t.useState)(!1),M=V[0],U=V[1],q=Object(t.useState)(!1),z=q[0],B=q[1],W=Object(t.useState)(!1),X=W[0],H=W[1],F=Object(t.useState)("ADD TO WISHLIST"),G=F[0],Z=F[1];Object(t.useEffect)((function(){var e,s={},t=[];if(a.query&&a.query.id)try{if(e=a.query.id,-1!=a.asPath.indexOf("?")){var n=a.asPath.split("?");-1!=n[1].indexOf("-")?t=n[1].split("-"):t.push(n[1])}s=f.getProducts().find((function(a){return a.sku==e}))}catch(o){}r(s),t.push(s.name),D(t)}),[o]);var Y=function(){var e=Object(m.a)(l.a.mark((function e(a){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E("ADDING ..."),S(!1),k(!0),O(!1),g.disabledElem(b),s=!1,e.next=8,v(a,"cart");case 8:(t=e.sent).success?(S(!0),k(!1),s=!0):O(!0),E(t.message.toUpperCase()),setTimeout((function(){s||(g.enableElem(b),O(!1),E("ADD TO CART"))}),4e3);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(l.a.mark((function e(a){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("ADDING ..."),B(!1),U(!0),H(!1),g.disabledElem(_),s=!1,e.next=8,y(a);case 8:(t=e.sent).success?(B(!0),U(!1),s=!0):H(!0),Z(t.message.toUpperCase()),setTimeout((function(){s||(g.enableElem(_),H(!1),Z("ADD TO WISHLIST"))}),4e3);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return h(n.a.Fragment,null,h("div",{className:""},h(d.a,{link:T})," "),h("div",{className:"container-fluid __productlisting"},h("div",{className:"row"},h("div",{className:"col-xs-12 col-md-4"},h("img",{className:"img-responsive",src:o.bigImg?o.bigImg:o.img,alt:"product image"})),h("div",{className:"col-xs-12 col-md-5 __fullview_products_wrapper"},h("div",{className:"__fullview_title_wrapper"},h("h1",{className:"__fullview_title"},h("span",null,o.name))),h("div",{className:"line-height"},"by : ",h("a",null,o.brand)),h("div",{className:"__fullview_separator"},"ratings :  ",h("span",{className:"yellow-tag"},o.ratings),h("a",null,"(",o.comments," reviews)")),h("div",{className:"__fullview_price"},"Price : ",h("span",null,"AED ",o.newPrice)," "),h("p",{className:"__fullview_vat_note"},"all prices are VAT inclusive"),h("div",{className:"__fullview_bold_note instock"},h("span",null,"Usually ships within 2 to 3 days.")," "),h("div",{className:"line-height"},"Manufuctured and sold by ",o.brand," and ships and delivered by QExpress"),h("div",{className:"__fullview_bold_note",style:{lineHeight:"1.8rem",marginTop:"1rem"}},"Get it as soon as Monday, April XX-XX, Month XX when you choose Standard Delivery at checkout."),h("div",{className:""},"Edition : 5th Generation"),h("div",{className:"row __fullview_action_btns"},h("div",{className:"col-xs-12 col-md-6"},h("a",{ref:b,className:"customButton __checkout_confirm_btn",onClick:function(){return Y(o)}},j?null:h("i",{className:"fas fa-shopping-cart __quick_item_font_awsome"}),P,j?h(c.d,{label:"",paragraph:!1,class:"instock"}):null,N?h(c.c,{label:"",paragraph:!1}):null,x?h(c.a,{label:"",paragraph:!1,class:"outofstock"}):null)),h("div",{className:"col-xs-12 col-md-6"},h("a",{ref:_,className:"customButton __checkout_confirm_btn",onClick:function(){return Q(o)}}," ",z?null:h("i",{className:"far fa-heart __quick_item_font_awsome"}),G,z?h(c.d,{label:"",paragraph:!1,class:"instock"}):null,M?h(c.c,{label:"",paragraph:!1}):null,X?h(c.a,{label:"",paragraph:!1,class:"outofstock"}):null)))),h("div",{className:"col-xs-12 col-md-3 __fullview_ishop_facts"},h("p",null,h("i",{className:"fas fa-undo"})," Enjoy hassle free returns with this offer."),h("p",null,h("i",{className:"fas fa-credit-card"}),"We accept major credit & debut cards."),h("p",null,h("i",{className:"fas fa-home"}),"Trusted suppliers."),h("p",null,h("i",{className:"fas fa-truck"}),"Fast delivery."),h("p",null,h("i",{className:"fas fa-user"}),"Warranty guaranteed."))),h("div",{className:"row __fullview_product_description"},h("div",{className:"col-xs-12"},h(w,{item:o})))))};function w(e){return h("div",{className:"tabsCard"},h("ul",{className:"nav nav-tabs",role:"tablist"},h("li",{role:"presentation",className:"active"},h("a",{href:"#home","aria-controls":"home",role:"tab","data-toggle":"tab"},h("span",null,"OVERVIEW"))),h("li",{role:"presentation"},h("a",{href:"#profile","aria-controls":"profile",role:"tab","data-toggle":"tab"}," ",h("span",null,"PRODUCT DETAILS"))),h("li",{role:"presentation"},h("a",{href:"#messages","aria-controls":"messages",role:"tab","data-toggle":"tab"},h("span",null,"PRODUCT SPECS"))),h("li",{role:"presentation"},h("a",{href:"#settings","aria-controls":"settings",role:"tab","data-toggle":"tab"},h("span",null,"RATINGS & COMMENTS")))),h("div",{className:"tab-content"},h("div",{role:"tabpanel",className:"tab-pane active",id:"home"},h("p",{className:"line-height bold"},"INTRODUCTION"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",h("p",{className:"line-height bold mtop-2"},"HIGHLIGHTS"),h("ul",null,h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),h("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"))),h("div",{role:"tabpanel",className:"tab-pane",id:"profile"},h("p",{className:"line-height bold"},"DETAILS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),h("div",{role:"tabpanel",className:"tab-pane",id:"messages"},h("p",{className:"line-height bold"},"SPECIFICATIONS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),h("div",{role:"tabpanel",className:"tab-pane",id:"settings"},h("p",{className:"line-height bold"},"OVERALL RATING"),h("div",{className:"col-xs-4"},h("div",{className:"overallratings bold"},e.item.ratings),h("p",{className:"line-height"},"based on the reviews")),h("div",{className:"col-xs-8"},h("p",{className:"line-height bold underline"},"OVERVIEWS"),h("p",{className:"line-height bold mb-0"},"User 1"),h("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),h("p",{className:"line-height bold mb-0"},"User 2"),h("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),h("p",{className:"line-height bold mb-0"},"User 3"),h("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),h("p",{className:"line-height bold mb-0"},"User 4"),h("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),h("p",{className:"line-height bold mb-0"},"User 5"),h("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and")))))}var y=n.a.createElement;function b(){Object(i.useRouter)();return Object(t.useEffect)((function(){})),y(o.a,{title:"Product details",description:"Product details page for the project"},y("div",{className:"container-fluid __registeration"},y("div",{className:"row"},y("div",{className:"col-xs-12"},y("h2",{className:"text-center"},"  ITEM DETAILS "),y(v,{search:"PRODUCT DETAILS"})))))}},rePB:function(e,a,s){"use strict";function t(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}s.d(a,"a",(function(){return t}))}},[["D/r9",0,2,1,3]]]);