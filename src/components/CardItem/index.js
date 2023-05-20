import './index.css'

const TechnologyCard = props => {
  const {technology} = props
  const {title, description, imgUrl, className} = technology
  return (
    <li className={className}>
      <h1 className="technology-heading">{title}</h1>
      <p className="technology-description">{description}</p>
      <img className="technology-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default TechnologyCard
