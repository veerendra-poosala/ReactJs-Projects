import './index.css'

const TabItem = props => {
  const {tabItem, updateActivatedTabItem, activatedTabItem} = props
  const {displayText, tabId} = tabItem
  const selectTabItem = () => {
    updateActivatedTabItem(tabId)
  }
  const selectedTabStyle =
    tabItem.tabId === activatedTabItem.tabId
      ? `tab-item-button selected-tab-item`
      : `tab-item-button`
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={selectedTabStyle}
        onClick={selectTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
