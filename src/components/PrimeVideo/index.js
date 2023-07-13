import {Component} from 'react'
import MovieSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    const {moviesList} = props

    this.state = {
      moviesList,
    }
  }

  render() {
    const {moviesList} = this.state
    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )
    console.log(actionMoviesList, comedyMoviesList)
    return (
      <div className="prime-video-bg-container">
        <div className="banner-container">
          <img
            className="banner-image"
            alt="prime video"
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          />
        </div>

        <div className="slider-container">
          <MovieSlider moviesList={actionMoviesList}>Action Movies</MovieSlider>
        </div>
        <div className="slider-container">
          <MovieSlider moviesList={comedyMoviesList}>Comedy Movies</MovieSlider>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
