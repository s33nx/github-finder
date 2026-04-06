import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const UserInfo = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { login } = useParams()
  useEffect(()=> {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user info')
        }
        return response.json()
      })
      .then(data => {
        // Handle the fetched user data
       const user =  setUser(data)
       const loading = setLoading(false)
        const error = setError()
      })
      .catch(error => {
        // Handle any errors
          error = setError(error.message)
        const loading = setLoading(false)
      })
  }, [login])

  return (
    <>
    <img src={user?.avatar_url} alt={user?.login} className='rounded-full w-40 mb-4' />
    <h1 className='text-3xl font-bold mb-2'>{user?.name}</h1>
    <p className='text-gray-600 mb-4'>{user?.bio}</p>
    <p className='text-gray-600 mb-4'>Followers: {user?.followers}</p>
    <p className='text-gray-600 mb-4'>Following: {user?.following}</p>
    <p className='text-gray-600 mb-4'>Public Repos: {user?.public_repos}</p>
    <p className='text-gray-600 mb-4'>Location: {user?.location}</p>
    </>
  )
}

export default UserInfo