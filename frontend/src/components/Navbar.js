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
                
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar