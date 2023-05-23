import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    this.setState({isSubscribed: true})
  }

  unSubscribe = () => {
    this.setState({isSubscribed: false})
  }

  checkSubscription = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      return (
        <button className="button" type="button" onClick={this.unSubscribe}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.subscribe}>
        Subscribe
      </button>
    )
  }

  render() {
    // const {isSubscribed} = this.state
    return (
      <div className="welcome-app-bg-container">
        <h1 className="welcome-app-heading">Welcome</h1>
        <p>Thankyou! HappyLearning</p>
        {this.checkSubscription()}
      </div>
    )
  }
}

export default Welcome
