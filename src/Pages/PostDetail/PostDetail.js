import React, {useState, useEffect} from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Axios from 'axios'
import Comments from '../../Components/Comments/Comments'
import { baseUrl } from '../../utils/config'
const PostDetail = ({match}) => {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const fetchOnePost = async () => {
    const fetchPost = await Axios.get(`${baseUrl}/posts/${match.params.postId}`)
    const post = await fetchPost.data
    setPost(post)
  }

  const fetchComments = async () => {
    const fetchComments = await Axios.get(`${baseUrl}/comments`)
    const comments = await fetchComments.data
    const perticularPostComments = comments.filter(
      comment => comment.postId === parseInt(match.params.postId),
    )
    setComments(perticularPostComments)
  }

  useEffect(() => {
    fetchOnePost()
    fetchComments()
  }, [])

  const getStyle = () => {
    return {
      width: '80vw',
      height: '67vh',
      padding: '20px',
      backgroundColor: 'SKYBLUE',
      border: 'none',
      margin: '15px',
      textAlign: 'center',
    }
  }

  return (
    <div>
      <NavigationBar />
      <h4 className="text-white mb-4 text-center">Post Details</h4>
      <div className="card mx-auto" style={getStyle()}>
        <h3 className="title">{post.title}</h3>
        <p>{new Date(post.datePublished).toDateString()}</p>
        <p>
          LIKES (<i className="fa fa-thumbs-up fa-1x"></i>) : {post.numLikes}
        </p>
        <p className="text-justify">{post.description}</p>
      </div>
      <Comments comments={comments} />
    </div>
  )
}

export default PostDetail
