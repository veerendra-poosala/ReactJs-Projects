import {Component} from 'react'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'
import './index.css'

class TimeLineView extends Component {
  constructor(props) {
    super(props)
    const {timelineItemsList} = this.props

    this.state = {
      timelineItemsList,
    }
  }

  render() {
    const {timelineItemsList} = this.state

    return (
      <div className="course-timeline-card">
        <h1 style={{alignSelf: 'center', color: '##171f46', fontSize: '24px'}}>
          MY JOURNEY OF CCBP 4.0
        </h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(timelineItem => {
            if (timelineItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard
                  key={timelineItem.id}
                  timelineItem={timelineItem}
                />
              )
            }
            return (
              <CourseTimeLineCard
                key={timelineItem.id}
                timelineItem={timelineItem}
              />
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimeLineView
