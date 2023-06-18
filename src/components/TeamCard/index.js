import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="link-element">
      <li className="team-bg-container">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
