import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './navbarstyle.css'
import { logout } from '../slices/authSlice';
const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    // Dispatch the logout action to update the authentication status
    dispatch(logout());
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>ShopKart</h2>
      </Link>

      <Link to="/">
        <p>Home</p>
      </Link>
      {isAuthenticated && (

        <Link to="/cart">
          <div className="nav-bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
            <Link to="/">
              <button className="sign-out-button" onClick={handleSignOut} >Sign Out</button>
            </Link>
          </div>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
