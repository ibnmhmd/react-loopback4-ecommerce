import React from 'react';
import Wrapper from '../../components/appWrapper';
import { useRouter } from 'next/router';
import { useEffect , useState , useContext } from 'react';
import CartComponent from '../../components/partialComponents/cartsComponents/cartComponent';
import WishlistComponent from '../../components/partialComponents/cartsComponents/wishlistComponent';

export default function ProductListing() {
    const router = useRouter();
    const [ pageTitle , setPageTitle ] = useState("");
    useEffect(function(){
        if(router.query && router.query.id) {
             try{
                let url = router.query.id;
                let parent = "" , category = "" ;
                if(url.indexOf("-") != -1) {
                    url = url.split("-");
                    parent = url[0];
                    category = url[1];
                }else{
                    parent = url;
                }
                setPageTitle((parent + " " + category))
             }catch(e){
                setPageTitle(url);
             }
            
        }
    });
        return (
             <Wrapper title = "List Products" description = "Cart Management page for the project">
             <div className="container-fluid __registeration">
                 <div className="row">
                     <div className="col-xs-12">
                       <h2 className = "text-center">  MANAGE { pageTitle.toUpperCase() } </h2>
                        {/*** product listing components ***/}
                        { pageTitle.indexOf("cart") !== -1 ? <CartComponent /> : <WishlistComponent /> }
                     </div>
                 </div>
             </div>
            </Wrapper>
        )
}