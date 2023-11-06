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
        <div className={styles.usersListTop}>
            <span className={styles.name}>Name</span>
            <span className={styles.userName}>User Name</span>
            <span className={styles.city}>City</span>
            <span className={styles.posts}>Posts</span>
        </div>
        {usersElement}
    </>
  )
}

export default UsersList