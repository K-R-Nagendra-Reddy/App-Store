// Write your code here
import './index.css'

const TabItem = props => {
  const {details, onChangeActiveTabId} = props
  const {tabId, displayText} = details
  console.log(tabId)
  const onClickTabItem = () => {
    onChangeActiveTabId(tabId)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
