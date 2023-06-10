import './index.css'

const MoneyDetails = props => {
  const {src, moneyDetail, amount, backgroundColor, borderColor} = props
  const name = moneyDetail.charAt(0).toUpperCase() + moneyDetail.slice(1)
  const dataTestId = `${moneyDetail}Amount`
  return (
    <div
      className="money-details-item-container"
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      <img alt={moneyDetail} className="money-details-item-image" src={src} />
      <div className="text-card">
        <p className="balance-text">Your&nbsp; {name}</p>
        <p data-testid={dataTestId} className="balance-amount">
          RS&nbsp;{amount}
        </p>
      </div>
    </div>
  )
}

export default MoneyDetails
