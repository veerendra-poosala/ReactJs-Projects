import {useState} from 'react'
import {GoSearch} from 'react-icons/go'
import RatingItem from '../RatingItem'
import CategoryItem from '../CategoryItem'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    setCategory,
    setRating,
    setTitleSearch,
    resetFilters,
  } = props
  // console.log(categoryOptions, ratingsList)
  const [searchValue, setSearchValue] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [activeRating, setActiveRating] = useState('')

  const updateSearchValue = event => {
    // console.log(event)
    // setTitleSearch(event.target.value)
    setSearchValue(event.target.value)
  }
  const sendSetTitleValue = event => {
    console.log('search value :', searchValue)
    if (event.code === 'Enter' && searchValue.trim() !== '') {
      // console.log('trigeer')
      // console.log('event', event.target.value)
      setTitleSearch(searchValue.trim())
    }
  }

  const updateActiveCategory = id => {
    const categoriesList = categoryOptions.filter(
      category => category.categoryId === id,
    )
    setActiveCategory(categoriesList[0])
    setCategory(id)
  }

  const updateActiveRating = id => {
    const selectedRatings = ratingsList.filter(rating => rating.ratingId === id)
    // console.log('update active rating', selectedRatings[0])
    setActiveRating(selectedRatings[0])
    setRating(id)
  }

  const applyReset = () => {
    resetFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="products-header search-element-container">
        <input
          onChange={updateSearchValue}
          value={searchValue}
          onKeyDown={sendSetTitleValue}
          type="search"
          className="search-element"
          placeholder="search"
        />
        <button type="button" className="search-button">
          <GoSearch />
        </button>
      </div>
      <div className="filter-groups-container">
        <h1 className="filter-group-heading">Category</h1>
        <ul className="category-options-list">
          {categoryOptions.map(categoryItem => (
            <CategoryItem
              key={categoryItem.categoryId}
              categoryItem={categoryItem}
              updateActiveCategory={updateActiveCategory}
              activeCategory={activeCategory}
            />
          ))}
        </ul>
        <h1 className="filter-group-heading">Rating</h1>
        <ul className="rating-options-list">
          {ratingsList.map(ratingItem => (
            <RatingItem
              key={ratingItem.ratingId}
              ratingItem={ratingItem}
              updateActiveRating={updateActiveRating}
              activeRating={activeRating}
            />
          ))}
        </ul>
        <div className="clear-filters-container">
          <button
            type="button"
            className="clear-filters-button"
            onClick={applyReset}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default FiltersGroup
