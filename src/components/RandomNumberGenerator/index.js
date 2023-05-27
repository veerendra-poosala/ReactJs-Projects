import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {number: '0'}
  }

  generateRandomNumber = () => {
    const randomNUm = Math.floor(Math.random() * 100)
    this.setState({number: randomNUm})
  }

  render() {
    // console.log('render mounted')
    const {number} = this.state
    return (
      <div className="random-number-outer-bg-container">
        <div className="random-number-bg-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="result">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
