import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Container from '../../components/Container/Container'
import './Pages.css'
import { API_URL } from '../../config'
import styles from './AlbumPage.module.css'
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

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

    let noAlbumElement = (
      <>
        <p>Album was deleted</p>
        <Link Link to={'/albums'}>Go back to albums page</Link>
      </>
    )

    let albumTopInfoElement = (
      <>
        <h1 className={styles.albumTitle}>{album.title.toUpperCase()}</h1>
          <h2 className={styles.albumOwnerText}>Collection owned by
          <Link to={`/users/${album.user.id}`}>{album.user.name}</Link>
          </h2>
          <div className={styles.buttons}>
            <div className='edit-btn-wrapper'>
            <FiEdit></FiEdit><Link className='edit-btn' to={`/edit-album/${id}`}>Edit</Link>
            </div>
            <div className='remove-btn-wrapper'>
            <TiDeleteOutline></TiDeleteOutline><button className='remove-btn' onClick={removeAlbumHandler}>Delete</button>
            
            </div>
          </div>
      </>
    )

    let albumItemElement = (
      <>
      <ul className={styles.albumList}>
        {album.photos.map((photo, index) => {
        return (
          <li className={styles.albumItem} key={index}>
            <Link className={styles.photoLink} to={`/photos/${photo.id}`}>
              <div className={styles.albumPhotoContent}>
                <div className={styles.albumPhotoWrapper}>
                  <img alt='/' src={photo.thumbnailUrl}></img>
                </div>

                <div className={styles.albumPhotoTitle}>
                  {photo.title}
                </div>
              </div>
            </Link>
          </li>
        )
        })}
      </ul>
      </>
    )

  return (
    <Container>
      {albumDeleted ? (
        {noAlbumElement}
      ) : (
        <>
          {albumTopInfoElement}
          {albumItemElement}
        </>
      )}

    </Container>
  )
}

export default AlbumPage