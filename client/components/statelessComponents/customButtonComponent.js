const CustomButton = (props) => {
   const click = () => {
      if(props.callBackParam){
        props.Click(props.callBackParam);
      }else{
        props.Click();
      }
   }
    return (<React.Fragment>
              <a className="customButton" onClick = { "" !== props.Click ? () => click() : null }><i className= {`${props.fontName} __quick_item_font_awsome` }></i>{props.buttonName}</a>
    </React.Fragment>)
  }
export default CustomButton;  