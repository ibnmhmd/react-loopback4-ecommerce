import React , {useState , useEffect , useContext } from 'react';
import { CartContext } from './contextAPI/cartContext';
import {
      Navbar, Nav, 
      NavItem, Dropdown, MenuItem, Glyphicon
} from 'react-bootstrap';
import Router from 'next/router'

function TopBarComponent () 
{
  const [showLogin , setShowLogin] = useState(true);
  const [user , setUser] = useState("");
  const { getCustomerProfile , loggedInUser } = useContext(CartContext);
  const { signOut } = useContext(CartContext);

  useEffect(()=> {
    const profile = getCustomerProfile();
    const loggedIn = loggedInUser();
    if(loggedIn){
          setShowLogin(false);
          setUser(`${profile.firstName}`);
    }
  },[]);

  const logOut = async () => {
      const response = await signOut();
      if(response.success){
            setShowLogin(true);
            setUser("");
            Router.push('/'); 
      }
   }
      return <>
                    <Navbar className = "__topbar_nav_main hidden-xs hidden-sm" >
                        {/* hide on xs, sm and md */}
                        < Nav className = "__topbar_nav_main_items pull-right hidden-xs hidden-sm" >
                               
                              { showLogin ? <NavItem className="item" onClick={() => Router.push('/signin-up/register')} tabIndex="1" eventkey = { 2 }> Sign In / Sign Up </NavItem> :
                                <User fullName = {user} click = {logOut}/> }
                               <NavItem className="item" onClick={() => Router.push('/info/about-us')} eventkey={6} href="#" tabIndex="3"> About iShop </NavItem>
                               <NavItem className="item" eventkey={5} href="#" tabIndex="2"> Contact Us </NavItem>
                        </Nav>

                  </Navbar>
            </>;
}
export default TopBarComponent;
function User(prop){
  return <NavItem >
            <Dropdown>
             <Dropdown.Toggle variant="success" id="dropdown-basic">
               <i className="fas fa-user"></i> Hello, {prop.fullName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href=""  onClick={() => Router.push('/')}>Manage My Account</Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => Router.push('/')}>Check My Order History</Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => Router.push('/')}>Track My Open Orders</Dropdown.Item>
            <Dropdown.Item href="#" onClick={ prop.click }>Sign Out</Dropdown.Item>
         </Dropdown.Menu>
        </Dropdown>
      </NavItem>
}

