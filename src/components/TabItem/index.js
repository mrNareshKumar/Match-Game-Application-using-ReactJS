const TabItem = props => {
  const {key, tabDetails, clickTab} = props
  const {tabId, category, displayText} = tabDetails
  const onclickTab = () => {
    clickTab(tabId)
  }

  return (
    <li key={key}>
      <button
        type="button"
        className={`tab-button ${category === tabId ? 'highlight-text' : ''}`}
        onClick={onclickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
