import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const CreatePostPage = () => {
  const[title,setTitle] = useState('')
  const[body,setBody] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const[selectedUser, setSelectedUser] = useState('')
  const[users,setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API_URL}/users`)
    .then(res => res.json())
    .then(usersData => {
      setUsers(usersData)
      setSelectedUser(usersData[0].id)
    })
  }, [])

  const titleHandler = event => setTitle(event.target.value)
  const bodyHandler = event => setBody(event.target.value)
  const userHandler = event => setSelectedUser(event.target.value)
  const imageUrlHandler = event => setImageUrl(event.target.value)

  const newPostHandler = async event => {
    event.preventDefault()

    const newPost = {
      title: title,
      body: body,
      imageUrl: imageUrl,
      userId: Number(selectedUser),
    }

    const res = await axios.post(`${API_URL}/posts`, newPost)

    if (res.statusText === 'Created'){
      navigate('/posts/' + res.data.id)
      toast.success(`Post was created (${res.data.title})`)
    } else {
      console.error('Something went wrong...')
    }

  }
  
  return (
    <Container>
      <h1 className='create-title'>Create New Post</h1>

      {users.length > 0 ? (
        <div className='form-wrapper'>
          <form className='form' onSubmit={newPostHandler}>
            <div className='form-control'>
              <label htmlFor='title'>Title: </label>
              <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={titleHandler}
              />
            </div>

            <div className='form-control'>
              <label htmlFor='body'>Content: </label>
              <textarea
              name='body'
              id='body'
              value={body}
              onChange={bodyHandler}
              />
            </div>

            <div className='form-control'>
              <label htmlFor='select'>Select User:</label>
              <select id='select' onChange={userHandler} value={selectedUser}>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
              </select>
            </div>

            <div className='form-control'>
              <label htmlFor='imageUrl'>Image:</label>
              <input
              type ='url'
              name ='imageUrl'
              id ='imageUrl'
              value ={imageUrl}
              onChange ={imageUrlHandler}
              />
            </div>
            <div className='submit-btn-wrapper'>
              <button className='submit-btn' type='submit'>Create</button>
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </Container>
  )
}

export default CreatePostPage