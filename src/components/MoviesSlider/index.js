import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  console.log(props)
  const {moviesList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const {children} = props
  return (
    <div>
      <h1
        style={{
          color: '#fff',
          fontSize: '28px',
          fontWeight: '700',
          lineHeight: 1.5,
        }}
      >
        {children}
      </h1>
      <Slider {...settings}>
        {moviesList.map(movie => (
          <MovieItem key={movie.id} movieDetails={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
