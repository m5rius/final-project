import { Link } from "react-router-dom"
import styles from './PostItem.module.css'

const PostItem = ({data}) => {
    const { title, id, comments, user, imageUrl, body } = data
    console.log(data)

    let postItemElement = (
      <>
        <div className={styles.postImageWrapper}>
          <img src={imageUrl} alt="/"></img>
        </div>

        <div className={styles.postContentWrapper}>
          <div className={styles.postTitle}><Link to={`/posts/${id}`}>{title}</Link></div>

          <span className={styles.postBody}>{body.substring(0,150)}...</span>

          <div className={styles.postComments}>({comments.length} comments)</div>

          <div className={styles.postImageAndUser}>
            <div className={styles.postUserImageWrapper}>
              <img src={user.picture} alt="/"></img>
            </div>
            <div className={styles.postUserName}><Link to={`/users/${user.id}`}>{user.name}</Link></div>
          </div>

        </div>
      </>
    
    )

  return (
    <li className={styles.postListItem}>
      {postItemElement}
    </li>
  )
}

export default PostItem