import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import PostsList from '../../components/PostsList/PostsList'
import './PostsPage.css'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'


const PostsPage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/posts/?_embed=comments&_expand=user`)
    .then(res => res.json())
    .then(posts => 
      setPosts(posts))

  }, [])

  return (
    <Container>

      <Link className='create-new-post-link' to='/create-post'> Create new Post </Link>
      <h2 className='all-posts-text'>All Posts</h2>
      <PostsList posts={posts} />
    </Container>
  )
}

export default PostsPage