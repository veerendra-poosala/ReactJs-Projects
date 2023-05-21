import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelarateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    } else {
      this.setState(prevState => ({
        speed: prevState.speed + 0,
      }))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    } else {
      this.setState(prevState => ({
        speed: prevState.speed + 0,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedo-meter-bg-container">
        <h1 className="speedo-meter-main-heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedo-meter-image"
        />
        <div className="speedo-meter-content-container">
          <h1 className="speedo-meter-heading">Speed is {speed}mph</h1>
          <p className="speedo-meter-description">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="button-container">
            <button
              type="button"
              className="button button-accelarate"
              onClick={this.accelarateSpeed}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button button-brake"
              onClick={this.decreaseSpeed}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
