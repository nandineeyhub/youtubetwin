
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from './utils/appSlice'; 
import CommentsContaner from './CommentsContaner';
import LiveChat from './LiveChat';

const WatchPage = () => {
    
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])
   
  
  return (
    <div className='px-5 flex-col w-full'>
      <div className='flex w-full'>
       <div> <iframe width="1000" height="500"
         src={"https://www.youtube.com/embed/"+ searchParams.get('v')}
          title="YouTube video player"
           
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> </div>
            <div className=' w-full'>
              <LiveChat/>
            </div>
      </div>
       
         <div className='w-[1000px]'><CommentsContaner/></div>
    </div>
  )
}

export default WatchPage;