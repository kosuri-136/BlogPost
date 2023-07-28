import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Axios from 'axios'
import { baseUrl } from '../../utils/config'
const MostCommentedPosts = () => {
  const [posts, setPosts] = useState([])

  // Fetching Author Posts From Server
  const fetchAuthorPosts = async () => {
    const fetchAllPosts = await Axios.get(`${baseUrl}/posts`)
    const datas = await fetchAllPosts.data

    const allPosts = datas.sort((a, b) => {
      return b.numComments - a.numComments
    })

    const mostCommentedPosts = allPosts.slice(0, 10)

    // Setting comments state
    setPosts(mostCommentedPosts)
  }

  useEffect(() => {
    fetchAuthorPosts()
  }, [])

  const getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      background: '#f4f4f4',
    }
  }

  const CommentStyle = () => {
    return {
      background: '#F8D7DA',
      color: '#000000',
      border: 'none',
      float: 'right',
      padding: '5px 9px',
      fontColor: 'white',
    }
  }

  const dateStyle = () => {
    return {
      background: '#CCE5FF',
      color: '000000',
      border: 'none',
      float: 'right',
      padding: '5px 9px',
      fontColor: 'white',
      marginRight: '7rem',
    }
  }

  return (
    <div>
      <NavigationBar />
      <h4 className="text-white mb-5 mt-4 text-center">
        Top 10 Most Commented Posts
      </h4>
      <div className="container">
        {posts.map(post => {
          return (
            <div
              key={post.id}
              style={getStyle()}
              className="border border-primary rounded m-3"
            >
              <Link to={`/posts/${post.id}`}>
                <h5 className="text-dark">
                  <span>{post.title}</span>
                  <span style={CommentStyle()}>
                    Comments {post.numComments}
                  </span>
                  <span style={dateStyle()}>
                    {new Date(post.datePublished).toDateString()}
                  </span>
                </h5>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MostCommentedPosts
