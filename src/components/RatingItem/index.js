import './index.css'

const RatingItem = props => {
  const {ratingItem, updateActiveRating, activeRating} = props
  const {ratingId} = ratingItem
  const applyRating = () => {
    updateActiveRating(ratingId)
  }
  // console.log('active rating', ratingId, activeRating.ratingId)
  const activeItemStyle =
    ratingId === activeRating.ratingId
      ? 'rating-text active-rating'
      : 'rating-text'

  return (
    <li className="rating-list-item-container">
      <button
        onClick={applyRating}
        type="button"
        className="filter-group-item-button rating-button"
      >
        <img
          alt={`rating ${ratingItem.ratingId}`}
          src={ratingItem.imageUrl}
          className="rating-image"
        />
        <p className={activeItemStyle}> &Up</p>
      </button>
    </li>
  )
}

export default RatingItem
