import React from 'react'
import { useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'



const UserSearch = () => {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim() === "") {
      alert('Please enter something')
    } else {
      searchUsers(text)
      setText('')
    }
  }

  const handleClear = () => {
    clearUsers()
    setText('')
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-grey-200 input input-lg text-black"
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div className="col-span-2">
          <p className="text-center text-2xl">Found {users.length} users</p>
        </div>
      )}

      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">CLEAR</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch