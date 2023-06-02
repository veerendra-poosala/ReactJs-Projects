import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: true, heads: 0, tails: 0, total: 0}

  flipCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log('toss result', tossResult)
    // const {isHeads, heads, tails, total} = this.state
    if (tossResult === 0) {
      this.setState(prev => ({
        heads: prev.heads + 1,
        total: prev.total + 1,
        isHeads: true,
        tails: prev.tails + 0,
      }))
    } else {
      this.setState(prev => ({
        heads: prev.heads + 0,
        total: prev.total + 1,
        isHeads: false,
        tails: prev.tails + 1,
      }))
    }
  }

  render() {
    const {isHeads, heads, tails, total} = this.state
    const HeadsImage = () => (
      <img
        className="coin-toss-image"
        alt="toss result"
        src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
      />
    )
    const TailsImage = () => (
      <img
        className="coin-toss-image"
        alt="toss result"
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
      />
    )
    return (
      <div className="coin-toss-bg-container">
        <div className="coin-toss-content-container">
          <h1 className="coin-toss-main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="image-container">
            {isHeads === true ? <HeadsImage /> : <TailsImage />}
          </div>
          <div className="button-container">
            <button
              type="button"
              className="toss-coin-button"
              onClick={this.flipCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="results-container">
            <p className="result-description">Total: {total}</p>
            <p className="result-description">Heads: {heads}</p>
            <p className="result-description">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
