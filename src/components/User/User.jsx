import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams();
  return (
    <div className='text-3xl text-white bg-gray-600 p-4'>User: {userid} </div>
  )
}

export default User


// useParams is a hook that allows you to access the URL parameters in your component.