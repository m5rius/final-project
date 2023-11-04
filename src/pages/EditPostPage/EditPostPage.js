import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '../../components/Container/Container'
import { API_URL } from '../../config'
import { Oval } from 'react-loader-spinner'

const EditPostPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const[isLoading, setIsLoading] = useState(true)
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[selectedUser, setSelectedUser] = useState('')
    const[users,setUsers] = useState([])


    useEffect(() => {
        fetch(`${API_URL}/posts/${id}`)
        .then(res => res.json())
        .then(postData => {

            const { title, body, userId } = postData
            setTitle(title)
            setBody(body)
            setSelectedUser(userId)
        })
    }, [id])
  
    useEffect(() => {
      fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(usersData => {
        setUsers(usersData)
        setSelectedUser(usersData[0].id)
        setIsLoading(false)
      })
    }, [])
  
    const titleHandler = event => setTitle(event.target.value)
    const bodyHandler = event => setBody(event.target.value)
    const userHandler = event => setSelectedUser(event.target.value)
  
    const editPostHandler = event => {
      event.preventDefault()
      setIsLoading(true)
  
      const editPost = {
        id: Number(id),
        title: title,
        body: body,
        userId: Number(selectedUser),
      }
  
      console.log(editPost)
  
      fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(editPost)
      })
      .then(res => res.json())
      .then(data => {
        navigate('/posts/' + id)
        console.log(data)
      })
    }
  return (
    <Container>
        <h1>Edit Post</h1>

        {isLoading ? (
          <Oval></Oval>
        
        ) : (
        <form onSubmit={editPostHandler}>
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
            <select onChange={userHandler} value={selectedUser}>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
        </div>

        <button type='submit'>Edit</button>
        </form>
        )}
    </Container>
  )
}

export default EditPostPage