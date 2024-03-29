import React, { useContext} from "react";
import './styles.css'
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const Header = ({ onHandlerCart, user}) => {
    const { cart } = useContext(CartContext);
    return (
        <div className="header-menu">
            <div className="header-menu-logo">
            <Link to='/' className='link-logo'><h3 className="header-logo">SoccerUy</h3></Link>
                
            </div>
            <div className="header-menu-cart">
                <div className="header-menu-avatar-container">
                    <img className="header-menu-avatar" src={user?.avatar} alt={user?.name} />
                </div>
                <div onClick={onHandlerCart}>
                <img className="header-menu-cart-image"  src="https://cdn-icons-png.flaticon.com/512/834/834781.png" alt="cart"/>
                <div className="header-menu-cart-number-container">
                    <span className="header-menu-cart-number">{cart.length}</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;