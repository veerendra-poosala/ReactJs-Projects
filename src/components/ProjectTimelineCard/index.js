import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {timelineItem} = props
  const {
    categoryId,
    description,
    duration,
    id,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = timelineItem

  return (
    <>
      <img
        className="timeline-item-project-image"
        alt="project"
        src={imageUrl}
      />
      <div className="project-title-time-card">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-time-card">
          <AiFillCalendar style={{fontSize: '18px', marginRight: '6px'}} />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        className="visit-link"
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
