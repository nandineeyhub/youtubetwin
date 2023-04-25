import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from './utils/appSlice';


const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'> 
      <div className='flex col-span-1'>
        
       <img onClick={()=>{
          dispatch(toggle());
       }} className=' h-8' alt= "menu" src='https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png'></img>
       <img className=' h-14 ml-4 mt-[-10px]' alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'></img>

      </div>
      <div className='col-span-10'>
        <input className='w-1/2 p-2 ml-5  border border-gray-400 rounded-l-full ' type='text' placeholder='Search'/>
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-300'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className=' h-8' alt="user" src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'/>
      </div>
    </div>
  )
}

export default Head