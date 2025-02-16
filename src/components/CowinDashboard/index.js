import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

class CowinDashboard extends Component {
  state = {
    isLoading: true,
    hasError: false,
    vaccinationCoverageData: [],
    vaccinationByGenderData: [],
    vaccinationByAgeData: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    try {
      const response = await fetch(vaccinationDataApiUrl)
      if (response.ok) {
        const data = await response.json()

        // Process data for child components
        const updatedCoverageData = data.last_7_days_vaccination.map(item => ({
          dose1: item.dose_1,
          dose2: item.dose_2,
          vaccineDate: item.vaccine_date,
        }))

        const updatedGenderData = data.vaccination_by_gender.map(item => ({
          gender: item.gender,
          count: item.count,
        }))

        const updatedAgeData = data.vaccination_by_age.map(item => ({
          age: item.age,
          count: item.count,
        }))

        this.setState({
          vaccinationCoverageData: updatedCoverageData,
          vaccinationByGenderData: updatedGenderData,
          vaccinationByAgeData: updatedAgeData,
          isLoading: false,
          hasError: false,
        })
      } else {
        this.setState({isLoading: false, hasError: true})
      }
    } catch (error) {
      this.setState({isLoading: false, hasError: true})
    }
  }

  render() {
    const {
      isLoading,
      hasError,
      vaccinationCoverageData,
      vaccinationByGenderData,
      vaccinationByAgeData,
    } = this.state

    return (
      <div className="cowin-bg-container">
        <div className="cowin-container">
          <div className="logo-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo-image"
            />
            <h1 className="logo-content">Co-WIN</h1>
          </div>
          <h1 className="cowin-heading">CoWIN Vaccination in India</h1>

          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>
          ) : hasError ? (
            <div className="error-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                alt="failure view"
                className="error-image"
              />
              <h1 className="error-message">Something went wrong</h1>
            </div>
          ) : (
            <>
              <div className="vaccination-coverage-container">
                <VaccinationCoverage data={vaccinationCoverageData} />
              </div>

              <div className="vaccination-by-gender-container">
                <VaccinationByGender data={vaccinationByGenderData} />
              </div>

              <div className="vaccination-by-age-container">
                <VaccinationByAge data={vaccinationByAgeData} />
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
