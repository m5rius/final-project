import { Link } from "react-router-dom"
import styles from './UserItem.module.css'

const UserItem = ({data}) => {

  const { name, posts, id, picture, address, username } = data
  console.log(data)

  return (
    <li className={styles.usersListItem}> 

      <div className={styles.profileAndNameWrapper}>
        <Link to={`/users/${id}`}>
          <img src={picture} alt="/"></img>
        </Link>
        <div className={styles.userName}><Link to={`/users/${id}`}>{name}</Link></div>
      </div>

      <div className={styles.userNickname}>{username}</div>
      <div className={styles.city}>{address.city}</div>
      <div className={styles.postsCount}>{posts.length} posts</div>

    </li>
    
  )
}

export default UserItem