import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LaguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: [...languageFiltersData],
      isSpinnerLoading: false,
      activeLanguage: languageFiltersData[0],
      repoItemsList: [],
      loadFailureView: false,
    }
  }

  componentDidMount() {
    const {activeLanguage} = this.state
    this.fetchReposList(activeLanguage)
  }

  setActiveLanguage = languageId => {
    const {languages} = this.state
    const active = languages.filter(item => item.id === languageId)
    this.setState({activeLanguage: {...active[0]}})
    this.fetchReposList(active[0])
  }

  fetchReposList = async activeLanguage => {
    this.setState({
      isSpinnerLoading: true,
    })
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage.language}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok) {
      const filteredRepoItems = data?.popular_repos.map(item => ({
        name: item.name,
        id: item.id,
        issuesCount: item.issues_count,
        forksCount: item.forks_count,
        starsCount: item.stars_count,
        avatarUrl: item.avatar_url,
      }))
      this.setState({
        repoItemsList: [...filteredRepoItems],
        isSpinnerLoading: false,
        loadFailureView: false,
      })
    } else {
      this.setState({loadFailureView: true, isSpinnerLoading: false})
    }
  }

  render() {
    const {
      languages,
      activeLanguage,
      isSpinnerLoading,
      repoItemsList,
      loadFailureView,
    } = this.state

    return (
      <div className="git-pop-repos-bg-container">
        <div className="git-pop-repos-container">
          <h1 className="main-heading">Popular</h1>
          <ul className="languages-filter-container">
            {languages.map(languageItem => (
              <LaguageFilterItem
                key={languageItem.id}
                languageItem={languageItem}
                activeLanguage={activeLanguage}
                setActiveLanguage={this.setActiveLanguage}
              />
            ))}
          </ul>
          <div className="repo-item-bg-container spinner-container">
            {isSpinnerLoading && (
              <div data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#0284c7"
                  height={80}
                  width={80}
                />
              </div>
            )}
          </div>
          <div className="repo-item-bg-container">
            {loadFailureView === true ? (
              <div className="failure-view-container">
                <img
                  className="failure-view-image"
                  alt="failure view"
                  src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
                />
                <h1 className="failure-view-heading">Something Went Wrong</h1>
              </div>
            ) : (
              repoItemsList.length !== 0 && (
                <ul className="repo-items-list">
                  {repoItemsList.map(repoItem => (
                    <RepositoryItem key={repoItem.id} repoItem={repoItem} />
                  ))}
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
