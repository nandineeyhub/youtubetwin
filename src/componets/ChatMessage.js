import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center border p-2 border-b-gray-200'>
        <img className='h-8 rounded-full' 
        alt='user' 
        src='https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg'></img>
        <span className='font-bold mr-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;