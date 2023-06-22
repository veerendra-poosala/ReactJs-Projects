import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {showErrorMsg: false, errorMsg: '', username: '', password: ''}
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onClickLoginButton = () => {
    const {username, password} = this.state
    if (username.length === 0) {
      this.setState({errorMsg: 'Invalid Username', showErrorMsg: true})
    }

    if (password.length === 0) {
      this.setState({errorMsg: 'Invalid Password', showErrorMsg: true})
    }
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    if (username.length > 0 && password.length > 0) {
      const userDetails = {username, password}

      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        this.onSubmitSuccess()
      } else {
        //  console.log(response, data)
        this.onSubmitFailure(data.error_msg)
      }
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value.trim()})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value.trim()})
  }

  renderUsernameElement = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-element" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordElement = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-element" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input-element"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    return (
      <div className="login-form-bg-container">
        <div className="login-form-images-container">
          <img
            className="website-logo website-logo-lg"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="website-login-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>
        <div className="login-form-container">
          <form className="login-form" onClick={this.onSubmitLoginForm}>
            <div className="login-form-images-container">
              <img
                className="website-logo website-logo-sm form-logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              />
            </div>
            <div className="form-field-container">
              {this.renderUsernameElement()}
            </div>
            <div className="form-field-container">
              {this.renderPasswordElement()}
            </div>
            <div className="form-field-container">
              <button
                type="submit"
                className="submit-button"
                onClick={this.onClickLoginButton}
              >
                Login
              </button>
            </div>
            {showErrorMsg && (
              <div className="form-field-container">
                <p style={{color: 'red', fontSize: '16px', fontWeight: 500}}>
                  *{errorMsg}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
