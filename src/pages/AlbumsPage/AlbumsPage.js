import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import AlbumsList from '../../components/AlbumsList/AlbumsList'
import './AlbumsPage.css'
import { API_URL } from '../../config'
import { Link } from 'react-router-dom'

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
      fetch(`${API_URL}/albums?_expand=user&_embed=photos`)
      .then(res => res.json())
      .then(albums => {
        setAlbums(albums)
      })
    }, [])

  return (
    <Container>
        <h1 className='albums-page-text'>Albums page</h1>
        <Link className='create-new-post-link' to='/create-album'> Create new Album </Link>
        <h2 className='all-albums-text'>All Albums</h2>
        <AlbumsList albums={albums}/>
    </Container>
  )
}

export default AlbumsPage