import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/IshitaSadaria')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // })

  return (
    <>

    <div className='text-center text-3xl text-white bg-gray-600 p-4 m-4'>Github Repos(Public): {data.public_repos} 
    <img className='m-4 justify-center' src={data.avatar_url} alt="avatar" width={300} />
    </div>
    </>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/IshitaSadaria')
    // const data = await response.json()
    return response.json();
}


//optimized routing using the useLoader hook and loader functions in the routes file to fetch data before rendering the component