import './index.css'

const ThumbnailItem = props => {
  const {imageObj, changeGalleryPreviewObj} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageObj
  const changeImage = () => {
    changeGalleryPreviewObj(id)
  }
  return (
    <li>
      <button className="button" type="button" onClick={changeImage}>
        <img
          className="thumbnail-image"
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
