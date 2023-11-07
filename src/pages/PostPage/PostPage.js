import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import { Oval } from "react-loader-spinner"
import styles from './PostPage.module.css'
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const PostPage = () => {

  const { id } = useParams()

  const [post, setPost] = useState('')
  const [postDeleted, setPostDeleted] = useState(false)

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

  let commentsElement = ''

  if (post.comments.length > 0) {
    commentsElement = (
        <div className={styles.commentsContentWrapper}>
        <h2 className={styles.commentsText}>Comments</h2>
        <ul className={styles.commentsList}>{post.comments.map((comment, index ) => {
          return (
            <li className={styles.commentItem} key={index}>
              <div className={styles.commentTitle}>{comment.name.toUpperCase()}</div>
              <div className={styles.commentBody}>{comment.body}</div>
              <div className={styles.commentEmail}>{comment.email}</div>
            </li>
          )
        })}
        </ul>
      </div>
      )

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
        <div className={styles.postContentWrapper}>

          <h1 className={styles.postTitle}>{post.title.toUpperCase()}</h1>

          <div className={styles.buttons}>
              <div className="edit-btn-wrapper">
                <FiEdit></FiEdit>
                <Link className="edit-btn" to={`/edit-post/${id}`}>Edit</Link>
              </div>
              <div className="remove-btn-wrapper">
                <TiDeleteOutline></TiDeleteOutline>
                <button className="remove-btn" onClick={removePostHandler}>Remove</button>
              </div>
          </div>

          <div className={styles.postImageWrapper}>
            <img src={post.imageUrl} alt="/"></img>
          </div>

          <h2 className={styles.postBody}>{post.body}</h2>

          <div className={styles.postAuthor}>
            <div className={styles.profilePictureWrapper}>
                <img src={post.user.picture} alt="/"></img>
            </div>
            <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
          </div>
        </div>
        {commentsElement}
        </>

      )}
    </Container>
  )
}

export default PostPage