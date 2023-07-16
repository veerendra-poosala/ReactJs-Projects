import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'
import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    // console.log('on toggle done!!!!!!')
    this.setState(prev => ({
      showContent: !prev.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({
      showLeftNavbar: !prev.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({
      showRightNavbar: !prev.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log('show content', showContent, showLeftNavbar, showRightNavbar)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
