import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], username: '', commentText: '', isLiked: false}

  submitCommentForm = event => {
    event.preventDefault()
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeCommentText = event => {
    this.setState({commentText: event.target.value})
  }

  addComment = () => {
    const {username, commentText, isLiked} = this.state
    // console.log(commentsList)

    if (username.trim() !== '' && commentText !== '') {
      const timeDescription = new Date()
      // console.log(formatDistanceToNow(timeDescription))
      const randomIndex = Math.floor(
        Math.random() * initialContainerBackgroundClassNames.length,
      )
      const randomValue = initialContainerBackgroundClassNames[randomIndex]
      const newComment = {
        id: uuidv4(),
        username,
        commentText,
        isLiked,
        timeDescription,
        profileImageStyle: randomValue,
      }

      this.setState(prev => ({
        commentsList: [...prev.commentsList, newComment],
        username: '',
        commentText: '',
      }))
    }
  }

  onChangeIsLiked = id => {
    //  console.log('onChange is like triggered')
    this.setState(prev => ({
      commentsList: prev.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    // console.log('cmment deleted')
    this.setState(prev => ({
      commentsList: prev.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, username, commentText} = this.state
    // console.log(commentsList)

    /*
      const randomIndex = Math.floor(
        Math.random() * initialContainerBackgroundClassNames.length,
      )
      const randomValue = initialContainerBackgroundClassNames[randomIndex]
      const dummy = {
        id: uuidv4(),
        username: 'veerendra',
        commentText: 'very useful course',
        isLiked,
        timeDescription: new Date(),
        profileImageStyle: randomValue,
      }
      */

    return (
      <div className="comments-ui-bg-container">
        <div className="comments-top-section-container">
          <div className="comments-ui-input-elements-container">
            <h1 className="comments-main-heading">Comments</h1>
            <form className="comments-form" onSubmit={this.submitCommentForm}>
              <p className="comments-content-description">
                Say something about 4.0 Technologies
              </p>
              <input
                className="name-input-element"
                type="text"
                placeholder="Your Name"
                value={username}
                onChange={this.onChangeUsername}
              />
              <br />
              <textarea
                className="comment-text-area-element"
                placeholder="Your Comment"
                value={commentText}
                onChange={this.onChangeCommentText}
              />
              <br />
              <button
                className="add-comment-button"
                type="button"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div className="comments-image-container">
            <img
              className="comments-image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <div className="comments-bottom-section-container">
          <div className="comments-count-container">
            <div className="comments-count">{commentsList.length}</div>
            <p className="comments-text">
              {commentsList.length === 1 ? 'Comment' : 'Comments'}
            </p>
          </div>
          <ul>
            {commentsList.length > 0 === true &&
              commentsList.map(commentItem => (
                <CommentItem
                  key={commentItem.id}
                  commentDetails={commentItem}
                  onChangeIsLiked={this.onChangeIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
