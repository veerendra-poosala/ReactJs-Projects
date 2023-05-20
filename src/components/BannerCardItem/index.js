import './index.css'

const BannerCard = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  console.log(headerText, description, className)
  return (
    <li className={className}>
      <div className="card-container">
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button className="show-more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
