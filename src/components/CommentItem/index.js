import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onChangeIsLiked, deleteComment} = props

  const {
    id,
    username,
    commentText,
    isLiked,
    timeDescription,
    profileImageStyle,
  } = commentDetails

  const likeCommentFunc = () => {
    onChangeIsLiked(id)
  }

  const commentDeletedFunc = () => {
    deleteComment(id)
  }

  const userProfileImageStyle = `user-profile-image-container ${profileImageStyle}`
  const firstChar = username.slice(0, 1)
  const time = formatDistanceToNow(timeDescription)

  const isLikedImage =
    isLiked === true
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const displayTime = `${time} ago`
  const isLikedTextStyle =
    isLiked === true ? 'like-button-liked-text' : 'like-button-unliked-text'
  return (
    <li className="comment-item-bg-container">
      <div className="comment-details-bg-container">
        <div className={userProfileImageStyle}>{firstChar}</div>
        <div className="comment-text-card">
          <div className="username-time-container">
            <h1 className="comment-username">{username}</h1>
            <p className="comment-time">{displayTime}</p>
          </div>
          <div className="comment-description-container">
            <p className="comment-description">{commentText}</p>
          </div>
        </div>
      </div>
      <div className="like-delet-button-container">
        <div className="like-button-container">
          <button type="button" className="button" onClick={likeCommentFunc}>
            <img className="like-image" alt="like" src={isLikedImage} />
          </button>
          <p className={isLikedTextStyle}>Like</p>
        </div>
        <div className="delete-button-container">
          <button
            type="button"
            className="button"
            onClick={commentDeletedFunc}
            data-testid="delete"
          >
            <img
              className="delete-button-image"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
