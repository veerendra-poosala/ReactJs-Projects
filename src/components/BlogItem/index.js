import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = blog

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="blog-item-container">
        <div className="image-container">
          <img alt={title} className="blog-item-image" src={imageUrl} />
        </div>
        <div className="blog-item-text-container">
          <p className="blog-item-topic">{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="blog-item-user-details">
            <img
              className="blog-item-avatar-image"
              alt={author}
              src={avatarUrl}
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
