import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = match
  // console.log(match)
  const matchStatusClassName = matchStatus === 'Won' ? 'won' : 'loss'
  return (
    <li className="recent-match-container">
      <img
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
