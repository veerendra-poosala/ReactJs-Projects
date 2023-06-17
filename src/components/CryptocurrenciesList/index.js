import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

const CryptocurrenciesList = props => {
  const {currenciesList} = props
  return (
    <ul className="crypto-currency-list-bg-container">
      <li className="header-item list-item">
        <div className="coin-type">
          <h1 className="tab-header">Coin Type</h1>
        </div>
        <div className="usd">
          <h1 className="tab-header">USD</h1>
          <h1 className="tab-header">EURO</h1>
        </div>
      </li>
      {currenciesList.map(cryptoCurrencyItem => (
        <CryptocurrencyItem
          key={cryptoCurrencyItem.id}
          cryptoCurrencyItem={cryptoCurrencyItem}
        />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
