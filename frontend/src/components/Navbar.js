import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
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
                <i class="fa-solid fa-cart-shopping"></i>
                  <span>Cart
                    <span className='cartlogo__badge'>0</span>
                  </span>               
                </Link>
            </li>
        </ul>

        <div className='hamburger__menu'>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}

export default Navbar