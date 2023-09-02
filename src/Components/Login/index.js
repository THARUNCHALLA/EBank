import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {pin12: '', userId: '', isSubmit: false, error: ''}

  password = event => {
    this.setState({pin12: event.target.value})
  }

  text = event => {
    this.setState({userId: event.target.value})
  }

  success = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 45})
    const {history} = this.props
    history.replace('/')
  }

  failure = error => {
    this.setState({isSubmit: true, error})
  }

  submit = async event => {
    event.preventDefault()
    const {userId, pin12} = this.state
    const LoginDetails = {
      user_id: userId,
      pin: pin12,
    }
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(LoginDetails),
    }
    const response = await fetch(apiUrl, options)
    const Data = await response.json()
    if (response.ok === true) {
      this.success(Data.jwt_token)
    } else {
      this.failure(Data.error_msg)
    }
  }

  render() {
    const {userId, pin12, error, isSubmit} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <div className="website_Login_Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
            alt="website login"
            className="website_Login"
          />
          <form className="Second_Container" onSubmit={this.submit}>
            <h1 className="welcomeHeading">Welcome Back!</h1>
            <div className="center">
              <label htmlFor="user">User ID</label>
              <input
                type="text"
                id="user"
                placeholder="Enter User ID"
                onChange={this.text}
                value={userId}
              />
            </div>
            <div className="center">
              <label htmlFor="user1">PIN</label>
              <input
                type="password"
                id="user1"
                placeholder="Enter PIN"
                onChange={this.password}
                value={pin12}
              />
            </div>
            <button type="submit" className="button">
              Login
            </button>
            {isSubmit && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
