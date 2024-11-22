// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-card">
      <div className="match-result">
        <p className="team-title">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="latest-match-description">{venue}</p>
        <p className="latest-match-description">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="summary">
        <h1 className="summary-heading">First Innings</h1>
        <p className="latest-match-description">{firstInnings}</p>
        <h1 className="summary-heading">Second Innings</h1>
        <p className="latest-match-description">{secondInnings}</p>
        <h1 className="summary-heading">Man of The Match</h1>
        <p className="latest-match-description">{manOfTheMatch}</p>
        <h1 className="summary-heading">Umpire</h1>
        <p className="latest-match-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
