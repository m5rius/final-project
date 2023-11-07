import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import styles from './UserPage.module.css'
import { FiEdit} from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";


const UserPage = () => {

  const { id } = useParams(``)

  const [user, setUser] = useState(null)
  const [userDeleted, setUserDeleted] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/users/${id}?_embed=posts&_embed=albums`)
    .then(res => res.json())
    .then(userData => {
      setUser(userData)
      console.log(userData)
    })
  }, [id])

  if(!user) {
    return (
      <Container>
        <h2>Loading...</h2>
      </Container>
    )
  }
  
  const removePostHandler = () => {
    fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
    })

    setUserDeleted(true)
  }

  let buttonsElement = (
    <>
      <div className={styles.buttonsWrapper}>
        <div className="edit-btn-wrapper">
          <FiEdit></FiEdit>
          <Link className="edit-btn" to={`/edit-user/${id}`}>Edit</Link>
        </div>
        <div className="remove-btn-wrapper">
          <TiDeleteOutline></TiDeleteOutline>
          <button className="remove-btn" onClick={removePostHandler}>Remove</button>
        </div>
      </div>
    </>
  )

  let userPostsElement = (
    <>
      {user.posts.map((post, index) => {
        return <li className={styles.userPostsItem} key={index}> <Link to={`/posts/${post.id}`}> {post.title}</Link> </li>
      })}
    </>
  )

  let userAlbumsElement =(
    <>
      {user.albums.map((album, index) => {
      return <li className={styles.userAlbumsItem} key={index}> <Link to={`/albums/${album.id}`}>{album.title}</Link> </li>
    })}
    </>
  )

  let noUserElement = (
    <>
    <div className="deleted-wrapper">
      <p>User was deleted</p>
      <Link to={'/users'}>Go back to users page</Link>
    </div>
    </>
  )

  let userInfoElement = (
    <>
    <div className={styles.mainInfoWrapper}>

      <div className={styles.innerBox}>
        <div className={styles.innerWrapper}>
          <div className={styles.profilePictureWrapper}>
            <img className={styles.profilePicture} src={user.picture} alt="/"></img>
          </div>
          <div className={styles.innerInfoWrapper}>
            <ul className={styles.infoList}>
              <li className={styles.infoListItem}>
                <h3 className={styles.userInfoText}>User Info</h3>
              </li>

              <li className={styles.infoListItem}>
                <span>Name</span>
                <span>{user.name}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Username</span>
                <span>{user.username}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Phone</span>
                <span>{user.phone}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Email</span>
                <span>{user.email}</span>
              </li>
            </ul>
            
            {buttonsElement}
          </div>

          
        </div>
      </div>

      <div className={styles.innerBox}>
        <div className={styles.innerWrapper}>
          <div className={styles.innerInfoWrapper}>
            <ul className={styles.infoList}>
              <li className={styles.infoListItem}>
                <h3 className={styles.userInfoText}>Address Info</h3>
              </li>

              <li className={styles.infoListItem}>
                <span>City</span>
                <span>{user.address.city}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Street</span>
                <span>{user.address.street}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Suite</span>
                <span>{user.address.suite}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Zipcode</span>
                <span>{user.address.zipcode}</span>
              </li>

              <li className={styles.infoListItem}>
                <span>Website</span>
                <span>{user.website}</span>
              </li>

            </ul>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <div className={styles.innerInfoWrapper}>
            <ul className={styles.infoList}>
              <li className={styles.infoListItem}>
                <h3 className={styles.userInfoText}>Posts</h3>
              </li>

              <li className={styles.infoListItem}>
                <ul className={styles.userPostsList}>{userPostsElement}</ul>
              </li>

              <li className={styles.infoListItem}>
                <h3 className={styles.userInfoText}>Albums</h3>
              </li>

              <li className={styles.infoListItem}>
                <ul className={styles.userAlbumsList}>{userAlbumsElement}</ul>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
    </>
  )


  return (
   <Container>
    {userDeleted ? (
      <>
        {noUserElement}
      </>
    ) : (
      <>
        {userInfoElement}
      </>
    )}


   </Container>
  )
}

export default UserPage