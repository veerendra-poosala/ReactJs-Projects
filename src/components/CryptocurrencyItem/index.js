import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCurrencyItem

  return (
    <li className="header-item list-item">
      <div className="coin-type">
        <img className="currency-logo" alt={currencyName} src={currencyLogo} />
        <p>{currencyName}</p>
      </div>
      <div className="usd">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
