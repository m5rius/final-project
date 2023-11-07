import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import PostsList from '../../components/PostsList/PostsList'
import './PostsPage.css'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'
import styles from './PostsPage.module.css'


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

      <h1 className={styles.allPoststext}>Forum Posts</h1>
      <div className={styles.buttons}>
        <div className='add-btn-wrapper'>
          <Link className='add-btn' to='/create-post'> Add Post </Link>
        </div>
      </div>
      <PostsList posts={posts} />
    </Container>
  )
}

export default PostsPage