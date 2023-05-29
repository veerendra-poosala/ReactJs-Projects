import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    // const {denominationsList} = this.props
    this.state = {denominationsList: this.props, value: 2000}
  }

  subtract = amount => {
    const {value} = this.state
    if (value > 0) {
      this.setState(prev => ({
        value: prev.value - amount,
      }))
    }
  }

  render() {
    const {denominationsList, value} = this.state
    const list = denominationsList.denominationsList
    return (
      <div className="denomination-app">
        <div className="denomination-app-outer-container">
          <div className="username-container">
            <div className="user-logo">S</div>
            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-description">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees-value">{value}</p>
              <p className="rupees-description">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-name-heading">Withdraw</p>
            <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-items">
              {list.map(item => (
                <DenominationItem
                  item={item}
                  key={item.id}
                  performSubtract={this.subtract}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
