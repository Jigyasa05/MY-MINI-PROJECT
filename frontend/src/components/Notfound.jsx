import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
        <p className='display-1 fw-bold mt-5'> error</p>
        <Link className='btn btn-primary mt-5' to="/">Back to Homepage</Link>
        <img src="funny.gif" alt="" />
        
        </div>
  )
}

export default NotFound;