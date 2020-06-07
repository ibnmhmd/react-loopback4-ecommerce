import React from 'react';
export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
    logErrorToMyService(error , info){
        console.log("##### Error ######");
        console.log(error + "---"+ info);
    }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong, please check your server logs .</h1>;
      }
  
      return this.props.children; 
    }
  }