import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  // className="movie-item-bg-container"
  const controls = true
  return (
    <Popup
      modal
      trigger={
        <img className="thumbnail-image" alt="thumbnail" src={thumbnailUrl} />
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="25" color="#616e7c" />
          </button>

          <ReactPlayer url={videoUrl} controls={controls} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
