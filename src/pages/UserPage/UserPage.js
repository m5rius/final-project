import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"

const UserPage = () => {

  const { id } = useParams(``)

  const [user, setUser] = useState(null)
  const [userDeleted, setUserDeleted] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/users/${id}?_embed=posts&_embed=albums`)
    .then(res => res.json())
    .then(userData => {
      setUser(userData)
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

  return (
   <Container>
    {userDeleted ? (
      <>
      <p>User was deleted</p>
      <Link to={'/users'}>Go back to users page</Link>
      </>
    ) : (
      <>
      <h1 className="user-page">User Page</h1>
      <h2 className="user-page-name">Name - {user.name}</h2>
      <h2 className="user-page-phone">Phone - {user.phone }</h2>
      <h2 className="user-page-email">Email - {user.email}</h2>
      <div className="post-page-buttons">
        <Link className="edit-user-link" to={`/edit-user/${id}`}>Edit User</Link>
        <button className="delete-post-btn" onClick={removePostHandler}>Delete User</button>
      </div>
      <h2 className="all-posts-text">Posts:</h2>
      <ul className="posts-list">{user.posts.map((post, index) => {
        return <li className="posts-page-list-item" key={index}> <Link to={`/posts/${post.id}`}> {post.title.toUpperCase()}</Link> </li>
      })}</ul>
  
      <h2 className="all-albums-text">Albums:</h2>
      <ul className="album-list">{user.albums.map((album, index) => {
        return <li className="albums-item" key={index}> <Link to={`/albums/${album.id}`}>{album.title.toUpperCase()}</Link> </li>
      })}</ul>
      </>
    )}


   </Container>
  )
}

export default UserPage