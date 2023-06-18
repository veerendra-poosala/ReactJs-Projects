import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {teamsList: [], isSpinnerLoading: true}
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({teamsList: [...formattedData], isSpinnerLoading: false})
  }

  render() {
    const {teamsList, isSpinnerLoading} = this.state
    // console.log(teamsList)

    return (
      <div className="home-bg-container">
        <div className="home-ipl-logo-container">
          <img
            className="ipl-logo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="ipl-main-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-bg-container">
          {isSpinnerLoading === true ? (
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#fff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list-bg-container">
              {teamsList.map(team => (
                <TeamCard key={team.name} team={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
