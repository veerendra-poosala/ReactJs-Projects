import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    //  console.log(this.state)
    //  2)conditional rendering using variable
    let authButton
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Logout</button>
    }
    console.log(authButton)
    // 3)conditional rendering using ternary operator
    // 4)conditional rendering using and && operator
    // { isLoggedIn && <button type="button">Logout</button>}
    // { !isLoggedIn && <button type="button">Login</button>}
    // *using css display property is not preferable
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Logout</button>
          // use null if you don't want to represent anything
        )}
      </div>
    )
  }
}

export default App
