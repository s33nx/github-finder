import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const UserItems = ({user, avatar_url}) => {

  return (
    <Link to={`/users/${user.login}`}>
      <div className="flex items-center gap-4">
          <img src={avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
          <h2 className="card-title">{user.login}</h2>
      </div>
    </Link>
  )
}

export default UserItems