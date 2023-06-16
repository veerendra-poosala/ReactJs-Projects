import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, checkIsThumbnailMatchedWithPreviewImage} = props
  const {thumbnailUrl, id} = thumbnailItem

  const matchWithPreviewItem = () => {
    checkIsThumbnailMatchedWithPreviewImage(id)
  }

  return (
    <li className="thumbnail-bg-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={matchWithPreviewItem}
      >
        <img alt="thumbnail" src={thumbnailUrl} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
