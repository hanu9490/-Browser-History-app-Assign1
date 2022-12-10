import './index.css'

const BrowserHistoryItem = props => {
  const {historyListItem, onDeleteBrowserHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyListItem

  const onDeleteHistory = () => {
    onDeleteBrowserHistory(id)
  }

  return (
    <li className="list">
      <div className="time-logo-url-con">
        <h1 className="time">{timeAccessed}</h1>
        <img alt="img-icon" className="icon" src={logoUrl} />
        <h1 className="title">{title}</h1>
        <h1 className="domain-url">{domainUrl}</h1>
      </div>
      <button className="button" type="button" onClick={onDeleteHistory}>
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
