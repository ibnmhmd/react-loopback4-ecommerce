import React from 'react';

export default class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
         <div className="container">
             <div className="row">
               <div className="col-xl-12 col-lg-12 text-center">
                    <div className="row">
                       <div className="col-xs-12 col-sm-12 col-md-8">
                         <div className="col-xs-6 col-sm-4 col-md-2">
                          <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/paypal.png" className = "img-responsive" alt=""/></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                         <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/amex.png" className = "img-responsive" alt=""/></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                         <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/mastercard.png" className = "img-responsive" alt=""/></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                          <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/visa.png" className = "img-responsive" alt=""/></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                         <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/delta.png" className = "img-responsive" alt=""/></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2 lastchild">
                         <a href=""><img src="https://demo.mythemeshop.com/ecommerce/wp-content/themes/mts_ecommerce/options/img/credit-cards/cirrus.png" className = "img-responsive" alt=""/></a>
                         </div>
                      </div>

                      <div className="col-xs-12 col-sm-12 col-md-4">
                        
                         <div className="col-xs-6 col-sm-4 col-md-2">
                           <a href=""><i className="fab fa-facebook"></i></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                           <a href=""><i className="fab fa-twitter"></i></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                           <a href=""><i className="fab fa-linkedin"></i></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                         <a href=""><i className="fab fa-google-plus"></i></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                          <a href=""><i className="fab fa-pinterest-p"></i></a>
                         </div>
                         <div className="col-xs-6 col-sm-4 col-md-2">
                          <a href=""><i style = {{fontSize : 28}} className="fas fa-envelope"></i></a>
                        </div>
                      </div>
                    </div>
               </div>
             </div>

             <div className="row">
               <div className="col-xs-12 col-md-6">
                 <span className ="copy bold">&copy; 2020 iShop.  All Rights Reserved.</span>
              </div>
              <div className="col-xs-12 col-md-6 terms">
                 <a>Terms of use</a> | <a>Terms of Sale</a> | <a>Privacy Policy</a> | <a>Warranty Policy</a>             
              </div>
             </div>
             <style jsx>
             {
                 ` 
                 img {
                     margin: 0 auto;
                 }
                 .text-center {
                     padding-top: 1rem;
                     border-bottom: 1px solid white;
                 }
                 .fab{
                     font-size:30px!important;
                 }
                 .lastchild{
                     border-right: 1px solid white;
                 }
                 `
             }</style>
        </div>
      </footer>
      )
    }
}