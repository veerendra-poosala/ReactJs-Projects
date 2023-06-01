import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="list-item-container">
      <img className="app-logo" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
