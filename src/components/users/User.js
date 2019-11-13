import React, { useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({match}) => {

    const githubContext = useContext(GithubContext)
    const {getUser,loading,user,repos,getUserRepos} = githubContext

    useEffect(() =>{
        getUser(match.params.login)
        getUserRepos(match.params.login)

        // eslint-disable-next-line
    },[] );

    

        const {name,avatar_url,location,bio, company,blog,html_url,followers,following,public_repos,public_gists,hireable} = user


        if(loading) return<Spinner />
        
        return (
            <>
             <Link to="/" className="btn btn-light">返回</Link>   
            是否在职:{''}{hireable?(
                <i className="fa fa-check text-success"></i>
                ): (
                    <i className="fa fa-times-circle text-danger"></i>
                )}
                <div className="grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width:'150px'}} alt=""/>
                        <h1>{name}</h1>
                        <p>所在地：{location}</p>
                    </div>
                    <div>
                        {bio &&(
                            <>
                                <h3>个人简介</h3>
                                <p>{bio}</p>
                            </>
                        )}
                        <a href={html_url} className="btn btn-dark my-1">访问</a>
                        <ul>
                            <li>
                                {company && (
                                    <>
                                       <strong>公司:</strong>{company} 
                                    </>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <>
                                       <strong>网址:</strong>{blog} 
                                    </>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers:{followers}
                    </div>
                    <div className="badge badge-success">
                        Following:{following}
                    </div>
                    <div className="badge badge-light">
                        Public Repos:{public_repos}
                    </div>
                    <div className="badge badge-dark">
                        Public Gists:{public_gists}
                    </div>
                </div>
                <Repos repos={repos}/>
            </>
        )
    
}



export default User
