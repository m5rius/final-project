import { Link } from "react-router-dom"

const PostItem = ({data}) => {
    const { title, id, comments, user, imageUrl } = data

    let postItemElement = (
      <>
        <div className="post-title"><Link to={`/posts/${id}`}>{title}</Link></div>
        <div className="post-name"><Link to={`/users/${user.id}`}>{user.name}</Link></div>
        <div className="post-image-wrapper">
          <img src={imageUrl} alt="/"></img>
        </div>
        <div className="post-comments">({comments.length} comments)</div>
      </>
    
    )

  return (
    <li className="posts-list-item">
      {postItemElement}
    </li>
  )
}

export default PostItem