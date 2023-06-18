import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    const {match} = props
    const {id} = match.params
    this.state = {
      id,
      teamBannerUrl: '',
      latestMatchDetails: {},
      recentMatches: [],
      isSpinnerLoading: true,
    }
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {id} = this.state
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const formattedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const formattedRecentMatches = data.recent_matches.map(match => ({
      competingTeam: match.competing_team,
      competingTeamLogo: match.competing_team_logo,
      date: match.date,
      firstInnings: match.first_innings,
      id: match.id,
      manOfTheMatch: match.man_of_the_match,
      matchStatus: match.match_status,
      result: match.result,
      secondInnings: match.second_innings,
      umpires: match.umpires,
      venue: match.venue,
    }))
    // console.log('formatted recent ', formattedRecentMatches)
    this.setState({
      teamBannerUrl,
      latestMatchDetails: {...formattedLatestMatchDetails},
      recentMatches: [...formattedRecentMatches],
      isSpinnerLoading: false,
    })
  }

  render() {
    const {
      id,
      isSpinnerLoading,
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = this.state

    // console.log(teamBannerUrl)
    let backgroundColor

    switch (id) {
      case 'MI':
        backgroundColor = '#4f5db0'
        break
      case 'RCB':
        backgroundColor = '#a4261d'
        break
      case 'KKR':
        backgroundColor = '#5755a7'
        break
      case 'KXP':
        backgroundColor = '#d91c1f'
        break
      case 'CSK':
        backgroundColor = '#f7db00'
        break
      case 'RR':
        backgroundColor = '#da237b'
        break
      case 'SH':
        backgroundColor = '#f26d22'
        break
      case 'DC':
        backgroundColor = '#13418b'
        break

      default:
        backgroundColor = 'black'
        break
    }

    return (
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${backgroundColor}, #0f172a)`,
        }}
        className="team-matches-bg-container"
      >
        {isSpinnerLoading === true ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="TailSpin" color="#fff" height={60} width={60} />
          </div>
        ) : (
          <div className="team-matches-container">
            <div className="team-banner-container">
              <img
                className="team-banner-img"
                alt="team banner"
                src={teamBannerUrl}
              />
            </div>
            <div className="latest-match-details-bg-container">
              <LatestMatch
                key={latestMatchDetails.id}
                latestMatchDetails={latestMatchDetails}
              />
            </div>
            <ul className="recent-matches-bg-container">
              {recentMatches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
