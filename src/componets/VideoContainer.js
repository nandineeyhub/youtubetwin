import React, { useState, useEffect } from 'react'
import { VID_LIST } from '../constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
    const [videos, setVideos] =  useState([]);
    useEffect(()=>{
        getVideos();
    }, [])
    async function getVideos(){
        const data = await fetch(VID_LIST)
        const datajson = await data.json();
        console.log(datajson);
        setVideos(datajson.items)
    }
  return (
    <div className='flex flex-wrap px-20'>
        {
            videos.map((video)=>{
              return <Link to={"/watch?v="+ video.id}><VideoCard key={video.id} info = {video}/></Link>
            })
        }
       
    </div>
  )
}

export default VideoContainer