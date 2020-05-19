import React from 'react';
import Wrapper from '../../components/appWrapper';
import { useRouter } from 'next/router';
import { useEffect , useState , useContext } from 'react';
import FullView from '../../components/partialComponents/productListingComponent/fullViewComponent';
export default function ProductListing() {
    const router = useRouter();
    useEffect(function(){
    });
        return (
             <Wrapper title = "Product details" description = "Product details page for the project">
             <div className="container-fluid __registeration">
                 <div className="row">
                     <div className="col-xs-12">
                       <h2 className = "text-center">  ITEM DETAILS </h2>
                        {/*** product details component ***/}
                        <FullView search = "PRODUCT DETAILS" />
                     </div>
                 </div>
             </div>
            </Wrapper>
        )
}
