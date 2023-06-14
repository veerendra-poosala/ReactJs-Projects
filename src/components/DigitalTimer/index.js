import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 25,
      seconds: 0,
      start: false,
      setTime: 25,
    }
  }

  startTimer = async () => {
    // const {start} = this.state
    await this.setState(prev => ({
      start: !prev.start,
    }))
    const {start} = this.state
    // console.log('button triggered', start)
    if (start === true) {
      const {minutes, seconds} = this.state
      let totalSeconds = minutes * 60 + seconds
      const tick = async () => {
        this.timeoutId = setInterval(() => {
          totalSeconds -= 1

          const updatedMinutes = Math.floor(totalSeconds / 60)
          const updatedSeconds = totalSeconds % 60
          this.setState({
            minutes: updatedMinutes,
            seconds: updatedSeconds,
            start: true,
          })
          if (totalSeconds <= 0) {
            const {setTime} = this.state
            this.setState({start: false, minutes: setTime, seconds: 0})

            // console.log('seconds is lessthan 0000')

            if (this.timeoutId !== undefined) {
              clearTimeout(this.timeoutId)
            }
          }
        }, 1000)
      }

      tick()

      // tick()
    } else {
      this.setState({start: false})

      // eslint-disable-next-line no-unused-expressions
      // this.timeoutId !== undefined &&
      clearTimeout(this.timeoutId)
    }
  }

  resetSetTime = () => {
    if (this.timeoutId !== undefined) {
      clearInterval(this.timeoutId)
    }
    this.setState({
      minutes: 25,
      seconds: 0,
      start: false,
      setTime: 25,
    })
  }

  increaseSetTime = () => {
    this.setState(prev => ({
      setTime: prev.setTime + 1,
      minutes: prev.minutes + 1,
    }))
  }

  decreaseSetTime = () => {
    this.setState(prev => ({
      setTime: prev.setTime > 0 ? prev.setTime - 1 : prev.setTime,
      minutes: prev.minutes > 0 ? prev.minutes - 1 : prev.minutes,
    }))
  }

  render() {
    const {minutes, seconds, start, setTime} = this.state
    const startPauseButtonImage = `${
      start === false
        ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    }`
    const startPauseButtonAlt = start === false ? 'play icon' : 'pause icon'

    const startPauseButtonName = `${start === false ? 'Start' : 'Pause'}`
    const timeStatus = start === true ? 'Running' : 'Paused'
    return (
      <div className="digital-timer-bg-container">
        <h1 className="digital-timer-main-heading">Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="digital-timer-preview-container">
            <div className="preview-time">
              <h1 className="time">
                {String(minutes).length === 1 ? `0${minutes}` : minutes}:
                {String(seconds).length === 1 ? `0${seconds}` : seconds}
              </h1>
              <p className="time-status">{timeStatus}</p>
            </div>
          </div>
          <div className="buttons-section-container">
            <div className="start-reset-button-container">
              <button
                className="start-pause-button start-pause-button-name"
                type="button"
                onClick={this.startTimer}
                id="startPauseButton"
              >
                <img
                  className="start-pause-icon"
                  alt={startPauseButtonAlt}
                  src={startPauseButtonImage}
                  htmlFor="startPauseButton"
                />
                {startPauseButtonName}
              </button>
              <button
                className="start-pause-button"
                type="button"
                onClick={this.resetSetTime}
              >
                <img
                  className="start-pause-icon"
                  alt="reset icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <p className="start-pause-button-name">Reset</p>
              </button>
            </div>
            <div className="set-timer-limit-container">
              <p className="set-time-limit-desc">Set Timer Limit</p>
              <div className="set-time-limit-button-container">
                <button
                  className="minus-button minus-plus-button"
                  type="button"
                  onClick={this.decreaseSetTime}
                  disabled={start}
                >
                  -
                </button>
                <p className="set-timer-preview-element">{setTime}</p>
                <button
                  className="minus-plus-button"
                  type="button"
                  onClick={this.increaseSetTime}
                  disabled={start}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
