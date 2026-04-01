import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || 'https://api.github.com'
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const buildHeaders = () => {
    const headers = {
        Accept: 'application/vnd.github.v3+json',
    }

    if (GITHUB_TOKEN) {
        headers.Authorization = `token ${GITHUB_TOKEN}`
    }

    return headers
}

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    // get initial users (optional)
    const fetchUsers = async () => {
        setLoading()
        try {
            const response = await fetch(`${GITHUB_URL}/users`, {
                headers: buildHeaders(),
            })
            if (!response.ok) {
                throw new Error(`fetchUsers failed: ${response.status} ${response.statusText}`)
            }
            const data = await response.json()
            dispatch({ type: 'GET_USERS', payload: Array.isArray(data) ? data : [] })
        } catch (error) {
            console.error('Error fetching users:', error)
            dispatch({ type:'GET_USERS', payload: [] })
        }
    }

    const searchUsers = async (text) => {
        setLoading()
        try {
            const response = await fetch(`${GITHUB_URL}/search/users?q=${encodeURIComponent(text)}`, {
                headers: buildHeaders(),
            })

            if (!response.ok) {
                throw new Error(`searchUsers failed: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()
            dispatch({
                type: 'GET_USERS',
                payload: Array.isArray(data.items) ? data.items : [],
            })
        } catch (error) {
            console.error('Error searching users:', error)
            dispatch({ type:'GET_USERS', payload: [] })
        }
    }

    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                fetchUsers,
                searchUsers,
                clearUsers,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext