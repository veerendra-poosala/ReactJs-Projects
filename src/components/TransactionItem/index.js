import './index.css'

const TransactionItem = props => {
  const {item, deleteItem} = props
  const {id, titleInput, amountInput, optionId} = item

  const onClickDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item-container">
      <p className="label">{titleInput}</p>
      <p className="label">RS.{amountInput}</p>
      <p className="label">{optionId}</p>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onClickDeleteItem}
      >
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
