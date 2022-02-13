import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to={"/"}>Back to shop&nbsp;<i className="fa-solid fa-chevron-right"></i></Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;