import React from 'react'
import spinner from './spinner.gif'

const Spinner = props => {
    return (
        
        <>
         <img src={spinner} alt="loading..." style={{ display: 'block', width: '200px', margin: 'auto' }} />  
        </>
    )
}


export default Spinner
