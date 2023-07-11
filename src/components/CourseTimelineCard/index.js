import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineItem} = props
  const {
    categoryId,
    description,
    duration,
    id,
    tagsList,
    courseTitle,

    title,
  } = timelineItem

  return (
    <>
      <div className="project-title-time-card">
        <h1 className="project-title">{courseTitle}</h1>
        <div className="project-time-card">
          <AiFillClockCircle style={{fontSize: '18px', marginRight: '6px'}} />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>

      <ul className="tags-list-container">
        {tagsList.map(tag => (
          <div key={tag.id} className="tag-container">
            <p style={{fontSize: '16px', color: '#1e293b'}}>{tag.name}</p>
          </div>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
