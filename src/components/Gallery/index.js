import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem/index'
import './index.css'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.imagesList = [
      {
        id: 0,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
        imageAltText: 'nature mountain with pond',
        thumbnailAltText: 'nature mountain with pond thumbnail',
      },
      {
        id: 1,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
        imageAltText: 'nature sunset',
        thumbnailAltText: 'nature sunset thumbnail',
      },
      {
        id: 2,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
        imageAltText: 'nature mountain with ocean',
        thumbnailAltText: 'nature mountain with ocean thumbnail',
      },
      {
        id: 3,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
        imageAltText: 'nature mountain with forest',
        thumbnailAltText: 'nature mountain with forest thumbnail',
      },
      {
        id: 4,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
        imageAltText: 'nature leaves',
        thumbnailAltText: 'nature leaves thumbnail',
      },
      {
        id: 5,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
        imageAltText: 'nature tree',
        thumbnailAltText: 'nature tree thumbnail',
      },
      {
        id: 6,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
        imageAltText: 'nature waterfall',
        thumbnailAltText: 'nature waterfall thumbnail',
      },
      {
        id: 7,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
        thumbnailUrl:
          'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
        imageAltText: 'nature river',
        thumbnailAltText: 'nature river thumbnail',
      },
    ]
    this.state = {galleryPreviewObj: this.imagesList[0]}
  }

  changeGalleryPreviewObj = id => {
    const updatedGalleryObj = this.imagesList.find(obj => obj.id === id)
    this.setState({galleryPreviewObj: updatedGalleryObj})
  }

  render() {
    // console.log(this.imagesList)
    const {galleryPreviewObj} = this.state
    return (
      <div className="gallery-bg-container">
        <div className="gallery-preview-container">
          <img
            className="gallery-image"
            alt={galleryPreviewObj.imageAltText}
            src={galleryPreviewObj.imageUrl}
          />
          <h1 className="gallery-content-heading">Nature Photography</h1>
        </div>
        <div className="gallery-thumbnail-container">
          <p className="gallery-user-description">
            Nature Photography by Rahul
          </p>
          <ul className="thumbnails-container">
            {this.imagesList.map(obj => (
              <ThumbnailItem
                key={obj.id}
                imageObj={obj}
                changeGalleryPreviewObj={this.changeGalleryPreviewObj}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
