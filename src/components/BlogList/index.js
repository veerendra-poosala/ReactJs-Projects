import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list-bg-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blog={eachItem} />
      ))}
    </ul>
  )
}

export default BlogsList
