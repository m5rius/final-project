import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Container from '../../components/Container/Container'
import './Pages.css'
import { API_URL } from '../../config'

const AlbumPage = () => {

  const { id } = useParams()

  const [album, setAlbum] = useState('')
  const [albumDeleted, setAlbumDeleted] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/albums/${id}?_embed=photos&_expand=user`)
    .then(res => res.json())
    .then(albumData => {
      setAlbum(albumData)
      
    })
  }, [id])

  if (!album){
    return ''
  }
  console.log(album)

  const removeAlbumHandler = () => {
    fetch(`${API_URL}/albums/${id}`, {
      method: 'DELETE',
    })
  
    setAlbumDeleted(true)
    }

  return (
    <Container>
      {albumDeleted ? (
        <>
          <p>Album was deleted</p>
          <Link to={'/albums'}>Go back to albums page</Link>
        </>
      ) : (
        <>
          <h1 className='title-text'>{album.title.toUpperCase()}</h1>
          <h2 className='author-text'>Collection owned by <Link to={`/users/${album.user.id}`}>{album.user.name}</Link></h2>
          <div className="album-page-buttons">
            <Link className="edit-album-link" to={`/edit-album/${id}`}>Edit Album</Link>
              <button className="delete-album-btn" onClick={removeAlbumHandler}>Delete Album</button>
          </div>
          <h2 className='photos-text'>NFT'S</h2>
          <ul className='album-list'>{album.photos.map((photo, index) => {
            return <li className='album-item' key={index}><div className='photo-title'> <Link className='photo-link' to={`/photos/${photo.id}`}> {photo.title}</Link></div><img alt='/' src={photo.thumbnailUrl}></img></li>
          })}</ul>
        </>
      )}

    </Container>
  )
}

export default AlbumPage