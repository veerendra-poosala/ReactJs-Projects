import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsLIst = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Vanessa',
    role: 'software developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Vanessa',
    role: 'software developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Vanessa',
    role: 'software developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsLIst.map(userDetails => (
        <UserProfile userDetails={userDetails} key={userDetails.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
