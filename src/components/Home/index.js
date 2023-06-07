import BlogsList from '../BlogList/index'
import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <img
        className="user-image"
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      />
      <h2 className="user-name">Wade Warren</h2>
      <p className="user-role">software developer at UK</p>
    </div>
    <BlogsList />
  </div>
)

export default Home
