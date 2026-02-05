import React from 'react'
import Spinner from '../layouts/Spinner'
import { useEffect, useState } from 'react'
import UserItems from './UserItems'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                }
            })
            const data = await response.json()
            setUsers(Array.isArray(data) ? data : [])
            setLoading(false)
        } catch (error) {
            console.error('Error fetching users:', error)
            setUsers([])
            setLoading(false)
        }
    }

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