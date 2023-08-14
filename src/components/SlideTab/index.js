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
  const slideTabTestId = `slideTab${index + 1}`
  // console.log('slide tabi id', slideTabTestId)
  return (
    <li
      className={slideTabStyling}
      onClick={updateActivetab}
      testid={slideTabTestId}
    >
      <p className="number">{index + 1}</p>
      <div className="slide-tab">
        <h1 className="heading-text">{heading}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default SlideTab
