import React from 'react'
import HomeAlbumItem from '../HomeAlbumItem/HomeAlbumItem'
import styles from './HomeAlbumsList.module.css'

const HomeAlbumsList = ({ albums }) => {
    let albumsElement = <p>No albums...</p>

    if (albums.length > 0) {
        albumsElement = (
          <div className={styles.albumsListWrapper}>
            <ul className={styles.albumsList}>
                {albums.map((album) => <HomeAlbumItem key={album.id} data={album}/>)}
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

export default HomeAlbumsList