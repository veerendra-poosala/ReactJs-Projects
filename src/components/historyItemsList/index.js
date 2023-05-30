import {Component} from 'react'
import HistoryItem from '../historyItem/index'
import './index.css'

class HistoryItemsList extends Component {
  constructor(props) {
    super(props)
    const {historyItemsList} = this.props
    this.state = {historyItemsList, searchInputValue: ''}
  }

  deleteItem = id => {
    const {historyItemsList} = this.state
    const filterHistoryItemsList = historyItemsList.filter(
      item => item.id !== id,
    )
    this.setState({historyItemsList: filterHistoryItemsList})
  }

  updateSearchInputValue = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {historyItemsList, searchInputValue} = this.state

    const filteredHistoryList = historyItemsList.filter(item =>
      item.title.toLowerCase().includes(searchInputValue.toLowerCase()),
    )
    console.log(filteredHistoryList.length, searchInputValue)
    const {length} = filteredHistoryList

    const NoHistoryContainer = (
      <div className="no-history-container">
        <p className="no-history-description">There is no history to show</p>
      </div>
    )
    return (
      <div className="app-bg-container">
        <div className="header-bg-container">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-icon-element-container">
            <img
              className="search-icon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              value={searchInputValue}
              onChange={this.updateSearchInputValue}
              className="search-input-element"
              type="search"
              placeholder="Search History"
            />
          </div>
        </div>
        <div className="content-section-bg-container">
          {length === 0 ? (
            NoHistoryContainer
          ) : (
            <ul className="history-list-items-container">
              {filteredHistoryList.map(item => (
                <HistoryItem
                  item={item}
                  key={item.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistoryItemsList
