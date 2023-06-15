import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {totalSeconds: 0, minutes: 0, seconds: 0}
  }

  startTimer = () => {
    const {totalSeconds} = this.state
    let time = totalSeconds > 0 ? totalSeconds : 0
    const tick = () => {
      this.timerId = setInterval(() => {
        time += 1
        const updatedMinutes = Math.floor(time / 60)
        const updatedSeconds = time % 60
        this.setState({
          totalSeconds: time,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        })
      }, 1000)
    }
    tick()
  }

  stopTimer = () => {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId)
    }
  }

  resetTimer = () => {
    if (this.timerId !== undefined) {
      clearInterval(this.timerId)
    }
    this.setState({
      totalSeconds: 0,
      minutes: 0,
      seconds: 0,
    })
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="stop-watch-bg-container">
        <div className="stop-watch-container">
          <h1>Stopwatch</h1>
          <div className="stop-watch-time-preview-container">
            <div className="timer-preview-header-container">
              <img
                className="stop-watch-logo"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <h1 className="preview-heading-timer">Timer</h1>
            </div>
            <div className="preview-time-container">
              <h1>
                {String(minutes).length === 1 ? `0${minutes}` : minutes}:
                {String(seconds).length === 1 ? `0${seconds}` : seconds}
              </h1>
            </div>
            <div className="buttons-container">
              <button
                type="button"
                className="button start"
                onClick={this.startTimer}
                data-testid="start"
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
