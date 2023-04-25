import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className=' p-5 w-60 shadow-lg '>
      <ul>
       <Link to="/"> <li className=' my-2'>Home</li> </Link>
        <li  className=' my-2'>Shorts</li>
        <li  className=' my-2'>Live</li>
      </ul>
      <h1 className='font-bold py-5'>Library</h1>
      <ul>
        <li  className=' my-2'>Subscription</li>
        <li  className=' my-2'>Liked Videos</li>
        <li  className=' my-2'>Watch Later</li>
        <li  className=' my-2'>History</li>
        <li  className=' my-2'>Browse Channels</li>
      </ul>
    </div>
  )
}

export default Sidebar