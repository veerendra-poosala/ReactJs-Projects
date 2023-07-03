import './index.css'

const EventItem = props => {
  const {eventItem, updateActiveEventView} = props

  const {imageUrl, location, name, registrationStatus} = eventItem

  const changeEventStatus = () => {
    updateActiveEventView(registrationStatus)
  }

  return (
    <li className="event-item">
      <button
        type="button"
        className="event-item-button"
        onClick={changeEventStatus}
      >
        <img alt="event" className="event-item-image" src={imageUrl} />
      </button>
      <p key="name" className="event-item-name">
        {name}
      </p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
