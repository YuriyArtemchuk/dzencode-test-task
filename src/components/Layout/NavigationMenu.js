import { NavLink } from "react-router-dom";
import "./NavigationMenu.scss";
import { useState } from "react";

const NavigationMenu = () => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  return (
    <>
      <aside className="sidebar">
        <div className="avatar-wrapper">
          <img src="/logo.jpg" alt="User avatar" className="avatar" />
          <div className="icon">
            <img src="/icon2.jpg" alt="User avatar" className="avatar" />
          </div>
        </div>

        <nav className="nav flex-column menu">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ORDERS
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default NavigationMenu;
