import { Link } from "react-router-dom"

const UserItem = ({data}) => {

  const { name, posts, id, picture } = data

  return (
    <li className="users-list-item"> 
    <div className="profile-picture-wrapper">
      <img className="profile-picture" src={picture} alt="/"></img>
    </div>
      <div className="user-name"><Link to={`/users/${id}`}>{name}</Link></div>
      <div className="posts-count">({posts.length} posts)</div>
    </li>
    
  )
}

export default UserItem