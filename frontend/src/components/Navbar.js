import './Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* title */}
        <div className="navbar__title">
            <h2>ShopHero</h2>
        </div>

        {/* links */}
        <ul className="navbar__links">
            <li>
                <Link to="/cart">
                  <i className='fas fa shopping-cart'></i>
                  Cart
                  <span className='cartlogo__badge'>0</span>                
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