import React from 'react'
import PostItem from '../PostItem/PostItem'

const PostsList = ({ posts }) => {
    let postsElement = <p>No posts...</p>
    
    if (posts.length > 0) {
      postsElement = (
        <ul className='posts-list'>
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