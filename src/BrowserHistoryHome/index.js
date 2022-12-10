import {Component} from 'react'
import BrowserHistoryItem from '../BrowserHistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistoryHome extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onChangeInput = event => {
    const searchText = event.target.value
    this.setState({searchInput: searchText})
  }

  onDeleteBrowserHistory = key => {
    const {historyList} = this.state

    const deleteUpdatedHistoryList = historyList.filter(each => each.id !== key)
    this.setState({historyList: deleteUpdatedHistoryList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchHistoryList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const listLength = searchHistoryList.length
    return (
      <>
        <div className="bg-con">
          <img
            alt="history-logo"
            className="history-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="input-con">
            <img
              alt="search-icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              className="input"
              type="search"
              onChange={this.onChangeInput}
              value={searchInput}
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="down-bg-con">
          {listLength >= 1 ? (
            <ul className="browser-list">
              {searchHistoryList.map(eachItem => (
                <BrowserHistoryItem
                  historyListItem={eachItem}
                  key={eachItem.id}
                  onDeleteBrowserHistory={this.onDeleteBrowserHistory}
                />
              ))}
            </ul>
          ) : (
            <h1 className="no-list">There is no history to show</h1>
          )}
        </div>
      </>
    )
  }
}

export default BrowserHistoryHome
