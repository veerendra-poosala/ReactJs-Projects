import {Component} from 'react'
import FeedbackPageComponent from '../FeedbackPageComponent/index'
import ThankyouPageComponent from '../ThankYouPage/index'
import './index.css'

class Feedback extends Component {
  constructor(props) {
    super(props)
    // const {resources} = this.props
    this.state = {showFeedBackPage: true}
  }

  showThankYouPage = () => {
    const {showFeedBackPage} = this.state
    if (showFeedBackPage === true) {
      this.setState({showFeedBackPage: false})
    }
  }

  render() {
    const {resources} = this.props
    const {showFeedBackPage} = this.state

    const {emojis, loveEmojiUrl} = resources
    console.log(
      resources,
      'show feedback page: ',
      showFeedBackPage,
      loveEmojiUrl,
    )

    return (
      <div className="feedback-page-outer-bg-container">
        {showFeedBackPage === true ? (
          <FeedbackPageComponent
            emojis={emojis}
            showThankYouPage={this.showThankYouPage}
          />
        ) : (
          <ThankyouPageComponent loveEmojiUrl={loveEmojiUrl} />
        )}
      </div>
    )
  }
}

export default Feedback
