import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link className="link-style" to="/">
      <div className="logo-container">
        <img
          className="project-logo"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <p className="menu-item-name">Wave</p>
      </div>
    </Link>
    <ul className="menu-list-container">
      <Link className="link-style" to="/">
        <li className="menu-item-name">Home</li>
      </Link>
      <Link className="link-style" to="/about">
        <li className="menu-item-name">About</li>
      </Link>
      <Link className="link-style" to="/contact">
        <li className="menu-item-name">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
