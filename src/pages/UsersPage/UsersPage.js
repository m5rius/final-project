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
      <h1 className={styles.allUsersText}>All Users</h1>
      <div className={styles.buttons}>
        <div className='add-btn-wrapper'>
          <Link className='add-btn' to='/create-user'> Add User </Link>
        </div>
      </div>
      <UsersList users={users}/>
    </Container>
  )
}

export default UsersPage