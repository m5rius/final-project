import React from 'react'
import { Link } from 'react-router-dom'

const AlbumItem = ({data}) => {
  const { title, id, user, photos } = data

  let imageElement = ''

  if (photos.length > 0) {
    const randomNr = Math.floor(Math.random() * photos.length)
    const randomImg = photos[randomNr]
    const randomUrl = randomImg.thumbnailUrl
    console.log(title)

    imageElement = <img src = {randomUrl} alt = '/'/>
  }

  
  return (
    <>
      <li className='albums-item'>
        <div className='album-name'><Link to={`/albums/${id}`}>{title} </Link> ({photos.length} photos)</div>
        <div className='album-author-text'> <Link to={`/users/${user.id}`}>{user.name}</Link></div>
        <div className='album-photo-wrapper'>
          {imageElement}
        </div>
      </li>
    </>
    
  )
}

export default AlbumItem