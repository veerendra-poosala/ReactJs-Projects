import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    transactions: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onClickAddTransaction = () => {
    const {titleInput, amountInput, optionId} = this.state
    const transactionItem = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }
    this.setState(prev => ({
      transactions: [...prev.transactions, transactionItem],
    }))
    const amount = parseInt(amountInput)
    if (optionId === 'INCOME') {
      this.setState(prev => ({
        incomeAmount: prev.incomeAmount + amount,
        balanceAmount: prev.balanceAmount + amount,
        titleInput: '',
        amountInput: '',
        optionId: 'INCOME',
      }))
    } else {
      this.setState(prev => ({
        expensesAmount: prev.expensesAmount + amount,
        balanceAmount: prev.balanceAmount - amount,
        titleInput: '',
        amountInput: '',
        optionId: 'INCOME',
      }))
    }
  }

  deleteItem = id => {
    const {transactions} = this.state

    const transactionsItem = transactions.filter(item => item.id === id)
    // console.log(transactionsItem, id)
    const {amountInput, optionId} = transactionsItem[0]
    // console.log(amountInput, optionId)
    const filteredTransactions = transactions.filter(item => item.id !== id)

    const amount = parseInt(amountInput)
    if (optionId === 'INCOME') {
      this.setState(prev => ({
        incomeAmount: prev.incomeAmount - amount,
        balanceAmount: prev.balanceAmount - amount,
        transactions: [...filteredTransactions],
      }))
    } else {
      this.setState(prev => ({
        expensesAmount: prev.expensesAmount - amount,
        balanceAmount: prev.balanceAmount + amount,
        transactions: [...filteredTransactions],
      }))
    }
  }

  render() {
    const {
      balanceAmount,
      incomeAmount,
      expensesAmount,
      titleInput,
      amountInput,
      optionId,
      transactions,
    } = this.state
    // console.log(transactions)

    return (
      <div className="money-manager-bg-container">
        <div className="header-container">
          <h1 style={{color: '#475569', fontSize: '16px'}}>Hi, Richard</h1>
          <p style={{color: '#334155', fontSize: '14px', fontWeight: 400}}>
            Welcome back to your{' '}
            <span style={{color: '#0b69ff', fontSize: '14px', fontWeight: 700}}>
              Money Manager.
            </span>
          </p>
        </div>
        <div className="money-details-bg-container">
          <MoneyDetails
            key="1"
            moneyDetail="balance"
            amount={balanceAmount}
            backgroundColor="#ecfccb"
            borderColor="#84cc16"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <MoneyDetails
            key="2"
            moneyDetail="income"
            amount={incomeAmount}
            backgroundColor="#cffafe"
            borderColor="#06b6d4"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <MoneyDetails
            key="3"
            moneyDetail="expenses"
            amount={expensesAmount}
            backgroundColor="#ede9fe"
            borderColor="#7c3aed"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
        </div>
        <div className="money-manager-transaction-bg-container">
          <div className="transaction-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="add-transaction-form">
              <label className="label-element" htmlFor="title">
                TITLE
              </label>

              <input
                className="text-input-element"
                type="text"
                id="title"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
              <br />
              <label className="label-element" htmlFor="amount">
                AMOUNT
              </label>

              <input
                className="text-input-element"
                type="text"
                id="amount"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmount}
              />
              <br />
              <label className="label-element" htmlFor="select">
                TYPE
              </label>

              <select
                onChange={this.onChangeOption}
                className="text-input-element select-element"
                id="select"
                value={optionId}
              >
                {transactionTypeOptions.map(type => (
                  <option
                    className="label-element"
                    value={type.optionId}
                    key={type.optionId}
                  >
                    {type.displayText}
                  </option>
                ))}
              </select>

              <br />
              <button
                type="button"
                className="add-button"
                onClick={this.onClickAddTransaction}
                data-testid="add"
              >
                Add
              </button>
            </form>
          </div>
          <div className="transaction-container transaction-history-bg-container">
            <h1 className="transaction-heading">History</h1>
            <ul className="list-items-bg-container">
              <li className="list-item-head-container">
                <p className="list-item-label-element  ">Title</p>
                <p className="list-item-label-element  ">Amount</p>
                <p className="list-item-label-element  ">Type</p>
              </li>
              {transactions.map(item => (
                <TransactionItem
                  key={item.id}
                  item={item}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
