import React , { createContext, useState , useEffect } from 'react';

export const StyleContext = createContext();
function StyleContextProvider(props){
     const [valid , setValid ] = useState(new Object());
    useEffect(()=> {
        const style = {
            backgroundColor : "red",
            border : "1px solid green"
        }
        setValid(style);
    } , [])
    return (<StyleContext.Provider value = { {...valid} }>
              { props.children }
           </StyleContext.Provider>) ;
}
export default StyleContextProvider;