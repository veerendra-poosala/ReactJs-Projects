import './index.css'

const EmojiComponent = props => {
  const {emoji, showThankYouPage} = props
  const emojiButtonTriggered = () => {
    showThankYouPage()
  }
  return (
    <li>
      <button
        type="button"
        className="emoji-button"
        onClick={emojiButtonTriggered}
      >
        <div className="emoji-container">
          <img className="emoji-image" alt={emoji.name} src={emoji.imageUrl} />
          <p className="emoji-name">{emoji.name}</p>
        </div>
      </button>
    </li>
  )
}

export default EmojiComponent
