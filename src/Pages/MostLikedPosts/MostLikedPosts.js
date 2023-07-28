import React, {useState, useEffect} from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import Axios from 'axios'
import Posts from '../../Components/Posts/Posts'
import { baseUrl } from '../../utils/config'
const MostLikedPost = () => {
  const [posts, setPosts] = useState([])

  // Fetching Author Posts From Server
  const fetchAuthorPosts = async () => {
    const fetchAllPosts = await Axios.get(`${baseUrl}/posts`)
    const datas = await fetchAllPosts.data

    const allPosts = datas.sort((a, b) => {
      return b.numLikes - a.numLikes
    })

    const mostLikedPosts = allPosts.slice(0, 10)

    // Setting comments state
    setPosts(mostLikedPosts)
  }

  useEffect(() => {
    fetchAuthorPosts()
  }, [])

  return (
    <div>
      <NavigationBar />
      <h4 className="text-white mb-5 mt-4 text-center">
        Top 10 Most Liked Posts
      </h4>
      <Posts posts={posts} />
    </div>
  )
}
export default MostLikedPost
