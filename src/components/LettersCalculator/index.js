import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  searchInputValue = event => {
    this.setState({inputValue: event.target.value.trim()})
    // this.setState({count: event.target.value.length})
  }

  render() {
    const {inputValue} = this.state
    // this.setState({count: inputValue.length})

    return (
      <div className="calculator-outer-container">
        <div className="calculator-content-bg-container">
          <div className="content-container">
            <h1 className="content-heading">Calculate The Letters you enter</h1>
            <div className="calculator-text-container">
              <div className="calculator-input-bg-container">
                <label className="input-element-description">
                  Enter the phrase
                  <input
                    className="input-element"
                    type="search"
                    placeholder="Enter the phrase"
                    value={inputValue}
                    onChange={this.searchInputValue}
                  />
                </label>
              </div>
              <div className="letters-counter-display-container">
                <p className="letters-counter">
                  No.of letters: {inputValue.length}
                </p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              className="image"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
