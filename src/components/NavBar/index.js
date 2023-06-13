import './index.css'

const EmojiGameNavbar = props => {
  const {score, topScore, wonGame} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          alt="emoji logo"
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {wonGame === false && (
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default EmojiGameNavbar
