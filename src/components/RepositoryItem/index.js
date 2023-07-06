import './index.css'

const RepositoryItem = props => {
  const {repoItem} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoItem

  return (
    <li className="repo-item-container">
      <img className="repo-item-image" alt={name} src={avatarUrl} />
      <h1 className="repo-item-name">{name}</h1>
      <div className="repo-item-stats">
        <img
          className="icon"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="stats-text">{starsCount} stars</p>
      </div>
      <div className="repo-item-stats">
        <img
          className="icon"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>
      <div className="repo-item-stats">
        <img
          className="icon"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="stats-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
