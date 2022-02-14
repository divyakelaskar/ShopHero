import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="navbar">
        {/* title */}
        <div className="navbar__title">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>ShopHero</h2>
          </Link>
        </div>

        {/* links */}
        <ul className="navbar__links">
            <li>
                <Link to="/cart" className='cart__link'>
                <i className="fa-solid fa-cart-shopping"></i>
                  <span>Cart
                    <span className='cartlogo__badge'>{getCartCount()}</span>
                  </span>               
                </Link>
            </li>
        </ul>

        <div className='hamburger__menu' onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}

export default Navbar