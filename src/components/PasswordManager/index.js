import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordDetails from '../PasswordDetails/index'
import './index.css'

const passwordDetailsItemColors = [
  '#0b69ff',
  '#94a3b8',
  '#b6c3ca',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#0ea5e9',
  '#64748b',
]

class PasswordManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordsList: [],
      website: '',
      username: '',
      password: '',
      searchInput: '',
    }
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value.trim()})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value.trim()})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value.trim()})
  }

  addPasswordDetailsToList = () => {
    const {website, username, password} = this.state
    if (website.length > 0 && username.length > 0) {
      const color = Math.floor(Math.random() * passwordDetailsItemColors.length)

      const itemDetails = {
        id: uuidv4(),
        website,
        username,
        password,
        color: passwordDetailsItemColors[color],
        showPassword: true,
      }

      this.setState(prev => ({
        passwordsList: [...prev.passwordsList, itemDetails],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  updatePasswordsView = () => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.map(each => {
      const updatedItem = {
        website: each.website,
        id: each.id,
        username: each.username,
        password: each.password,
        color: each.color,
        showPassword: !each.showPassword,
      }
      return updatedItem
    })
    this.setState({
      passwordsList: [...updatedPasswordsList],
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.trim()})
  }

  deletePasswordDetailItem = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(item => id !== item.id)
    this.setState({passwordsList: [...filteredPasswordsList]})
  }

  formSubmit = event => {
    event.preventDefault()
  }

  render() {
    const {website, username, password, passwordsList, searchInput} = this.state

    const filteredPasswordsList = passwordsList.filter(eachItem => {
      if (
        eachItem.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        eachItem.website.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return eachItem
      }
      return false
    })

    return (
      <div className="password-manager-bg-container">
        <img
          className="app-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="password-manager-user-inputs-bg-container">
          <form className="user-inputs-container" onSubmit={this.formSubmit}>
            <h1 className="user-input-container-heading">Add New Password</h1>
            <div className="individual-input-container">
              <img
                className="individual-input-icon"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                className="input-element"
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="individual-input-container">
              <img
                className="individual-input-icon"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                className="input-element"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>

            <div className="individual-input-container">
              <img
                className="individual-input-icon"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                className="input-element"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-button-container">
              <button
                onClick={this.addPasswordDetailsToList}
                className="button"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>

          <div className="password-manager-background-image">
            <img
              alt="password manager"
              className="password-manager-img-for-sm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
            <img
              alt="password manager"
              className="password-manager-img-for-lg"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
        </div>
        <div className="bottom-passwords-preview-bg-container">
          <div className="show-passwords-list-header-container">
            <div className="passwords-count-bg-container">
              <h1 className="your-passwords-description">Your Passwords</h1>
              <div className="passwords-count-preview-container">
                <p>{passwordsList.length > 0 ? passwordsList.length : '0'}</p>
              </div>
            </div>
            <div className="individual-input-container search-container">
              <img
                className="individual-input-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="input-element"
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="show-passwords-check-box-container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.updatePasswordsView}
              id="checkbox"
            />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>

          {filteredPasswordsList.length <= 0 ? (
            <div className="no-passwords-bg-container">
              <img
                className="no-passwords-image"
                alt="no passwords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          ) : (
            <ul className="show-passwords-list-bg-container">
              {filteredPasswordsList.map(eachItem => (
                <PasswordDetails
                  key={eachItem.id}
                  passwordDetails={eachItem}
                  deletePasswordDetailItem={this.deletePasswordDetailItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
