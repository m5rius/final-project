import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import { Oval } from "react-loader-spinner"
import styles from './PostPage.module.css'

const PostPage = () => {

  const { id } = useParams()

  const [post, setPost] = useState('')
  const[postDeleted, setPostDeleted] = useState(false)

  useEffect(() => {
      fetch(`${API_URL}/posts/${id}?_embed=comments&_expand=user`)
      .then(res => res.json())
      .then(postData => {
        setPost(postData)
      })
  }, [id])

  if (!post)
  return(
    <Oval
    height={80}
    width={80}
    color="black"
    wrapperStyle={{
      disply: 'flex',
      justifyContent: 'center'
    }}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="white"
    strokeWidth={2}
    strokeWidthSecondary={2}
    />

  ) 

  if(Object.keys(post).length === 0){
    return 'Something went wrong...'
  }

  const removePostHandler = () => {
  fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  })

  setPostDeleted(true)
  }

  return (
    <Container>
      {postDeleted ? (
        <>
          <p>Post was deleted</p>
          <Link to={'/posts'}>Go back to posts page</Link>
        </>
      ) : (
        <>
          <h1 className="post-page-text">Post Page</h1>
          <h2 className="title-text">{post.title.toUpperCase()}</h2>
          <h2 className="body-text">{post.body}</h2>
          <img src={post.imageUrl} alt="/"></img>
          <h2 className="author-text">Author: <Link to={`/users/${post.user.id}`}> {post.user.name}</Link></h2>
          <div className="post-page-buttons">
            <Link className="edit-post-link" to={`/edit-post/${id}`}>Edit Post</Link>
            <button className="delete-post-btn" onClick={removePostHandler}>Delete Post</button>
          </div>
          <h2 className="comments-text">Comments: </h2>
          <ul className="comments-list">{post.comments.map((comment, index ) => {
            return <li className="comments-item" key={index}> <div className="comments-name">{comment.name.toUpperCase()}</div> <div className="comments-body">{comment.body}</div><div className="comment-email">{comment.email}</div></li>
          })}</ul>
        </>

      )}
    </Container>
  )
}

export default PostPage