import EmojiComponent from '../EmojiComponent/index'
import './index.css'

const FeedbackPageComponent = props => {
  const {showThankYouPage, emojis} = props

  return (
    <div className="feedback-component-bg-container">
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
      </div>
      <ul className="emojis-bg-container">
        {emojis.map(emoji => (
          <EmojiComponent
            key={emoji.id}
            emoji={emoji}
            showThankYouPage={showThankYouPage}
          />
        ))}
      </ul>
    </div>
  )
}

export default FeedbackPageComponent
