import React from 'react'
import PropTypes from 'prop-types'
const UserItems = ({user, avatar_url}) => {

  return (
    <div className="flex items-center gap-4">
        <img src={avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <h2 className="card-title">{user.login}</h2>
    </div>
  )
}

export default UserItems