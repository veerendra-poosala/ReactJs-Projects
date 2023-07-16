import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderContentSection = () =>
        showContent === true && (
          <div className="content-section-bg-container">
            <h1 className="content-heading">Content</h1>
            <p className="content-description">
              Lorem ipsum dolor sit amit, consectur elit, set todo,elismode sdlj
            </p>
          </div>
        )

      const renderLeftNavbarSection = () =>
        showLeftNavbar === true && (
          <div className="left-navbar-section-container">
            <h1 className="content-heading">Left Navbar Menu</h1>

            <p className="item">item 1</p>
            <p className="item">item 2</p>
            <p className="item">item 3</p>
            <p className="item">item 4</p>
          </div>
        )
      const renderRightNavbarSection = () =>
        showRightNavbar === true && (
          <div className="right-navbar-section-container">
            <h1 className="content-heading">Right Navbar </h1>
            <ul>
              <li className="add-container">
                <p className="add-text">Ad 1</p>
              </li>
              <li className="add-container">
                <p className="add-text">Ad 2</p>
              </li>
            </ul>
          </div>
        )
      return (
        <div className="body-container">
          {renderLeftNavbarSection()}
          {renderContentSection()}
          {renderRightNavbarSection()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
