import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)
  return (
    <>
      <nav className="nav-container">
        <div className="website-logo-container">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <button type="button" className="nav-logout-btn">
            <img
              className="nav-log-out-btn-img"
              alt="nav logout"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            />
          </button>
        </div>
        <ul className="header-options-bg-lg-container">
          <Link to="/" className="link-item-container">
            <li className="option-container">Home</li>
          </Link>
          <Link to="/options" className="link-item-container">
            <li className="option-container">Products</li>
          </Link>
          <Link to="/cart" className="link-item-container">
            <li className="option-container">Cart</li>
          </Link>
          <Link to="/login" className="link-item-container">
            <li className="option-container">
              <button className="button-login-logout" type="button">
                Logout
              </button>
            </li>
          </Link>
        </ul>
        <ul className="header-options-bg-sm-container">
          <Link to="/" className="link-item-container">
            <li className="option-container">
              <img
                className="nav-logo"
                alt="nav home"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              />
            </li>
          </Link>
          <Link to="/products" className="link-item-container">
            <li className="option-container">
              <img
                className="nav-logo"
                alt="nav products"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              />
            </li>
          </Link>
          <Link to="/cart" className="link-item-container">
            <li className="option-container">
              <img
                className="nav-logo"
                alt="nav cart"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
export default Header
