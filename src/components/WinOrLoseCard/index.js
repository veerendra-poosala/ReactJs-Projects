import './index.css'

const WinOrLoseCard = props => {
  const {score, wonGame, restartGame} = props

  const playAgainFunc = () => {
    restartGame()
  }

  const src =
    wonGame === true
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-or-loss-bg-container">
      <div className="win-or-loss-text-card">
        <h1 className="win-or-loss-heading">
          {wonGame === true ? 'You Won' : 'You Lose'}
        </h1>
        <p className="score-description">
          {wonGame === true ? 'Best Score' : 'Score'}
        </p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={playAgainFunc}
        >
          Play Again
        </button>
      </div>
      <div className="win-or-loss-image-container">
        <img className="win-or-loss-image" alt="winOrLossImage" src={src} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
