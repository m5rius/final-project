import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import styles from './PhotoPage.module.css'

const PhotoPage = () => {

    const { id } = useParams()

    const [photo, setPhoto] = useState('')

    useEffect(() => {
        fetch(`${API_URL}/photos/${id}?_expand=album`)
        .then(res => res.json())
        .then(photoData => {
          setPhoto(photoData)
        })
    }, [id])

    if(!photo){
        return ''
    }

    console.log(photo)

  return (
    <Container>
      <div className={styles.photoItemWrapper}>
        <div className={styles.photoItem}>
          <div className={styles.photoWrapper}>
            <img src={photo.thumbnailUrl} alt=''></img>
          </div>
          <h1 className={styles.photoTitle}>{photo.title}</h1>
          </div>

      </div>
    </Container>
  )
}

export default PhotoPage