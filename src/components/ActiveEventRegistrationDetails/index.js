import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus, registrationStatus} = props

  const NoActiveEvent = () => (
    <div className="reg-status-bg-container no-active-event">
      <p className="reg-status-description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const YetToRegisterView = () => (
    <div className="reg-status-bg-container">
      <img
        className="reg-status-img"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="reg-status-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  )

  const Registered = () => (
    <div className="reg-status-bg-container">
      <img
        className="reg-status-img"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="reg-status-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const RegistrationsClosed = () => (
    <div className="reg-status-bg-container">
      <img
        className="reg-status-img"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="reg-status-description">
        Stay tuned. we will reopen the registrations soon!
      </p>
    </div>
  )

  switch (activeEventStatus) {
    case registrationStatus.noActiveEventView:
      return <NoActiveEvent />
    case registrationStatus.yetToRegister:
      return <YetToRegisterView />
    case registrationStatus.registered:
      return <Registered />
    case registrationStatus.registrationClosed:
      return <RegistrationsClosed />
    default:
      return <NoActiveEvent />
  }
}

export default ActiveEventRegistrationDetails
