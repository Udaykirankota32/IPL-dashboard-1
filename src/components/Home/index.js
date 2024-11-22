// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {listOfTeams: [], isLoading: true}

  componentDidMount() {
    this.fetchListOfTeamsData()
  }

  fetchListOfTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const {teams} = fetchedData
    const updatedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({listOfTeams: updatedData, isLoading: false})
  }

  renderHomeContainer = () => {
    const {listOfTeams} = this.state
    return (
      <div className="ipl-dashboard-home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="ipl-teams-list-container">
          {listOfTeams.map(eachTeam => (
            <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <Link to="/" className="ipl-dashboard-home-link">
        <div className="ipl-dashboard-home-bg-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderHomeContainer()
          )}
        </div>
      </Link>
    )
  }
}

export default Home
