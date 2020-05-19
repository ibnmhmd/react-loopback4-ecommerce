import CustomButton from '../statelessComponents/customButtonComponent';

export const LoadMore = (props) => {
    return(<React.Fragment>
               <div className ="row" style = {{ margin: '2rem 0' }}>
                   <div className = "col-xs-12 col-md-4"></div>
                     <div className = "col-xs-12 col-md-4">
                        <CustomButton  buttonName = "LOAD MORE ITEMS.." Click = {props.LoadMore ? props.LoadMore : ""}/>
                     </div>
                    <div className = "col-xs-12 col-md-4"></div>
               </div>
   </React.Fragment>)
}

export const LoaderComponent = (props) => {
   if(props.paragraph){
      return (<p className="__cart_qty_loader">
        { props.label} <i className="fas fa-sync fa-spin"></i>
     </p>);
   }else{
        return (<i className="fas fa-sync fa-spin"></i>)
   } 
}

export const SuccessComponent = (props) => {
   if(props.paragraph){
   return (<p className="__cart_qty_loader instock">
            {props.label} <i className="fas fa-check-circle"></i>
         </p>);
   }else{
      return(<i className= {`${props.class ? props.class : '' } fas fa-check-circle`} ></i>)
   }
}

export const FailureComponent = (props) => {
   if(props.paragraph){
   return (<p className="__cart_qty_loader outofstock">
              { props.label} <i className="fas fa-times-circle"></i>
          </p>);
   }else{
      return(<i className= { `${props.class ? props.class : ''} fas fa-times-circle`}></i>)
   }
}