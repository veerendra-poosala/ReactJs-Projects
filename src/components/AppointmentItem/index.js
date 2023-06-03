import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointment, toggleStarred} = props
  const {title, date, isStarred, id} = appointment
  const dateToDisplay = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const isStarredImageUrl =
    isStarred === true
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  // console.log(appointment)
  const changeStarViewFunc = () => {
    toggleStarred(id)
  }
  return (
    <li className="appointment-container">
      <div className="appointment-title-container">
        <p className="appointment-title">{title}</p>
        <button
          className="star-button"
          type="button"
          onClick={changeStarViewFunc}
          data-testid="star"
        >
          <img alt="star" src={isStarredImageUrl} />
        </button>
      </div>
      <div className="appointment-date-container">
        <p className="appointment-date">Date: {dateToDisplay}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
