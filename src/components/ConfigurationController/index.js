import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        // console.log('on change event occured')
        onToggleShowContent(event.target.value)
      }

      const onChangeShowLeftNavbar = event => {
        // console.log('on change event occured')
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRightNavbar = event => {
        // console.log('on change event occured')
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller">
          <h1 className="configuration-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              id="showContentCheckbox"
              type="checkbox"
              className="input-checkbox"
              value={showContent}
              onChange={onChangeShowContent}
            />
            <label htmlFor="showContentCheckbox" className="label-name">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              id="showContentCheckbox"
              type="checkbox"
              className="input-checkbox"
              value={showLeftNavbar}
              onChange={onChangeShowLeftNavbar}
            />
            <label htmlFor="showContentCheckbox" className="label-name">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              id="showContentCheckbox"
              type="checkbox"
              className="input-checkbox"
              value={showRightNavbar}
              onChange={onChangeShowRightNavbar}
            />
            <label htmlFor="showContentCheckbox" className="label-name">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
