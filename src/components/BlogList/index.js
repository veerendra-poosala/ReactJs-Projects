import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/TailSpin'

import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsList: []}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log('response', response)
    // const statusCode = await response.status
    const modifiedBlogsList = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState(prev => ({
      blogsList: [...prev.blogsList, ...modifiedBlogsList],
      isLoading: false,
    }))
  }

  render() {
    const {isLoading, blogsList} = this.state
    // console.log(blogsList)

    return (
      <div>
        {isLoading === true ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsList.map(blog => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
