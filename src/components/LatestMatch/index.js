import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  // console.log(latestMatchDetails)
  return (
    <div className="latest-match-bg-container">
      <div className="container">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="container team-logo-container">
        <img
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <div className="container left-conatiner">
        <p>First Innings</p>
        <p className="response">{firstInnings}</p>
        <p>Second Innings</p>
        <p className="response">{secondInnings}</p>
        <p>Man Of The Match</p>
        <p className="response">{manOfTheMatch}</p>
        <p>Umpires</p>
        <p className="response">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
