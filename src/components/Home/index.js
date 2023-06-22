import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-bg-container">
          <div className="home-text-card">
            <h1 className="home-clothes-heading">
              Clothes That Get YOU Noticed
            </h1>
            <p className="home-clothes-style-desc">
              Fashion is part of the daily air and does not quite help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heard that way you are. So, celebrate the seasons new and exciting
              fashion in your own away.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <div className="home-images-card">
            <h1 className="home-clothes-heading home-heading-sm">
              Clothes That Get YOU Noticed
            </h1>
            <img
              className="home-image"
              alt="clothes that get you noticed"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home
