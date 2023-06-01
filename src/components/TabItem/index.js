import './index.css'

const TabItem = props => {
  const {tabItem, selectedTabItem, updateSelectedTab} = props
  const {tabId, displayText} = tabItem
  const applySelectedItemStyle =
    selectedTabItem.tabId === tabId
      ? 'tab-item-button tab-item-selected'
      : 'tab-item-button'
  // console.log(applySelectedItemStyle)

  const chooseThisTab = () => {
    updateSelectedTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={applySelectedItemStyle}
        onClick={chooseThisTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
