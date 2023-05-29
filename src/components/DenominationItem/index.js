import './index.css'

const DenominationItem = props => {
  const {item, performSubtract} = props
  const {value} = item
  const subtracted = () => {
    performSubtract(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={subtracted}>
        {item.value}
      </button>
    </li>
  )
}

export default DenominationItem
