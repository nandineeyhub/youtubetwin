import React, { useState, useEffect } from 'react'
import { VID_LIST } from '../constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const VideoContainer = () => {
    const [videos, setVideos] =  useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        getVideos();
    }, [])
    async function getVideos(){

        const data = await fetch(VID_LIST)
        const datajson = await data.json();
       ;
        setVideos(datajson.items);

    }
  return (
    <div className='flex flex-wrap px-20'>
        {
            videos.map((video)=>{
              return <Link to={"/watch?v="+ video.id} key={video.id} ><VideoCard key={video.id} info = {video}/></Link> 
            })
        }
       
    </div>
  )
}

export default VideoContainer;