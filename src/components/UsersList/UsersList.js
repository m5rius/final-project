import React from 'react'
import UserItem from '../UserItem/UserItem'

const UsersList = ({ users }) => {
    let usersElement = <p>No users...</p>

    if (users.length > 0){
        usersElement = (
            <ul className='users-list'>
                {users.map((user) => <UserItem key={user.id} data={user} />)}
            </ul>
        )
    }
  return (
    <div>
        {usersElement}
    </div>
  )
}

export default UsersList