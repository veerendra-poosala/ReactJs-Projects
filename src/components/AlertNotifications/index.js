import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import './index.css'
import Notification from '../Notification'

const Notifications = () => (
  <div className="notifications-bg-container">
    <h1 className="notifications-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success" />
      <div className="text-container">
        <h1 className="success">Success</h1>
        <p className="description success">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="failure" />
      <div className="text-container">
        <h1 className="failure">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="warning" />
      <div className="text-container">
        <h1 className="warning">Warning</h1>
        <p className="description success">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="info" />
      <div className="text-container">
        <h1 className="info">Info</h1>
        <p className="description success">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default Notifications
