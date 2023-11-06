import React, { useEffect, useState } from 'react'
import Container from '../../components/Container/Container'
import UsersList from '../../components/UsersList/UsersList'
import { API_URL } from '../../config'
import { Link } from 'react-router-dom'
import styles from './UsersPage.module.css'

const UsersPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/users/?_embed=posts`)
    .then(res => res.json())
    .then(users => {
      setUsers(users)
    })
  }, [])
  
  return (
    <Container>
      <h2 className={styles.allUsersText}>All users</h2>
      <Link className='create-new-user-link' to='/create-user'> Create New User </Link>
      <UsersList users={users}/>
    </Container>
  )
}

export default UsersPage