import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: true}

  showClockButtonFunc = () => {
    this.setState({showClock: true})
  }

  hideClockButtonFunc = () => {
    this.setState({showClock: false})
  }

  toggleButton = () => {
    // console.log('button cliked')
    this.setState(prevState => {
      const {showClock} = prevState
      // console.log(prevState)
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    // console.log(showClock)

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.toggleButton}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
