import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Home extends Component {
  back = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <div className="HomeContainer">
        <div className="InsideContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
            alt="website logo"
            className="website_logo"
          />
          <button type="button" className="logout" onClick={this.back}>
            Logout
          </button>
        </div>
        <div className="tharun">
          <h1 className="para">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
            alt="digital card"
            className="digital_card"
          />
        </div>
      </div>
    )
  }
}

export default Home
