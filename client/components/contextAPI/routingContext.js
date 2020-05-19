import React , { createContext, useState , useEffect } from 'react';
 

export const RouteContext = createContext();
function RouteContextProvider(props){
     console.log("called")
    const [ type , setType ] = useState("");
    const [ category , setCategory ] = useState("");
    const [ subCategory , setsubCategory ] = useState("");


   const configRoute = (config ) => {
       debugger
        if(config && config.routeType){
            setType(config.routeType);
        }
        if(config && config.routeCategory){
            setCategory(config.routeCategory);
        }
        if(config && config.routeSubCategory){
            setsubCategory(config.routeSubCategory);
        }
    }
    return (<RouteContext.Provider value = { { routeConfig : 
    { 
         type  , 
         category  ,
         subCategory,
         setRouteConfig : (config) => {
            if(config && config.routeType){
              setType(config.routeType);
            }
            if(config && config.routeCategory){
                setCategory(config.routeCategory);
            }
            if(config && config.routeSubCategory){
                setsubCategory(config.routeSubCategory);
            }
         }
    } }}>
              { props.children }
           </RouteContext.Provider>) ;
}

function useRouteReducer(state , action ) {
    switch (action.type) {
        case 'type':
          return { type : state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
  }

export default React.memo(RouteContextProvider);