import {Component} from 'react'
import './index.css'
import TabItem from '../TabItem/index'
import ThumbnailItem from '../ThumbnailItem/index'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = this.props
    this.state = {
      tabsList: [...tabsList],
      imagesList: [...imagesList],
      score: 0,
      seconds: 60,
      isGameEnded: false,
      previewImage: imagesList[0],
      activatedTabItem: tabsList[0],
    }
  }

  componentDidMount() {
    const {seconds} = this.state
    if (seconds > 0) {
      this.tick()
    } else {
      clearInterval(this.timerId)
    }
  }

  tick = () => {
    this.timerId = setInterval(() => {
      this.setState(prev => ({
        seconds: prev.seconds - 1,
      }))
      const {seconds} = this.state
      if (seconds < 1) {
        // console.log('seconds 0')
        this.clearTimer()
      }
    }, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      isGameEnded: true,
    })
  }

  updateActivatedTabItem = tabId => {
    const {tabsList} = this.state
    const updatedTabItemList = tabsList.filter(tab => tabId === tab.tabId)
    this.setState({
      activatedTabItem: updatedTabItemList[0],
    })
  }

  checkIsThumbnailMatchedWithPreviewImage = id => {
    const {previewImage, imagesList} = this.state
    if (previewImage.id === id) {
      const randomIndex = Math.floor(Math.random() * imagesList.length)
      const updatedPreviewImage = imagesList[randomIndex]
      this.setState(prev => ({
        score: prev.score + 1,
        previewImage: updatedPreviewImage,
      }))
    } else {
      const {tabsList} = this.props
      this.setState({
        isGameEnded: true,
        previewImage: imagesList[0],
        activatedTabItem: tabsList[0],
        seconds: 1,
      })
    }
  }

  resetGame = () => {
    const {imagesList, tabsList} = this.props
    this.setState({
      score: 0,
      seconds: 60,
      isGameEnded: false,
      previewImage: imagesList[0],
      activatedTabItem: tabsList[0],
    })
    this.tick()
  }

  render() {
    const {
      seconds,
      score,
      previewImage,
      tabsList,
      imagesList,
      activatedTabItem,
      isGameEnded,
    } = this.state

    const filteredThumbnailsList = imagesList.filter(
      item => item.category === activatedTabItem.tabId,
    )
    return (
      <div className="match-game-bg-container">
        <ul className="match-game-header">
          <li className="match-game-logo-container">
            <img
              className="match-game-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            />
          </li>
          <li className="score-time-bg-container">
            <div className="score-time-container">
              <p>Score:</p>
              <p className="score-time-desc">{score}</p>
            </div>

            <div className="score-time-container">
              <img
                className="score-time-image"
                alt="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              />
              <p className="score-time-desc">{seconds} sec</p>
            </div>
          </li>
        </ul>

        {/* match game play area */}

        {isGameEnded === true ? (
          <div className="score-bg-container">
            <img
              className="trophy-image"
              alt="trophy"
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            />
            <p className="your-score-desc">Your Score</p>
            <p className="previewing-score">{score}</p>
            <button
              type="button"
              className="play-again-button"
              onClick={this.resetGame}
            >
              <img
                alt="reset"
                className="play-again-image"
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              />
              Play Again
            </button>
          </div>
        ) : (
          <div className="match-game-play-bg-container">
            <div className="image-preview-container">
              <img
                className="preview-image"
                alt="match"
                src={previewImage.imageUrl}
              />
            </div>
            <ul className="tabs-bg-container">
              {tabsList.map(tabItem => (
                <TabItem
                  activatedTabItem={activatedTabItem}
                  key={tabItem.tabId}
                  tabItem={tabItem}
                  updateActivatedTabItem={this.updateActivatedTabItem}
                />
              ))}
            </ul>
            <ul className="thumbnails-bg-container">
              {filteredThumbnailsList.map(thumbnailItem => (
                <ThumbnailItem
                  key={thumbnailItem.id}
                  thumbnailItem={thumbnailItem}
                  checkIsThumbnailMatchedWithPreviewImage={
                    this.checkIsThumbnailMatchedWithPreviewImage
                  }
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
