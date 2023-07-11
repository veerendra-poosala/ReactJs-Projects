import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      vaccinationCoverage: [],
      vaccinationByAge: [],
      vaccinationByGender: [],
      apiStatus: apiStatusConstants.initial,
    }
  }

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    try {
      this.setState({isLoading: true, apiStatus: apiStatusConstants.inProgress})
      const url = 'https://apis.ccbp.in/covid-vaccination-data'
      const response = await fetch(url)
      const data = await response.json()
      console.log('data', data)
      const last7DaysVaccination = data?.last_7_days_vaccination.map(item => ({
        vaccineDate: item.vaccine_date,
        dose1: item.dose_1,
        dose2: item.dose_2,
      }))

      this.setState({
        vaccinationCoverage: [...last7DaysVaccination],
        vaccinationByAge: [...data?.vaccination_by_age],
        vaccinationByGender: [...data?.vaccination_by_gender],
        isLoading: false,
        apiStatus: apiStatusConstants.success,
      })
    } catch (e) {
      this.setState({apiStatus: apiStatusConstants.failure, isLoading: false})
      console.log('fetch error', e)
    } finally {
      this.setState({isLoading: false})
    }
  }

  renderSuccesView = () => {
    const {
      vaccinationByAge,
      vaccinationByGender,
      vaccinationCoverage,
      isLoading,
    } = this.state
    // console.log(vaccinationByAge, vaccinationByGender, vaccinationCoverage)
    return isLoading === true ? (
      this.renderLoader()
    ) : (
      <div className="cowin-dashboard-bg-container">
        <div className="cowin-header">
          <img
            className="cowin-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          />
          <h1 className="cowin-main-heading">Co-Win</h1>
        </div>
        <h1 className="cowin-sub-heading">CoWIN Vaccination In India </h1>
        <VaccinationCoverage vaccinationCoverage={vaccinationCoverage} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </div>
    )
  }

  renderLoader = () => {
    const {isLoading} = this.state
    return (
      isLoading && (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        </div>
      )
    )
  }

  renderFailureView = () => {
    const {apiStatus} = this.state

    if (apiStatus === apiStatusConstants.failure) {
      return (
        <div className="vaccination-details-container">
          <img
            style={{width: '100%'}}
            alt="failure view"
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          />
          <h1>Something went wrong</h1>
        </div>
      )
    }
    return null
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccesView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.initial:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }
}

export default CowinDashboard
