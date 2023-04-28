import { useDispatch, useSelector } from 'react-redux'
import { toggle } from './utils/appSlice';
import { useEffect, useState } from 'react';
import { SEARCH_API } from '../constants';
import {cacheResult} from './utils/searchSlice';


const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  
  const searchCache =  useSelector(store => store.search)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else{
        getSuggetions()
      }},200);
    return()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  async function getSuggetions(){
    
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
   
    setSuggestions(json[1])
    dispatch(cacheResult(
      {[searchQuery] : json[1]}
    ))
  }

  return (
    <div className='grid grid-flow-col px-3 py-5 m-2 shadow-lg'> 
      <div className='flex col-span-1'>
        
       <img onClick={()=>{
          dispatch(toggle());
       }} className=' h-8' alt= "menu" src='https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png'></img>
       <img className=' h-14 ml-4 mt-[-10px]' alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'></img>

      </div>
      <div className='col-span-10'>
        <div><input className='w-1/2 p-2 ml-5  border border-gray-400 rounded-l-full ' type='text' placeholder='Search' 
        value={searchQuery} 
        onChange={(e)=>{
           setSearchQuery(e.target.value);
        }}
       />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-300'>🔍</button></div>
        <div className='bg-white py-3 px-3 w-[37rem] absolute shadow-lg '>
           <ul>
            {
              suggestions.map((s)=>{
                return <li onClick={()=>setSearchQuery(s)
                } className=' hover:bg-gray-100' key={s}>{s}</li>
              })
             }
           </ul>
        </div>
      </div>
      <div className='col-span-1'>
        <img className=' h-8' alt="user" src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'/>
      </div>
    </div>
  )
}

export default Head