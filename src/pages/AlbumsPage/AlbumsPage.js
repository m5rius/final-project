import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import AlbumsList from '../../components/AlbumsList/AlbumsList'
import { API_URL } from '../../config'
import { Link } from 'react-router-dom'
import styles from './AlbumsPage.module.css'

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
      fetch(`${API_URL}/albums?_expand=user&_embed=photos`)
      .then(res => res.json())
      .then(albums => {
        setAlbums(albums)
      })
    }, [])
    console.log(albums)

  return (
    <Container>
        <h1 className={styles.albumsPageText}>NFT Collections</h1>
        <div className={styles.buttons}>
          <div className='add-btn-wrapper'>
            <Link className='add-btn' to='/create-album'> Add Collection </Link>
          </div>
        </div>
        <AlbumsList albums={albums}/>
    </Container>
  )
}

export default AlbumsPage