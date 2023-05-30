import './index.css'

const HistoryItem = props => {
  const {item, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item

  const deleteHistoryItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="history-time-container">
        <p className="history-time">{timeAccessed}</p>
      </div>
      <div className="history-logo-title-domain-url-container">
        <img alt="domain logo" className="history-logo" src={logoUrl} />
        <p className="history-title">{title}</p>
        <p className="history-domain-name">{domainUrl}</p>
      </div>
      <div className="history-delete-icon-container">
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={deleteHistoryItem}
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
