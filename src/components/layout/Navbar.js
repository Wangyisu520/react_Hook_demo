import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar =({icon,title}) =>{

        return (
            <nav className="navbar bg-primary">
                <h1> <i className={icon}></i> {title}</h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps ={
    title:"Github Finder",
    icon:"fa fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar


