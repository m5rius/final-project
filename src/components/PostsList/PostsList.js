import React from 'react'
import PostItem from '../PostItem/PostItem'
import styles from './PostsList.module.css'

const PostsList = ({ posts }) => {
    let postsElement = <p>Loading posts...</p>
    
    if (posts.length > 0) {
      postsElement = (
        <ul className={styles.postsList}>
            {posts.map((post) => <PostItem key={post.id} data={post}/>)}
        </ul>
      )
    }
  return (
    <div>
        {postsElement}
    </div>
  )
}

export default PostsList