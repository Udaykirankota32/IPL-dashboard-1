// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
