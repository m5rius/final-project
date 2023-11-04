import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'

const CollectionPage = () => {

  const { id } = useParams()

  const [collection, setCollection] = useState('')
  const [collectionDeleted, setCollectionDeleted] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/collections/${id}?_embed=photos&_expand=user`)
    .then(res => res.json())
    .then(collectionData => {
      setCollection(collectionData)
      
    })
  }, [id])

  if (!collection){
    return ''
  }
  console.log(collection)

  const removeCollectionHandler = () => {
    fetch(`${API_URL}/collections/${id}`, {
      method: 'DELETE',
    })
  
    setCollectionDeleted(true)
    }

  return (
    <Container>
      {collectionDeleted ? (
        <>
          <p>Collection was deleted</p>
          <Link to={'/collections'}>Go back to collections page</Link>
        </>
      ) : (
        <>
          <h1 className='album-page-text'>Collection Page</h1>
          <h2 className='title-text'>{collection.title.toUpperCase()}</h2>
          <h2 className='author-text'>Created by <Link to={`/users/${collection.user.id}`}>{collection.user.name}</Link></h2>
          <div className="album-page-buttons">
            <Link className="edit-album-link" to={`/edit-collection/${id}`}>Edit Collection</Link>
              <button className="delete-album-btn" onClick={removeCollectionHandler}>Delete Collection</button>
          </div>
          <h2 className='photos-text'>Photos</h2>
          <ul className='album-list'>{collection.photos.map((photo, index) => {
            return <li className='album-item' key={index}><div className='photo-title'> <Link className='photo-link' to={`/photos/${photo.id}`}> {photo.title}</Link></div><img alt='/' src={photo.url}></img></li>
          })}</ul>
        </>
      )}

    </Container>
  )
}

export default CollectionPage