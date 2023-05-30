import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    const {suggestionsList} = this.props
    // console.log(suggestionsList)
    this.state = {suggestionsList, searchInput: ''}
  }

  searchItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  searchByChar = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    // console.log('search input', searchInput)
    const filteredSuggestionsList = suggestionsList.filter(sug =>
      sug.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(suggestionsList)
    return (
      <div className="google-suggestions-bg-container">
        <div className="logo-section-container">
          <img
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
          />
        </div>
        <div className="search-section-container">
          <div className="search-item-bg-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              className="search-input-element"
              onChange={this.searchByChar}
              value={searchInput}
            />
          </div>
          <div className="items-bg-container">
            <ul className="items-container">
              {filteredSuggestionsList.map(item => (
                <SuggestionItem
                  item={item}
                  key={item.id}
                  searchItem={this.searchItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
