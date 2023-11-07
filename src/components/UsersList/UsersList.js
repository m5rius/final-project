import React from 'react'
import UserItem from '../UserItem/UserItem'
import styles from './UsersList.module.css'

const UsersList = ({ users }) => {
    let usersElement = <p>No users...</p>

    if (users.length > 0){
        usersElement = (
            <ul className={styles.usersList}>
                {users.map((user) => <UserItem key={user.id} data={user} />)}
            </ul>
        )
    }

  return (
    <>
        <ul className={styles.usersListTop}>
            <li className={styles.listItem}>Name</li>
            <li className={styles.listItem}>User Name</li>
            <li className={styles.listItem}>City</li>
            <li className={styles.listItem}>Posts</li>
        </ul>
        {usersElement}
    </>
  )
}

export default UsersList