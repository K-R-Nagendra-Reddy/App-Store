// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl, category} = details
  console.log(appId)
  console.log(category)
  return (
    <li className="app">
      <img src={imageUrl} className="small-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
