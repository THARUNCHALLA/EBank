import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <div>
      <h1 className="page">Page Not Found</h1>
      <p className="we">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
