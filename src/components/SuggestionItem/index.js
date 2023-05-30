import './index.css'

const SuggestionItem = props => {
  const {item, searchItem} = props
  const {suggestion} = item

  const performDeletion = () => {
    searchItem(suggestion)
  }

  return (
    <li className="suggestion-item-bg-container">
      <p className="suggestion-description">{item.suggestion}</p>
      <button type="button" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
          onClick={performDeletion}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
