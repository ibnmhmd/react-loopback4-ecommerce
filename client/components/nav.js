import Head from './head';
import Link from 'next/link';
import React from 'react';
import Router from 'next/router';
import { useState , useEffect , useContext } from 'react';
import  { RouteContext } from './contextAPI/routingContext';
import Service from './classes/services';
import ErrorBoundary from './errorFallbackComponent';
const api = require('../api/config.property').GET_NAV_MENUS;
const service = new Service();

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
link.key = `nav-link-${link.href}-${link.label}`
  return link
})
 function Nav () {
    const [ route , setRoute ] = useState({ }) ;
    const [navigationMenu , setNavigationMenus] = useState([]);
    const routeContext = useContext(RouteContext);
    useEffect(function () {
         
      const getNavMenus = async () => {
        const query = {
          fields: {
            id: true,
            menus: true
          }
        }
        const url = `${api}?filter=${JSON.stringify(query)}`;
        const headers =  {
          headers: {
                   accepts: 'application/json'
              } 
         }
        await service.get({ url : url , headers }).then((menus) => {
         if(menus.data && menus.data[0]){
            sessionStorage.setItem("navMenus",JSON.stringify(menus.data[0]));
            setNavigationMenus(menus.data[0].menus);
         }
        }).catch((err) => {
          console.error("Error :: " + err);
        });
      }
        let navs = sessionStorage.getItem("navMenus");
        if(!navs){
           getNavMenus();
        }else{
          let navigationMenus = JSON.parse(navs).menus;
          setNavigationMenus(navigationMenus ? navigationMenus : []);
        } 
          setTimeout(() => {
            $(".mega-dropdown").hover(          
              function() {
                  $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                  $(this).toggleClass('open');        
              },
              function() {
                  $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
                  $(this).toggleClass('open');       
              }
            );
          }, 1000);
       },[]);  
        return (
          <ErrorBoundary>
            <div className="__navbar_main_bar_wrapper">
            <nav className="container navbar navbar-default __navbar_main_bar float-panel">          
             <div className="collapse navbar-collapse js-navbar-collapse">
             <ul className="nav navbar-nav">
                 {/**** start looping navigation array ****/}
                 { navigationMenu.map((nav , index) => {
                    if(nav.show){
                        return<>
                            <li className = {nav.rootClass && nav.rootClass} key = {index}>
                               <a href = {nav.as && nav.as} as = {nav.as && nav.as } 
                                data-toggle={nav.toggle&&nav.toggle}
                                className ={nav.innerClass && nav.innerClass} key ={index+1}>
                                 {nav.name.toUpperCase()}{nav.children ? <span className="caret"></span>:null}</a>

                                 { nav.children ?   
                                   <RenderChildren parent ={nav} key ={index+2} />: null }
                            </li>
                           </>
                    }
                  }) }
                 </ul> 
             </div>
            </nav>
           </div>
           </ErrorBoundary>)
}

const RenderChildren = (props) => {
    return<React.Fragment>
           <ul className="dropdown-menu mega-dropdown-menu">
            { props.parent.children.map((child , key) => {
                if(child.show){
                 return <li className="col-sm-3" key ={key}>
                            { child.requireInnerSliders ? 
                                 <RenderInnerChildrenWithSliders child = {child} key = {key+1} parent = {props.parent}/>: 
                                 <RenderInnerChildren child = {child} key = {key+1} parent = {props.parent}/>}
                        </li>
                }
                })                       
            }
          </ul>
        </React.Fragment>
}

const RenderInnerChildren = (props) => {
    return  <ul>
              <li className="dropdown-header">{props.child.name.toUpperCase()}</li>
              {props.child.children.map((child , key) => {
                  return (<li key ={key}><Link key ={key} href= {props.parent.navigationMapper} as = {`${props.parent.as}-${child.name}`} ><a className ="hover-orange">{child.name.toUpperCase()}</a></Link> </li>);             
              })}
            </ul>
}
const RenderInnerChildrenWithSliders = (props) => {
    return  <ul>
             <li className="dropdown-header"> <Link href= {props.parent.href && props.parent.href} passHref as = {`${props.parent.as}-${props.child.name}`}><a>{props.child.name.toUpperCase()}</a></Link></li>                            
                <div id={`${props.child.root}-${props.child.name}`} className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {props.child.children.map((child , index) => {
                        return <div className= { child.class && child.class } key = {index}>
                                <a key = {index} href= "/products/[id]" as = {`/products/${child.name}`}><img src= {child.image} className="img-responsive" alt= {child.name}/></a>
                                <h4><small>{ child.name.toUpperCase() } </small></h4>                                        
                                <button className="btn btn-primary" type="button">{child.price} AED</button> <button href="#" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>       
                              </div>
                    })}
                  </div>
                  <a className="left carousel-control" href={`#${props.child.root}-${props.child.name}`} role="button" data-slide="prev">
                                         <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                         <span className="sr-only">Previous</span>
                 </a>
                 <a className="right carousel-control" href={`#${props.child.root}-${props.child.name}`} role="button" data-slide="next">
                                         <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                         <span className="sr-only">Next</span>
                   </a>
                </div>
              <li className="divider"></li>
              <li><a className ="hover-orange" href = {`/products/${props.child.root}-${props.child.name}`}>View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
            </ul>
}

export default React.memo(Nav)