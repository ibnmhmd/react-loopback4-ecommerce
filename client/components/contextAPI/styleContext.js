import React , { createContext, useState , useEffect } from 'react';

export const StyleContext = createContext();
function StyleContextProvider(props){
    const style = {
        backgroundColor : "red",
        border : "1px solid green"
    }

    return (<StyleContext.Provider value = {{ state :  style }}>
              { props.children }
           </StyleContext.Provider>) ;
}
export default StyleContextProvider;