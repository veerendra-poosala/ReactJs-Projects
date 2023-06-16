import './index.css'

const PasswordDetails = props => {
  const {passwordDetails, deletePasswordDetailItem} = props
  const {id, website, username, password, showPassword, color} = passwordDetails
  // console.log(website)

  const removePasswordDetail = () => {
    deletePasswordDetailItem(id)
  }

  return (
    <li className="password-details-bg-container">
      <div className="user-logo" style={{backgroundColor: color}}>
        <h1>{username.slice(0, 1)}</h1>
      </div>
      <div className="text-card">
        <p>{website}</p>
        <p>{username}</p>
        {showPassword === false ? (
          <p>{password}</p>
        ) : (
          <img
            className="password-mask-image"
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
          />
        )}
      </div>
      <div className="delete-button-container">
        <button
          type="button"
          className="delete-button"
          onClick={removePasswordDetail}
          data-testid="delete"
        >
          <img
            alt="delete"
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordDetails
