import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 py-2 px-5 m-3 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button