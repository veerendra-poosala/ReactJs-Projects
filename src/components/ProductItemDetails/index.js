import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'

// import {FaMinus, FaPlus} from 'react-icons/fa6'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import Header from '../Header'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      productDetails: {},
      apiStatus: apiStatusConstants.initial,
      itemsCount: 1,
      redirectUrlId: '',
    }
  }

  componentDidMount() {
    this.getProductItemDetails()
    window.scrollTo({top: 0})
  }

  increaseItemsCount = () => {
    this.setState(prev => ({
      itemsCount: prev.itemsCount + 1,
    }))
  }

  decreaseItemsCount = () => {
    this.setState(prev => ({
      itemsCount: prev.itemsCount > 1 ? prev.itemsCount - 1 : 1,
    }))
  }

  continueShopping = () => {
    const {history} = this.props
    return history.push('/products')
  }

  handleRedirect = productId => {
    this.setState(
      {
        redirectUrlId: productId,
      },
      () => {
        const {history} = this.props
        const {redirectUrlId} = this.state
        // console.log(history)
        history?.replace(`/products/${redirectUrlId}`)
      },
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderProductItemDetailsFailureView = () => (
    <div className="product-details-failure-view-container">
      <img
        style={{width: '50%'}}
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
      />
      <h1 style={{color: '#12022f', fontSize: '28px'}}>Product Not Found</h1>
      <button
        className="add-to-cart-button"
        style={{width: '30%'}}
        type="button"
        onClick={this.continueShopping}
      >
        Continue Shopping
      </button>
    </div>
  )

  getProductItemDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    this.setState({isLoading: true})

    try {
      const url = `https://apis.ccbp.in/products/${id}`
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      this.setState({
        apiStatus: apiStatusConstants.inProgress,
        isLoading: true,
      })

      const response = await fetch(url, options)

      if (response.ok) {
        const item = await response.json()
        const modifiedFetchedData = {
          id: item.id,
          availability: item.availability,
          brand: item.brand,
          description: item.description,
          imageUrl: item.image_url,
          price: item.price,
          rating: item.rating,
          similarProducts: item.similar_products,
          style: item.style,
          title: item.title,
          totalReviews: item.total_reviews,
        }
        // console.log(modifiedFetchedData)

        this.setState({
          productDetails: {...modifiedFetchedData},
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 404) {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
        console.log('Error:', response.status)
      }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      this.setState({isLoading: false})
    }
  }

  renderProductItemDetails = () => {
    const {productDetails, itemsCount} = this.state
    const {
      imageUrl,
      title,
      price,
      rating,
      totalReviews,
      description,
      availability,
      brand,
      similarProducts,
    } = productDetails

    return (
      <div className="product-item-details-bg-container">
        <div className="product-item-details-container">
          <div className="product-detail-image-container">
            <img
              className="product-detail-image"
              alt="product"
              src={imageUrl}
            />
          </div>
          <div className="product-details-text-card">
            <h1 className="product-title">{title}</h1>
            <p className="product-price">RS {price}/- </p>
            <div className="product-rating-container">
              <div className="rating">
                <p className="rating-number">{rating}</p>
                <img
                  className="rating-icon"
                  alt="star"
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                />
              </div>

              <p className="total-reviews-text">{totalReviews} Reviews</p>
            </div>
            <p className="description-text">{description}</p>
            <p className="availability">
              Available:{' '}
              <span className="description-text">{availability}</span>
            </p>
            <p className="availability">
              Brand: <span className="description-text">{brand}</span>
            </p>
            <hr className="horizontal-rule" />

            <div className="add-to-cart-container">
              <div className="add-to-cart-inc-dec-buttons-container">
                <button
                  type="button"
                  onClick={this.decreaseItemsCount}
                  className="increase-decrease-button"
                  data-testid="minus"
                >
                  <BsDashSquare style={{fontSize: '35px'}} />
                </button>
                <p className="items-count">{itemsCount}</p>
                <button
                  type="button"
                  className="increase-decrease-button"
                  onClick={this.increaseItemsCount}
                  data-testid="plus"
                >
                  <BsPlusSquare style={{fontSize: '35px'}} />
                </button>
              </div>
              <button className="add-to-cart-button" type="button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="similar-products-bg-container">
          <h1 className="product-title" style={{color: '#1e293b'}}>
            Similar Products
          </h1>
          <ul className="similar-products-list-container">
            {similarProducts.map(product => (
              <li
                className="similar-prodcut-item-container"
                key={product.id}
                onClick={() => this.handleRedirect(product.id)}
              >
                <img
                  style={{width: '100%', borderRadius: '8px'}}
                  alt={`similar product ${product.title}`}
                  src={product.image_url}
                />
                <h1 className="similar-product-title">{product.title}</h1>
                <p className="similar-product-brand">by {product.brand}</p>
                <div className="price-and-rating-container">
                  <p className="similar-product-price">Rs {product.price}/-</p>
                  <div className="rating">
                    <p className="rating-number">{product.rating}</p>
                    <img
                      className="rating-icon"
                      alt="star"
                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {apiStatus, isLoading} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <div className="product-sections">
            <Header />
            {isLoading === true
              ? this.renderLoadingView()
              : this.renderProductItemDetails()}
          </div>
        )

      case apiStatusConstants.failure:
        return (
          <div className="product-sections">
            <Header />
            {isLoading === true
              ? this.renderLoadingView()
              : this.renderProductItemDetailsFailureView()}
          </div>
        )

      case apiStatusConstants.inProgress:
        return (
          <div className="product-sections">
            <Header />

            {this.renderLoadingView()}
          </div>
        )

      default:
        return null
    }
  }
}

export default ProductItemDetails
