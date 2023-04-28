import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
  return (
    <div className='p-2 m-2 w-80 cursor-pointer rounded-lg'>
        <img  className='rounded-lg' alt ="thumbnail " src={thumbnails.medium.url}></img>
        <ul>
            <li className='font-bold py-2 '>{title}</li>
            <li className='ml-1'>{channelTitle}</li>
            <div className='flex '>
              <li className='ml-1'>{statistics.viewCount} Views .</li>
              <li className='ml-1'>{statistics.likeCount} Likes</li>
            </div>
        </ul>
    </div>
  )
}

export default VideoCard