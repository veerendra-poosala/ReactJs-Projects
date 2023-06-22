import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      errorMsg: 'Required',
      showFirstnameErr: false,
      showLastnameErr: false,
      showSubmittedSuccessfully: false,
    }
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onBlurFirstname = event => {
    if (event.target.value.trim() === '') {
      this.setState({showFirstnameErr: true})
    } else {
      this.setState({showFirstnameErr: false})
    }
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurLastname = event => {
    if (event.target.value.trim() === '') {
      this.setState({showLastnameErr: true})
    } else {
      this.setState({showLastnameErr: false})
    }
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname.trim().length === 0 && lastname.trim().length === 0) {
      // console.log(firstname, lastname)
      this.setState({showFirstnameErr: true, showLastnameErr: true})
    } else if (firstname.trim().length > 0 && lastname.trim().length <= 0) {
      // console.log(lastname)
      this.setState({showLastnameErr: true})
    } else if (firstname.trim().length <= 0 && lastname.trim().length > 0) {
      // console.log(firstname)
      this.setState({showFirstnameErr: true})
    } else {
      this.setState({showSubmittedSuccessfully: true})
    }
  }

  onClickSubmitAgainButton = () => {
    this.setState({
      showSubmittedSuccessfully: false,
      firstname: '',
      lastname: '',
      showFirstnameErr: '',
      showLastnameErr: '',
    })
  }

  renderFirstname = () => {
    const {errorMsg, showFirstnameErr, firstname} = this.state
    const inputElementStyle =
      showFirstnameErr === true
        ? 'input-element-when-error input-element'
        : 'input-element'
    return (
      <>
        <label className="label-element" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          id="firstname"
          type="text"
          className={inputElementStyle}
          placeholder="First name"
          value={firstname}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstname}
        />
        {showFirstnameErr && <p className="error-msg">{errorMsg}</p>}
      </>
    )
  }

  renderLastname = () => {
    const {errorMsg, showLastnameErr, lastname} = this.state
    const inputElementStyle =
      showLastnameErr === true
        ? 'input-element-when-error input-element'
        : 'input-element'
    return (
      <>
        <label className="label-element" htmlFor="lastname">
          Last NAME
        </label>
        <input
          id="lastname"
          type="text"
          className={inputElementStyle}
          placeholder="First name"
          value={lastname}
          onChange={this.onChangeLastname}
          onBlur={this.onBlurLastname}
        />
        {showLastnameErr && <p className="error-msg">{errorMsg}</p>}
      </>
    )
  }

  renderSubmitSuccess = () => (
    <div className="reg-form">
      <div className="success-container">
        <img
          className="success-img"
          alt="success"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p>Submitted Successfully</p>
      </div>
      <div className="form-field-container">
        <button
          type="button"
          className="submit-button submit-again-button"
          onClick={this.onClickSubmitAgainButton}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {showSubmittedSuccessfully} = this.state
    return (
      <div className="reg-form-bg-container">
        <h1 className="main-heading">Registration</h1>

        {showSubmittedSuccessfully === true ? (
          this.renderSubmitSuccess()
        ) : (
          <form className="reg-form" onSubmit={this.onSubmittingForm}>
            <div className="form-field-container">{this.renderFirstname()}</div>
            <div className="form-field-container">{this.renderLastname()}</div>
            <div className="form-field-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
