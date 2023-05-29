import './index.css'

const Destination = props => {
  const {item} = props
  const name = item.name.toLowerCase()

  return (
    <li className="destination-item-bg-conatiner">
      <img
        alt={item.name}
        src={item.imgUrl}
        className="destination-item-image"
      />
      <p className="destination-item-name">{name}</p>
    </li>
  )
}

export default Destination
