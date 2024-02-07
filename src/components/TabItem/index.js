import './index.css'

const TabItem = props => {
  const {tabDetails, onTabClick} = props
  const {tabId, displayText} = tabDetails

  const handleTabClick = () => {
    onTabClick(tabId)
  }

  return (
    <li className="tabItem">
      <button type="button" onClick={handleTabClick} className="tab-button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
