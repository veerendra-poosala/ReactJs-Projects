import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeToDarkMode = async () => {
    await this.setState({isDarkMode: true})
  }

  changeToLightMode = async () => {
    await this.setState({isDarkMode: false})
  }

  render() {
    const {isDarkMode} = this.state
    let container

    if (isDarkMode) {
      container = (
        <div className="content-container dark-container">
          <h1 className="light-heading">Click To Change Mode</h1>
          <button
            className="button light-button"
            type="button"
            onClick={this.changeToLightMode}
          >
            Light Mode
          </button>
        </div>
      )
    } else {
      container = (
        <div className="content-container light-container">
          <h1 className="dark-heading">Click To Change Mode</h1>
          <button
            className="button dark-button"
            type="button"
            onClick={this.changeToDarkMode}
          >
            Dark Mode
          </button>
        </div>
      )
    }
    return <div className="bg-container">{container}</div>
  }
}

export default LightDarkMode
