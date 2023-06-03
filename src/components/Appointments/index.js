import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
    isStarred: false,
    filterStarred: false,
  }

  onAppointmentSubmissionForm = event => {
    event.preventDefault()
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    // console.log('date: ', event.target.value)
    this.setState({date: event.target.value})
  }

  createAppointment = () => {
    // console.log('appointment created')
    const {title, date, isStarred} = this.state
    if (title.trim() !== '' && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        isStarred,
      }
      this.setState(prev => ({
        appointmentsList: [...prev.appointmentsList, newAppointment],
        title: '',
        date: '',
        isStarred: false,
      }))
    }
  }

  toggleStarred = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(item => {
        if (item.id === id) {
          return {...item, isStarred: !item.isStarred}
        }
        return item
      }),
    }))
  }

  getStarredAppointments = () => {
    this.setState(prev => ({
      filterStarred: !prev.filterStarred,
    }))
  }

  render() {
    const {title, date, appointmentsList, filterStarred} = this.state
    // console.log(appointmentsList)

    const filteredAppointmentsList =
      filterStarred === true
        ? appointmentsList.filter(each => each.isStarred === true)
        : [...appointmentsList]

    return (
      <div className="appointments-outer-bg-container">
        <div className="appointments-bg-container">
          <div className="appointments-top-section-container">
            <form
              className="appointments-form-container"
              onSubmit={this.onAppointmentSubmissionForm}
            >
              <h1 className="add-appointment-heading">Add Appointment </h1>
              <label className="title-label-element">
                Title
                <br />
                <input
                  className="title-input-element"
                  type="text"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
              </label>
              <label className="title-label-element">
                Date
                <br />
                <input
                  className="title-input-element date-input-element"
                  type="date"
                  placeholder="Date"
                  onChange={this.onChangeDate}
                  value={date}
                />
              </label>
              <br />
              <button
                type="button"
                className="add-appointment-button"
                onClick={this.createAppointment}
              >
                Add
              </button>
            </form>
            <div className="appointments-image-container">
              <img
                className="appointments-image"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <div className="appointments-bottom-section-container">
            <div className="appointments-bottom-section-header-container">
              <h1 className="appointments-heading-element">Appointments</h1>
              <button
                className="starred-button"
                type="button"
                onClick={this.getStarredAppointments}
              >
                {filterStarred === true ? 'Show All' : 'Starred'}
              </button>
            </div>
            <div className="appointments-display-bg-container">
              <ul className="appointments-list-container">
                {filteredAppointmentsList.length > 0 &&
                  filteredAppointmentsList.map(eachAppointment => (
                    <AppointmentItem
                      key={eachAppointment.id}
                      appointment={eachAppointment}
                      toggleStarred={this.toggleStarred}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
