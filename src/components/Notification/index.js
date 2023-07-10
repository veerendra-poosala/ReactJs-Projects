import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-bg-container">
      {children}
      <GrFormClose style={{color: '#0f172a', fontSize: '28px'}} />
    </div>
  )
}

export default Notification
