import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog

  console.log(title, description, publishedDate, props)

  return (
    <li className="blog-item-bg-container">
      <div className="blog-item-title-container">
        <h1 className="blog-item-title">{title}</h1>
        <p className="blog-item-published-date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
    </li>
  )
}

export default BlogItem
