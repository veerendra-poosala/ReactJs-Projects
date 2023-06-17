import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
// import '../../../node_modules/react-loader-spinner/dist/loader/TailSpin'
import './index.css'

class CryptocurrencyTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {isSpinnerLoading: true, currenciesList: []}
  }

  componentDidMount() {
    this.getCurrenciewList()
  }

  getCurrenciewList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      isSpinnerLoading: false,
      currenciesList: [...formattedData],
    })
  }

  render() {
    const {isSpinnerLoading, currenciesList} = this.state

    return (
      <div className="crypto-currency-tracker-bg-container">
        <div className="heading-container">
          <h1>Cryptocurrency Tracker</h1>
          <img
            className="cryptocurrency"
            alt="cryptocurrency"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          />
        </div>
        {isSpinnerLoading === true ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-currency-list-item-bg-card">
            <CryptocurrenciesList currenciesList={currenciesList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
