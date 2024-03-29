import React,{useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {SEARCH_USERS,GET_USER,GET_REPOS,SET_LOADING,CLEAR_USERS} from '../types'



const GithubState = (props)=>{
    const initialState ={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState)

    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
      }

      const clearUsers = () => {
       dispatch({type:CLEAR_USERS})
      }

      const getUser = async (login) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
        dispatch({
            type:GET_USER,
            payload: res.data
        })
      }


      const setLoading = () =>{
          dispatch({type:SET_LOADING})
      }

      const getUserRepos = async (login) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
        
        dispatch({
            type:GET_REPOS,
            payload: res.data
        })
      }


    return (
        <GithubContext.Provider value={{
            users:state.users,
            user: state.user,
            repos: state.repos,
            laoding: state.laoding,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )

}

export default GithubState