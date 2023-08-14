import {Component} from 'react'
import './index.css'

const SlideTab = props => {
  const {slideDetails, index, activeTabId, setActiveTabId} = props
  const {id, heading, description} = slideDetails
  const slideTabStyling =
    activeTabId === id ? 'active-tab-item normal-tab-item' : 'normal-tab-item'
  const updateActivetab = () => {
    setActiveTabId(id)
  }
  return (
    <li className={slideTabStyling} onClick={updateActivetab}>
      <p className="number">{index + 1}</p>
      <div className="slide-tab">
        <h1 className="heading-text">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
