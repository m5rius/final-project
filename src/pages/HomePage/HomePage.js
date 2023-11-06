import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'

const HomePage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/albums?_embed=photos`)
    .then(res => res.json())
    .then(albums => {
      setAlbums(albums)
    })
  }, [])
  console.log(albums)


  return (
    <Container>
        <h2>Home Page</h2>
    </Container>
  )
}

export default HomePage