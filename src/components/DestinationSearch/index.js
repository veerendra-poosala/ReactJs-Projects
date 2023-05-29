import {Component} from 'react'
import Destination from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    const {destinationsList} = this.props
    // console.log(destinationsList)
    this.state = {
      updatedDestinationsList: destinationsList,
      searchInputValue: '',
    }
  }

  changeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {updatedDestinationsList} = this.state
    const {searchInputValue} = this.state
    // console.log(searchInputValue)
    const filteredList = updatedDestinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInputValue),
    )
    // console.log(filteredList)
    return (
      <div className="destination-items-bg-container">
        <div className="search-input-container">
          <input
            type="search"
            onChange={this.changeSearchInput}
            value={searchInputValue}
            className="search-input"
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
          />
        </div>
        <ul className="destination-items-lists-container">
          {filteredList.map(item => (
            <div className="destination-item" key={item.id}>
              <Destination item={item} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

// <Destination itemsList={destinationsList} />
