import { createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";
import { type } from "@testing-library/user-event/dist/type";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN 

export const GithubProvider = ({children}) => {
    const initialState = {
        users:[],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    //get initial users (testing)
         const fetchUsers = async () => {
        setLoading( )
        try {
            const response = await fetch(`${GITHUB_URL}/users`,{
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                }
            })
            const data = await response.json()
            dispatch({ type: 'GET_USERS', payload: Array.isArray(data) ? data : [] })
        } catch (error) {
            console.error('Error fetching users:', error)
           dispatch({
            type:'GET_USERS',
            payload: [],
           })
        }
    }

const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider value={
        {users: state.users, loading: state.loading, fetchUsers}
    }>
        {children}
    </GithubContext.Provider>
  
}
export default GithubContext