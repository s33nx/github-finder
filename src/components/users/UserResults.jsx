import React from 'react'
import Spinner from '../layouts/Spinner'
import { useEffect, useContext } from 'react'
import UserItems from './UserItems'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
   const {users, loading, fetchUsers} = useContext(GithubContext)
    useEffect(() => {
        fetchUsers()
    }, [])

   

    if(loading){
        return <div>
            <Spinner />
        </div>
    }else{
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <UserItems className user={user} avatar_url={user.avatar_url} />
                            
                        </div>
                    </div>
                ))}
            </div>
        )
    }
  
}

export default UserResults