import './index.css'

const EmojiCard = props => {
  const {emoji, playGame} = props
  const {emojiUrl, emojiName, id} = emoji

  const checkEmoji = () => {
    playGame(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={checkEmoji}>
        <img alt={emojiName} src={emojiUrl} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
