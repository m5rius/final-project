import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'

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
        <h1>Photo - {photo.title}</h1>
        <img src={photo.thumbnailUrl} alt=''></img>

    </Container>
  )
}

export default PhotoPage