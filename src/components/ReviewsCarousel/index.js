import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    const {reviewsList} = this.props
    this.state = {reviewsList, reviewItem: reviewsList[0]}
  }

  nextReview = () => {
    const {reviewItem, reviewsList} = this.state
    const currentItemIndex = reviewsList.indexOf(reviewItem)

    if (currentItemIndex < reviewsList.length - 1) {
      this.setState({reviewItem: reviewsList[currentItemIndex + 1]})
    }
  }

  prevReview = () => {
    const {reviewItem, reviewsList} = this.state
    const currentItemIndex = reviewsList.indexOf(reviewItem)

    if (currentItemIndex > 0) {
      this.setState({reviewItem: reviewsList[currentItemIndex - 1]})
    }
  }

  render() {
    const {reviewItem} = this.state
    // console.log('reviews list: ', reviewsList, reviewItem)
    return (
      <div className="reviews-carousel-outer-bg-container">
        <div className="reviews-carousel-card">
          <div className="button-container">
            <button
              className="button"
              type="button"
              data-testid="leftArrow"
              onClick={this.prevReview}
            >
              <img
                alt="left arrow"
                className="button-image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
          </div>
          <div className="carousel-card-text-container">
            <h1 className="reviews-carousel-heading">Reviews</h1>
            <img
              className="review-user-image"
              alt={reviewItem.username}
              src={reviewItem.imgUrl}
            />
            <p className="review-user-name">{reviewItem.username}</p>
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              data-testid="rightArrow"
              onClick={this.nextReview}
            >
              <img
                alt="right arrow"
                className="button-image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
        <div className="user-details-card">
          <p className="review-user-company">{reviewItem.companyName}</p>
          <p className="review-description">{reviewItem.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
