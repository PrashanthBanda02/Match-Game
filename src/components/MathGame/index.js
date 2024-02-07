import {Component} from 'react'
import ThumbnailItems from '../thumnailItem'
import ScoreCard from '../ScoreCard'
import TabItem from '../TabItem'
import './index.css'

class MathGame extends Component {
  state = {isGameInProgress: true, activeTab: 'FRUIT'}

  onTabClick = tabId => {
    this.setState({activeTab: tabId})
  }

  render() {
    const {imagesList, tabsList} = this.props
    const {isGameInProgress, activeTab} = this.state
    const randomIndex = Math.floor(Math.random() * imagesList.length)

    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="header-score-container">
            <p className="header-score">Score : </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-icon"
              alt="timer"
            />
            <p className="timer-countDown-time">60sec</p>
          </div>
        </div>
        <div className="match-game-bg">
          <div>
            <div className="image-to-match-container">
              <img
                src={imagesList[randomIndex].thumbnailUrl}
                alt="thumbnail"
                className="image-to-be-matched"
              />
            </div>
            <ul className="tabs-container">
              {tabsList.map(eachTab => (
                <TabItem
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  onTabClick={this.onTabClick}
                />
              ))}
            </ul>

            {isGameInProgress && (
              <ThumbnailItems imagesList={imagesList} activeTab={activeTab} />
            )}

            {!isGameInProgress && <ScoreCard score={20} />}
          </div>
        </div>
      </div>
    )
  }
}

export default MathGame
