import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHided: true, isLastNameHided: true}

  toggleFirstNameContainer = async () => {
    const {isFirstNameHided} = this.state
    if (isFirstNameHided === true) {
      await this.setState({isFirstNameHided: false})
    } else {
      await this.setState({isFirstNameHided: true})
    }
  }

  toggleLastNameContainer = async () => {
    const {isLastNameHided} = this.state
    if (isLastNameHided === true) {
      await this.setState({isLastNameHided: false})
    } else {
      await this.setState({isLastNameHided: true})
    }
  }

  render() {
    const {isFirstNameHided, isLastNameHided} = this.state

    let firstNameContainer

    if (isFirstNameHided === false) {
      firstNameContainer = (
        <div className="name-container">
          <p>Joe</p>
        </div>
      )
    }

    let lastNameContainer

    if (isLastNameHided === false) {
      lastNameContainer = (
        <div className="name-container">
          <p>Jonas</p>
        </div>
      )
    }

    return (
      <div className="show-hide-bg-container">
        <div className="show-hide-content-bg-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="show-hide-content-container">
            <div>
              <button
                className="button"
                type="button"
                onClick={this.toggleFirstNameContainer}
              >
                Show/Hide Firstname
              </button>
            </div>

            <div>
              <button
                className="button"
                type="button"
                onClick={this.toggleLastNameContainer}
              >
                Show/Hide Lastname
              </button>
            </div>
          </div>
          <div className="show-hide-content-container">
            <div className="dummy-container">{firstNameContainer}</div>
            <div className="dummy-container">{lastNameContainer}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
