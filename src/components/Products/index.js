import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header/index'
import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-bg-container">
        <img
          className="products-img"
          alt="products"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        />
      </div>
    </>
  )
}

export default Products
