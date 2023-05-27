import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    // const options = {timeZone: 'Asia/Kolkata'}
    this.state = {
      date: new Date(),
    }
  }

  // ending of the first phase of Components life cycle
  componentDidMount() {
    // console.log('component mounted')
    this.timerId = setInterval(this.tick, 1000)
  }

  // last phase of Component life cycle
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  // middle phase of Component life cycle
  render() {
    const {date} = this.state
    // console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock
