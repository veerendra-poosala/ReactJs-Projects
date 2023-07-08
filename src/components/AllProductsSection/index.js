import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    titleSearch: '',
    category: '',
    rating: '',
    showFailuredView: false,
  }

  componentDidMount() {
    this.getProducts()
  }

  setRating = id => {
    const selectedRatings = ratingsList.filter(rating => rating.ratingId === id)
    this.setState(
      {
        rating: selectedRatings[0].ratingId,
      },
      () => {
        this.getProducts()
      },
    )
    //   this.getProducts()
  }

  setCategory = id => {
    const selectedCategoryList = categoryOptions.filter(
      category => category.categoryId === id,
    )
    this.setState(
      {
        category: selectedCategoryList[0].categoryId,
      },
      () => {
        this.getProducts()
      },
    )
    // getProducts()
  }

  setTitleSearch = value => {
    this.setState({titleSearch: value}, () => {
      this.getProducts()
    })
    // this.getProducts()
  }

  resetFilters = () => {
    this.setState(
      {
        rating: '',
        category: '',
        titleSearch: '',
      },
      () => {
        this.getProducts()
      },
    )
  }

  getProducts = async () => {
    try {
      this.setState({
        isLoading: true,
      })
      const jwtToken = Cookies.get('jwt_token')

      // TODO: Update the code to get products with filters applied

      const {activeOptionId, rating, category, titleSearch} = this.state
      // console.log(titleSearch)
      const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${category}&title_search=${titleSearch}&rating=${rating}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData.products.map(product => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        this.setState({
          productsList: updatedData,
          isLoading: false,
          showFailuredView: false,
        })
      }
    } catch (e) {
      this.setState({showFailuredView: true, isLoading: false})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderFailureView = () => (
    <div className="all-products-container failure-view-container">
      <img
        className="failure-view-image"
        alt="products failure"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
      />
      <h1 style={{color: '#12022f', fontSize: '20px'}}>
        Oops! Something Went Wrong
      </h1>
      <p style={{color: '#64748b', fontSize: '16px'}}>
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    // TODO: Add No Products View
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        {productsList.length === 0 ? (
          <div className="products-list no-products-container">
            <img
              className="no-products-image"
              style={{width: '50%'}}
              alt="no products"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
            />
            <h1 style={{color: '#12022f'}}>No Products Found</h1>
            <p style={{color: ' #64748b'}}>
              We could not find any products. Try other filters
            </p>
          </div>
        ) : (
          <ul className="products-list">
            {productsList.map(product => (
              <ProductCard productData={product} key={product.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderProductsListWithLoader = () => {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderProductsList()}</>
  }

  // TODO: Add failure view

  render() {
    const {showFailuredView} = this.state

    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          setCategory={this.setCategory}
          setRating={this.setRating}
          setTitleSearch={this.setTitleSearch}
          resetFilters={this.resetFilters}
        />
        {showFailuredView === true
          ? this.renderFailureView()
          : this.renderProductsListWithLoader()}
      </div>
    )
  }
}

export default AllProductsSection
