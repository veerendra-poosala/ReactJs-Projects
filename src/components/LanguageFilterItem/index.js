import './index.css'

const LanguageFilterItem = props => {
  const {languageItem, activeLanguage, setActiveLanguage} = props
  const {id} = languageItem

  const activateButton = () => {
    setActiveLanguage(id)
  }

  const activeButtonStyle =
    activeLanguage.id === languageItem.id
      ? 'active-button language-button'
      : 'language-button'

  return (
    <li className="language-filter-item-container">
      <button
        type="button"
        className={activeButtonStyle}
        onClick={activateButton}
      >
        {languageItem.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
