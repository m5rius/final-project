import React from 'react'
import AlbumItem from '../AlbumItem/AlbumItem'
import styles from './AlbumsList.module.css'

const AlbumsList = ({ albums }) => {
    let albumsElement = <p>No albums...</p>

    if (albums.length > 0) {
        albumsElement = (
          <div className={styles.albumsListWrapper}>
            <ul className={styles.albumsList}>
                {albums.map((album) => <AlbumItem key={album.id} data={album}/>)}
            </ul>
          </div>
        )
    }
  return (
    <>
      {albumsElement}
    </>
  )
}

export default AlbumsList