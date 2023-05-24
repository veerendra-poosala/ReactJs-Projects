import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increaseTheCount = () => {
    const num = Math.floor(Math.random() * 101)
    this.setState(prev => ({count: prev.count + num}))
  }

  render() {
    const {count} = this.state

    let evenOddElement
    if (count % 2 === 0) {
      evenOddElement = <p className="even-odd-paragraph">Count is Even</p>
    } else {
      evenOddElement = <p className="even-odd-paragraph">Count is Odd</p>
    }

    return (
      <div className="even-odd-app-outer-bg-container">
        <div className="even-odd-app-content-container">
          <h1 className="heading-count">Count {count}</h1>
          <div className="button-container">
            {evenOddElement}
            <button
              className="button"
              type="button"
              onClick={this.increaseTheCount}
            >
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
