import React from 'react';
const Notes = () => 
(
    <div className="container __notes_wrapper">
     <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 ">
         <div className="__notes_payment_wrapper">
           <div className="__notes_icon">
              <i className="fa fa-lock"></i>
          </div>
          <div className="__notes_para">
             <h3 className="__notes_title">Secure Payments</h3>
             <div className="__notes_content">
                Lorem ipsum dolor sit amet. Morbi at nisl lorem, vel porttitor justo.
             </div>
          </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div className="__notes_payment_wrapper">
         <div className="__notes_icon">
               <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="__notes_para">
                 <h3 className="__notes_title">Money Back Guarantee</h3>
                  <div className="__notes_content">
                    Lorem ipsum dolor sit amet. Morbi at nisl lorem, vel porttitor justo.
                 </div>
             </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <div className="__notes_payment_wrapper">  
        <div className="__notes_icon">
               <i className="fa fa-truck"></i>
            </div>
            <div className="__notes_para">
                 <h3 className="__notes_title">Free Delivery</h3>
                 <div className="__notes_content">
                    Lorem ipsum dolor sit amet. vel porttitor justo.
                 </div>
            </div>
            </div> 
        </div>
    </div>
    <style jsx>
     {
      `
        .__notes_icon{
            float: left;
            margin: 2rem;
        }
        .fa, .fas{
            font-size: 50px;
        }
        .__notes_para{
            float: none;
            vertical-align: baseline;
            overflow: hidden;
        }
        
        .__notes_payment_wrapper{
            background:#eadfdf;
            border:1px solid #b0a0a0;
            padding: 1.5rem; 
        }
      `
     }
    </style>
    </div>
);

export default Notes;