import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeAlbumItem.module.css'
import { FiImage } from "react-icons/fi";


const HomeAlbumItem = ({data}) => {
  const { title, id, user, photos } = data

  let imageElement = ''

  if (photos.length > 0) {
    const randomNr = Math.floor(Math.random() * photos.length)
    const randomImg = photos[randomNr]
    const randomUrl = randomImg.thumbnailUrl
    console.log(title)

    imageElement = (
      <div className={styles.albumImageWrapper}>
        <Link to={`/albums/${id}`}><img src = {randomUrl} alt = '/'/></Link>
      </div>
    ) 
  }

  
  return (
    <>
      <li className={styles.albumsListItem}>
        {imageElement}
        <div className={styles.albumDescription}>
          <div className={styles.albumNameAndPhotos}>
            <div className={styles.albumName}>
              <Link to={`/albums/${id}`}>{title}</Link>
            </div>

            <div className={styles.photosLengthAndIcon}>
              <FiImage></FiImage>{photos.length} 
            </div>
            
          </div>


          <div className={styles.userName}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </div>

        </div>
      </li>
    </>
    
  )
}

export default HomeAlbumItem