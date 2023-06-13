/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

import Navbar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      checkEmojisList: [],
      isGameEnded: false,
      wonGame: false,
      emojisList: [...emojisList],
    }
  }

  restartGame = () => {
    this.setState({
      score: 0,
      wonGame: false,
      checkEmojisList: [],
      isGameEnded: false,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playGame = id => {
    const eList = this.shuffledEmojisList()
    const {emojisList, checkEmojisList} = this.state
    const emoji = emojisList.filter(e => e.id === id)
    // console.log(emoji[0])

    if (!checkEmojisList.includes(emoji[0].emojiName)) {
      this.setState(prev => ({
        emojisList: [...eList],
        checkEmojisList: [...prev.checkEmojisList, emoji[0].emojiName],
        score: prev.score + 1,
      }))
    } else {
      this.setState(prev => ({
        isGameEnded: true,
        topScore: `${prev.score >= prev.topScore ? prev.score : prev.topScore}`,
      }))
    }
  }

  render() {
    const {score, topScore, wonGame, emojisList, isGameEnded} = this.state
    // console.log(checkEmojisList)
    return (
      <div className="emoji-game-bg-container">
        <Navbar score={score} topScore={topScore} />
        <div className="emoji-game-body-container">
          {isGameEnded === true ? (
            <WinOrLoseCard
              score={score}
              wonGame={wonGame}
              restartGame={this.restartGame}
            />
          ) : (
            <ul className="emojis-container">
              {emojisList.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emoji={emoji}
                  playGame={this.playGame}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
