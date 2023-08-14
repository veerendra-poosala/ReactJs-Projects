import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'
import SlideTab from '../SlideTab'

class Home extends Component {
  constructor(props) {
    super(props)
    const {slidesList} = this.props
    const {heading, description} = slidesList[0]

    this.state = {
      slidesList,
      heading,
      description,
      activeTabId: slidesList[0].id,
      isClickedOnHeading: false,
      isClickedOnDescription: false,
    }
  }

  toggleHeadingClickedStatus = () => {
    this.setState(prev => ({
      isClickedOnHeading: !prev.isClickedOnHeading,
    }))
  }

  toggleDescriptionClickedStatus = () => {
    this.setState(prev => ({
      isClickedOnDescription: !prev.isClickedOnDescription,
    }))
  }

  onChangeHeading = e => {
    const {slidesList, activeTabId} = this.state

    const updatedSlidesList = slidesList.map(slide => {
      if (activeTabId === slide.id) {
        return {
          id: slide.id,
          heading: e.target.value,
          description: slide.description,
        }
      }
      return slide
    })

    this.setState({heading: e.target.value, slidesList: [...updatedSlidesList]})
  }

  onChangeDescription = e => {
    const {slidesList, activeTabId} = this.state

    const updatedSlidesList = slidesList.map(slide => {
      if (activeTabId === slide.id) {
        return {
          id: slide.id,
          heading: slide.heading,
          description: e.target.value,
        }
      }
      return slide
    })

    this.setState({
      description: e.target.value,
      slidesList: [...updatedSlidesList],
    })
  }

  setActiveTabId = id => {
    const {slidesList} = this.state
    const activeObjectsList = slidesList.filter(slide => slide.id === id)
    const activeObject = activeObjectsList[0]
    const {heading, description} = activeObject
    this.setState({activeTabId: id, heading, description})
  }

  addSlide = () => {
    const id = uuid()
    const heading = 'Heading'
    const description = 'Description'
    const newSlide = {
      id,
      heading,
      description,
    }
    const {activeTabId, slidesList} = this.state
    const activeTabIdIndex = slidesList.findIndex(eachItem => {
      if (eachItem.id === activeTabId) {
        return true
      }
      return false
    })
    // console.log(slidesList, activeTabIdIndex)

    const updatedSlidesList = [
      ...slidesList.slice(0, activeTabIdIndex + 1),
      newSlide,
      ...slidesList.slice(activeTabIdIndex + 1),
    ]

    // console.log('updated', updatedSlidesList)

    this.setState({
      slidesList: updatedSlidesList,
    })

    // this.setState({slidesList: [...updatedSlidesList]})
  }

  render() {
    const {
      slidesList,
      activeTabId,
      heading,
      description,
      isClickedOnHeading,
      isClickedOnDescription,
    } = this.state
    // console.log(slidesList, activeTabId)
    return (
      <div className="home-bg-container">
        <div className="home-header">
          <img
            alt="nxt slides logo"
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          />
          <h1 className="main-heading">Nxt Slides</h1>
        </div>
        <div className="create-new-button-container">
          <button
            className="create-new-button"
            type="button"
            onClick={this.addSlide}
          >
            <img
              alt="new plus icon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              className="new-plus-icon"
            />
            <p>New</p>
          </button>
        </div>
        <div className="home-content-bg-container">
          <div className="slide-tabs-bg-container">
            <ol className="slide-tabs-list">
              {slidesList.map((slide, index) => (
                <SlideTab
                  key={slide.id}
                  slideDetails={slide}
                  activeTabId={activeTabId}
                  setActiveTabId={this.setActiveTabId}
                  index={index}
                />
              ))}
            </ol>
          </div>
          <div className="preview-container">
            <div className="preview-slide">
              <div className="preview-heading-container">
                {isClickedOnHeading ? (
                  <input
                    type="text"
                    className="prev-heading-input input-element"
                    value={heading}
                    onChange={this.onChangeHeading}
                    onBlur={this.toggleHeadingClickedStatus}
                  />
                ) : (
                  <button
                    className="prev-heading-button"
                    type="button"
                    onClick={this.toggleHeadingClickedStatus}
                  >
                    <h1 className="preview-heading">{heading}</h1>
                  </button>
                )}
              </div>
              <div className="preview-heading-container">
                {isClickedOnDescription ? (
                  <input
                    type="text"
                    className="prev-description-input input-element"
                    value={description}
                    onChange={this.onChangeDescription}
                    onBlur={this.toggleDescriptionClickedStatus}
                  />
                ) : (
                  <button
                    className="prev-heading-button"
                    type="button"
                    onClick={this.toggleDescriptionClickedStatus}
                  >
                    <p className="prev-description-input">{description}</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
