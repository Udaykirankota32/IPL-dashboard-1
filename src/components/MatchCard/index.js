// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-card-description ">{result}</p>
      <p
        className={
          matchStatus === 'Won'
            ? 'result-won match-card-description '
            : 'result-lost match-card-description '
        }
      >
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
