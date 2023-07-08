import './index.css'

const CategoryItem = props => {
  const {categoryItem, updateActiveCategory, activeCategory} = props
  const {categoryId} = categoryItem

  const applyCategory = () => {
    updateActiveCategory(categoryId)
  }
  const activeItemStyle =
    categoryId === activeCategory.categoryId
      ? 'filter-group-item active-category'
      : 'filter-group-item'

  return (
    <li className="category-item">
      <button
        onClick={applyCategory}
        type="button"
        className="filter-group-item-button"
      >
        <p className={activeItemStyle}>{categoryItem.name}</p>
      </button>
    </li>
  )
}

export default CategoryItem
