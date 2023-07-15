import Playtime from '../Playtime'
import NewWaysToConnect from '../NewWaysToConnect'

import './index.css'

const FeaturesSection = props => {
  const {activeLanguage} = props
  return (
    <div className="features-section-container">
      <Playtime activeLanguage={activeLanguage} />
      <NewWaysToConnect activeLanguage={activeLanguage} />
    </div>
  )
}

export default FeaturesSection
