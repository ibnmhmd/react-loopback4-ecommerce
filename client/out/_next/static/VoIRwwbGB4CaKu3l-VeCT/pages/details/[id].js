(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/RR4":function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),i=n.a.createElement;t.a=function(e){return i(n.a.Fragment,null,i("a",{className:"customButton",onClick:""!==e.Click?function(){e.callBackParam?e.Click(e.callBackParam):e.Click()}:null},i("i",{className:"".concat(e.fontName," __quick_item_font_awsome")}),e.buttonName))}},"/fyh":function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),i=a("wx14"),r=a("zLVn"),l=a("TSYQ"),o=a.n(l),c=a("vUet"),m=a("dbZe"),u=n.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.active,l=e.className,u=e.as,d=void 0===u?"li":u,p=Object(r.a)(e,["bsPrefix","active","className","as"]),f=Object(c.b)(a,"breadcrumb-item"),h=p.href,g=p.title,v=p.target,y=Object(r.a)(p,["href","title","target"]),b={href:h,title:g,target:v};return n.a.createElement(d,{ref:t,className:o()(f,l,{active:s}),"aria-current":s?"page":void 0},s?n.a.createElement("span",Object(i.a)({},y,{className:o()({active:s})})):n.a.createElement(m.a,Object(i.a)({},y,b)))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1};var d=u,p=n.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.listProps,m=e.children,u=e.label,d=e.as,p=void 0===d?"nav":d,f=Object(r.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(c.b)(a,"breadcrumb");return n.a.createElement(p,Object(i.a)({"aria-label":u,className:s,ref:t},f),n.a.createElement("ol",Object(i.a)({},l,{className:o()(h,l.className)}),m))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}},p.Item=d;var f=p,h=n.a.createElement;t.a=function(e){return h(n.a.Fragment,null,h(f,null,h(f.Item,{href:"/"},"HOME"),(e.link.length,h(f.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]))},decodeURIComponent(e.link[0]).toUpperCase())),2==e.link.length?h(f.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},decodeURIComponent(e.link[1]).toUpperCase()):h(f.Item,{href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},e.link[1]?decodeURIComponent(e.link[1]).toUpperCase():""),3==e.link.length?h(f.Item,{active:!0},decodeURIComponent(e.link[2]).toUpperCase()):null))}},AKbA:function(e,t,a){"use strict";var s=a("rePB"),n=a("1OyB"),i=a("vuIU");a("q1tI");function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=a("TkVQ"),u=function(){function e(){Object(n.a)(this,e)}return Object(i.a)(e,[{key:"Validator",value:function(){this.response=[]}},{key:"validate",value:function(e){var t=this;return this.getFormCandidates(e).map((function(e,a){return e.required&&e.validate?t.executeValidations(e):(e.valid=!0,e.executor="N/A",t.response=[],t.response.push(e),t.response)}))}},{key:"getFormCandidates",value:function(e){var t=new Array,a=e.srcElement;return a.dataset.formdata&&t.push(c(c({},JSON.parse(a.dataset.formdata)),{},{value:a.value,ref:a})),t}},{key:"executeValidations",value:function(e){var t,a=[],s={},n=r(e.validationRules?Object.keys(e.validationRules):[]);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(m[i]&&(s=m[i](e),a.push(s),!s.forwardToNextValidator)){a=[];break}}}catch(l){n.e(l)}finally{n.f()}return a}},{key:"processFieldPostValidation",value:function(e,t,a,s){var n=a;if(0!==e[0].length){var i=e[0][0],r=i.value;n[i.name]=r,n.id=this.getRandomInt(1,1e3)}else n[t.name]&&delete n[t.name];s(n)}},{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"disabledElem",value:function(e){null!==e&&e.current.classList.add("disabled")}},{key:"enableElem",value:function(e){null!==e&&e.current.classList.remove("disabled")}}]),e}();t.a=u},Cj2W:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return m}));var s=a("q1tI"),n=a.n(s),i=a("/RR4"),r=n.a.createElement,l=function(e){return r(n.a.Fragment,null,r("div",{className:"row",style:{margin:"2rem 0"}},r("div",{className:"col-xs-12 col-md-4"}),r("div",{className:"col-xs-12 col-md-4"},r(i.a,{buttonName:"LOAD MORE ITEMS..",Click:e.LoadMore?e.LoadMore:""})),r("div",{className:"col-xs-12 col-md-4"})))},o=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader"},e.label," ",r("i",{className:"fas fa-sync fa-spin"})):r("i",{className:"fas fa-sync fa-spin"})},c=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader instock"},e.label," ",r("i",{className:"fas fa-check-circle"})):r("i",{className:"".concat(e.class?e.class:""," fas fa-check-circle")})},m=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader outofstock"},e.label," ",r("i",{className:"fas fa-times-circle"})):r("i",{className:"".concat(e.class?e.class:""," fas fa-times-circle")})}},"D/r9":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[id]",function(){return a("qjIw")}])},EfoT:function(e,t){for(var a=new Array,s={},n=["Guice","Nike","Sony","Sony","Promate","Casio"],i=[319.25,690.23,2399,248.99,109.99,179.1],r=[400.5,800,2500,279,150,249.99],l=[4,5,3,5,7,10],o=[3,7,2,20,8,7],c=[4.3,4.6,3.7,4,3.7,4.1],m=[587,1254,3004,874,4512,8745],u=["ISHRT7845541224","RVFX788874471","SON54587454112","SON5458745417845","SON545874748717845","CAS34455875411"],d=["https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg","https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"],p=["https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"],f=["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation","AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits","Sony PlayStation 4 Pro 1TB Console (Black)","Sony PS4 Dualshock 4 Controller, Black (Official Version)","YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White","Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"],h=[{category:"accessories",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"women",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"},{category:"games",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"},{category:"computers",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"},{category:"mobiles",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"},{category:"men",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"},{category:"shoes",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"},{category:"electronics",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"kids",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"}],g=0;g<f.length;g++)(s={}).name=f[g],s.oldPrice=r[g],s.newPrice=i[g],s.brand=n[g],s.img=d[g],s.qty=l[g],s.availableQty=o[g],s.selectedQty=1,s.bigImg=p[g],s.sku=u[g],s.ratings=c[g],s.comments=m[g],a.push(s);var v=function(){return a};e.exports={getProducts:v,getBestSellers:function(){return v()},getNewArrivals:function(){return v()},getTopRated:function(){return v()},getMiscallaneous:function(){return v()},getTrendingNow:function(){return v()},getPopularProducts:function(){return v()},getRecommendations:function(){return v()},getBrowseByCategories:function(){return h}}},TkVQ:function(e,t){var a=!1,s=!0;e.exports={minLength:function(e){var t=e.value,n=e.validationRules,i=e.ref,r=e.name;return t.length<parseInt(n.minLength)?(i.classList.remove("valid"),i.classList.add("in-valid"),s=!1,a=!1):(i.classList.remove("in-valid"),i.classList.add("valid"),a=!0,s=!0),{valid:a,executor:"minLength",forwardToNextValidator:s,name:r,value:t,ref:i}},maxLength:function(e){var t=e.value,n=e.validationRules,i=e.ref,r=e.name;return t.length>parseInt(n.maxLength)?(i.classList.remove("valid"),i.classList.add("in-valid"),s=!1,a=!1):(i.classList.remove("in-valid"),i.classList.add("valid"),a=!0,s=!0),{valid:a,executor:"maxLength",forwardToNextValidator:s,name:r,value:t,ref:i}},emailValidator:function(e){var t=e.value,n=(e.validationRules,e.ref),i=e.name;return/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(t)?(n.classList.remove("in-valid"),n.classList.add("valid"),a=!0,s=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),s=!1,a=!1),{valid:a,executor:"emailValidator",forwardToNextValidator:s,name:i,ref:n,value:t}},passwordValidator:function(e){var t=e.value,n=(e.validationRules,e.ref),i=e.name;return/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(t)?(n.classList.remove("in-valid"),n.classList.add("valid"),a=!0,s=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),s=!1,a=!1),{valid:a,executor:"passwordValidator",forwardToNextValidator:s,name:i,value:t,ref:n}},digitsValidator:function(e){var t=e.value,n=(e.validationRules,e.ref),i=e.name;return/^\d+$/.test(t)?(n.classList.remove("in-valid"),n.classList.add("valid"),a=!0,s=!0):(n.classList.remove("valid"),n.classList.add("in-valid"),s=!1,a=!1),{valid:a,executor:"numberValidator",forwardToNextValidator:s,name:i,ref:n,value:t}}}},qjIw:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var s=a("q1tI"),n=a.n(s),i=a("NvAs"),r=a("nOHt"),l=a("o0o1"),o=a.n(l),c=a("HaE+"),m=a("Cj2W"),u=a("MB5O"),d=a("/fyh"),p=a("AKbA"),f=n.a.createElement,h=new p.a,g=a("EfoT");var v=function(e){var t=Object(r.useRouter)(),a=Object(s.useState)([]),i=a[0],l=a[1],p=Object(s.useContext)(u.a),v=p.addToCart,b=p.addToWishlist,_=Object(s.useRef)(),N=Object(s.useRef)(),I=Object(s.useState)(!1),w=I[0],k=I[1],L=Object(s.useState)(!1),x=L[0],O=L[1],j=Object(s.useState)(!1),S=j[0],C=j[1],A=Object(s.useState)("ADD TO CART"),P=A[0],T=A[1],E=Object(s.useState)(""),R=E[0],D=E[1],V=Object(s.useState)(!1),U=V[0],M=V[1],q=Object(s.useState)(!1),z=q[0],B=q[1],W=Object(s.useState)(!1),H=W[0],X=W[1],F=Object(s.useState)("ADD TO WISHLIST"),G=F[0],Z=F[1];Object(s.useEffect)((function(){var e,a={},s=[];if(t.query&&t.query.id)try{if(e=t.query.id,-1!=t.asPath.indexOf("?")){var n=t.asPath.split("?");-1!=n[1].indexOf("-")?s=n[1].split("-"):s.push(n[1])}a=g.getProducts().find((function(t){return t.sku==e}))}catch(i){}l(a),s.push(a.name),D(s)}),[i]);var Q=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("ADDING ..."),O(!1),k(!0),C(!1),h.disabledElem(_),a=!1,e.next=8,v(t,"cart");case 8:(s=e.sent).success?(O(!0),k(!1),a=!0):C(!0),T(s.message.toUpperCase()),setTimeout((function(){a||(h.enableElem(_),C(!1),T("ADD TO CART"))}),4e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("ADDING ..."),B(!1),M(!0),X(!1),h.disabledElem(N),a=!1,e.next=8,b(t);case 8:(s=e.sent).success?(B(!0),M(!1),a=!0):X(!0),Z(s.message.toUpperCase()),setTimeout((function(){a||(h.enableElem(N),X(!1),Z("ADD TO WISHLIST"))}),4e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f(n.a.Fragment,null,f("div",{className:""},f(d.a,{link:R})," "),f("div",{className:"container-fluid __productlisting"},f("div",{className:"row"},f("div",{className:"col-xs-12 col-md-4"},f("img",{className:"img-responsive",src:i.bigImg?i.bigImg:i.img,alt:"product image"})),f("div",{className:"col-xs-12 col-md-5 __fullview_products_wrapper"},f("div",{className:"__fullview_title_wrapper"},f("h1",{className:"__fullview_title"},f("span",null,i.name))),f("div",{className:"line-height"},"by : ",f("a",null,i.brand)),f("div",{className:"__fullview_separator"},"ratings :  ",f("span",{className:"yellow-tag"},i.ratings),f("a",null,"(",i.comments," reviews)")),f("div",{className:"__fullview_price"},"Price : ",f("span",null,"AED ",i.newPrice)," "),f("p",{className:"__fullview_vat_note"},"all prices are VAT inclusive"),f("div",{className:"__fullview_bold_note instock"},f("span",null,"Usually ships within 2 to 3 days.")," "),f("div",{className:"line-height"},"Manufuctured and sold by ",i.brand," and ships and delivered by QExpress"),f("div",{className:"__fullview_bold_note",style:{lineHeight:"1.8rem",marginTop:"1rem"}},"Get it as soon as Monday, April XX-XX, Month XX when you choose Standard Delivery at checkout."),f("div",{className:""},"Edition : 5th Generation"),f("div",{className:"row __fullview_action_btns"},f("div",{className:"col-xs-12 col-md-6"},f("a",{ref:_,className:"customButton __checkout_confirm_btn",onClick:function(){return Q(i)}},x?null:f("i",{className:"fas fa-shopping-cart __quick_item_font_awsome"}),P,x?f(m.d,{label:"",paragraph:!1,class:"instock"}):null,w?f(m.c,{label:"",paragraph:!1}):null,S?f(m.a,{label:"",paragraph:!1,class:"outofstock"}):null)),f("div",{className:"col-xs-12 col-md-6"},f("a",{ref:N,className:"customButton __checkout_confirm_btn",onClick:function(){return Y(i)}}," ",z?null:f("i",{className:"far fa-heart __quick_item_font_awsome"}),G,z?f(m.d,{label:"",paragraph:!1,class:"instock"}):null,U?f(m.c,{label:"",paragraph:!1}):null,H?f(m.a,{label:"",paragraph:!1,class:"outofstock"}):null)))),f("div",{className:"col-xs-12 col-md-3 __fullview_ishop_facts"},f("p",null,f("i",{className:"fas fa-undo"})," Enjoy hassle free returns with this offer."),f("p",null,f("i",{className:"fas fa-credit-card"}),"We accept major credit & debut cards."),f("p",null,f("i",{className:"fas fa-home"}),"Trusted suppliers."),f("p",null,f("i",{className:"fas fa-truck"}),"Fast delivery."),f("p",null,f("i",{className:"fas fa-user"}),"Warranty guaranteed."))),f("div",{className:"row __fullview_product_description"},f("div",{className:"col-xs-12"},f(y,{item:i})))))};function y(e){return f("div",{className:"tabsCard"},f("ul",{className:"nav nav-tabs",role:"tablist"},f("li",{role:"presentation",className:"active"},f("a",{href:"#home","aria-controls":"home",role:"tab","data-toggle":"tab"},f("span",null,"OVERVIEW"))),f("li",{role:"presentation"},f("a",{href:"#profile","aria-controls":"profile",role:"tab","data-toggle":"tab"}," ",f("span",null,"PRODUCT DETAILS"))),f("li",{role:"presentation"},f("a",{href:"#messages","aria-controls":"messages",role:"tab","data-toggle":"tab"},f("span",null,"PRODUCT SPECS"))),f("li",{role:"presentation"},f("a",{href:"#settings","aria-controls":"settings",role:"tab","data-toggle":"tab"},f("span",null,"RATINGS & COMMENTS")))),f("div",{className:"tab-content"},f("div",{role:"tabpanel",className:"tab-pane active",id:"home"},f("p",{className:"line-height bold"},"INTRODUCTION"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",f("p",{className:"line-height bold mtop-2"},"HIGHLIGHTS"),f("ul",null,f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),f("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"))),f("div",{role:"tabpanel",className:"tab-pane",id:"profile"},f("p",{className:"line-height bold"},"DETAILS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),f("div",{role:"tabpanel",className:"tab-pane",id:"messages"},f("p",{className:"line-height bold"},"SPECIFICATIONS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),f("div",{role:"tabpanel",className:"tab-pane",id:"settings"},f("p",{className:"line-height bold"},"OVERALL RATING"),f("div",{className:"col-xs-4"},f("div",{className:"overallratings bold"},e.item.ratings),f("p",{className:"line-height"},"based on the reviews")),f("div",{className:"col-xs-8"},f("p",{className:"line-height bold underline"},"OVERVIEWS"),f("p",{className:"line-height bold mb-0"},"User 1"),f("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),f("p",{className:"line-height bold mb-0"},"User 2"),f("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),f("p",{className:"line-height bold mb-0"},"User 3"),f("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),f("p",{className:"line-height bold mb-0"},"User 4"),f("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),f("p",{className:"line-height bold mb-0"},"User 5"),f("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and")))))}var b=n.a.createElement;function _(){Object(r.useRouter)();return Object(s.useEffect)((function(){})),b(i.a,{title:"Product details",description:"Product details page for the project"},b("div",{className:"container-fluid __registeration"},b("div",{className:"row"},b("div",{className:"col-xs-12"},b("h2",{className:"text-center"},"  ITEM DETAILS "),b(v,{search:"PRODUCT DETAILS"})))))}},rePB:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return s}))}},[["D/r9",0,2,1,3]]]);