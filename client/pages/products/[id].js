import React from 'react';
import Wrapper from '../../components/appWrapper';
import { useRouter } from 'next/router';
import   {RouteContext} from '../../components/contextAPI/routingContext';
import { useEffect , useState , useContext } from 'react';
import ProductLisiting from '../../components/partialComponents/productListingComponent/productListingComponent';
export default function ProductListing() {
    const router = useRouter();
  
    const [ pageTitle , setPageTitle ] = useState("");
    const [breadCrumb , setBreadCrumb] = useState([]);
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
                setPageTitle((parent + " " + category));
                setBreadCrumb(router.query.id);
             }catch(e){
                setPageTitle(url);
             }
        }
    });
        return (
             <Wrapper title = "List Products" description = "Product listing page for the project">
             <div className="container-fluid __registeration">
                 <div className="row">
                       <h2 className = "text-center">  { pageTitle.toUpperCase() } </h2>
                        {/*** product listing components ***/}
                        <ProductLisiting search = { pageTitle } breadCrumb ={breadCrumb}/>
                     </div>
             </div>
            </Wrapper>
        )
}
