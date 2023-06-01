import {Component} from 'react'
import './index.css'

class Capital extends Component {
  constructor(props) {
    super(props)
    const countryAndCapitalsList = [
      {
        id: 'NEW_DELHI',
        capitalDisplayText: 'New Delhi',
        country: 'India',
      },
      {
        id: 'LONDON',
        capitalDisplayText: 'London',
        country: 'United Kingdom',
      },
      {
        id: 'PARIS',
        capitalDisplayText: 'Paris',
        country: 'France',
      },
      {
        id: 'KATHMANDU',
        capitalDisplayText: 'Kathmandu',
        country: 'Nepal',
      },
      {
        id: 'HELSINKI',
        capitalDisplayText: 'Helsinki',
        country: 'Finland',
      },
    ]
    this.state = {
      countryAndCapitalsList,
      country: countryAndCapitalsList[0],
    }
  }

  getCountry = event => {
    // console.log('event triggered')
    const {countryAndCapitalsList} = this.state
    const requiredCountry = countryAndCapitalsList.find(
      country => country.id === event.target.value,
    )
    this.setState({country: requiredCountry})
  }

  render() {
    const {countryAndCapitalsList, country} = this.state
    // console.log(countryAndCapitalsList, country)
    return (
      <div className="capitals-app-outer-bg-container">
        <div className="capitals-app-bg-container">
          <h1 className="main-heading">Countries And Capitals</h1>

          <div className="selection-container">
            <select
              className="select-element"
              name="capital"
              onChange={this.getCountry}
              value={country.id}
            >
              {countryAndCapitalsList.map(obj => (
                <option className="option-element" key={obj.id} value={obj.id}>
                  {obj.capitalDisplayText}
                </option>
              ))}
            </select>
            <p> &nbsp; is capital of which country?</p>
          </div>
          <div>
            <h1>{country.country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capital
