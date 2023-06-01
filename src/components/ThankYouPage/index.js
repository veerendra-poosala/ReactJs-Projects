import './index.css'

const ThankyouPageComponent = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="thankyou-component-bg-container">
      <div className="love-emoji-container">
        <img className="love-emoji" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="thankyou-note">Thank You!</h1>
      </div>

      <p className="feedback-line">
        we will use your feedback to improve our customer support performance.
      </p>
    </div>
  )
}

export default ThankyouPageComponent
