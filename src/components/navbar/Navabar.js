import React,{ useState, useContext } from 'react';
import './navbar.css'
import { Link, withRouter} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Cookies from 'js-cookie';
import fire from '../../firebase';




const Navbar = (props) => {
  const {currentUser, getUid} = useContext(AuthContext);
  const [isMenuHidden, setMenuHidden] = useState(false);
  const [activeClass, setActiveClass] = useState('')

  const logout = () => {
    fire.auth().signOut();
    props.history.push('/');
    Cookies.remove('user');
  }

  const navbarHide = () => {
      if(!isMenuHidden){
        setActiveClass('is-active')
        setMenuHidden(true);
      }
      else{
        setActiveClass('')
        setMenuHidden(false)
      }
    } 

  return (
    <nav className="navbar is-fixed-top main" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to={!currentUser ? '/' : `/${getUid()}`} >  
            <img id="icon" src="https://img.icons8.com/color/50/000000/potters-wheel.png" alt="artisanship"/>
            <strong id="company-name" style={{color: "antiquewhite"}}>Artisanship</strong>
            
          </Link>
        </div>
        <div onClick={navbarHide} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div onClick={navbarHide} id="navbarBasicExample" className={`navbar-menu animated fadeIn ${activeClass}`}>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to={`/sell/${getUid()}`} style={{color: "black", cursor:"pointer"}}>
              Sell Here
            </Link>
          </div>
         <div className="navbar-item">
            <Link to="/products" style={{color: "black", cursor:"pointer"}}>
              Products
            </Link>
           </div>
          <div className="navbar-item">
            <Link to={`/your-product/${getUid()}`} style={{color: "black", cursor:"pointer"}}>
              Your Products
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link" style={{color: "black", cursor:"pointer"}}>
              More
            </div>

            <div className="navbar-dropdown">
              <hr className="navbar-divider"/>
              <div className="navbar-item" style={{color: "black", cursor:"pointer"}}>
                <a href="https://www.linkedin.com/in/bhavesh-suthar-b3538b16a/">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* {isCartClicked && browserWidth > 600 ?<ShoppingCart/>:null} */}
        <div className="navbar-end">
          {currentUser ? 
            (
              <div className="navbar-item">
                <div className="button is-primary">
                  <strong onClick={logout}>Log Out</strong>
                </div>
              </div>
            ):
            (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="signup">
                    <div className="button is-primary" style={{paddingRight:"50"}}>
                      <strong>Sign up</strong>
                    </div>
                  </Link>
                  <Link to="signin">
                    <div className="button is-light">
                      Log in
                    </div>
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
    </nav>
  );
}
 
export default withRouter(Navbar);