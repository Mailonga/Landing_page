import React from 'react'
import { useState } from 'react';
import Vid from '../components/assets/TSML.mp4'

const Video = () => {
    const [playVid, setplayVid] = useState(false);
    const VidRef = React.useRef();

    const Video = () => {
        setplayVid((prevplayVid) => !prevplayVid )

            if(playVid){
                VidRef.current.pause();
            }else{
                VidRef.current.play();
            }
    }
    return (
    <div name="Videos" className=' h-[100%] relative'>
       <video
       className='w-full h-full object-contain' 
       src={Vid}
       ref={VidRef}
       type="Vid/mp4"
       loop
       controls={false}
       muted
       />
       <div className='absolute inset-0 bg-slate-200/5'>
          <div
          className='w-full h-full cursor-pointer text-center mt-[25%]'
          onClick={Video}
          >
            {playVid ? <i className="fa-solid fa-play text-orange-200/50 text-[40px]"></i> : <i className="fa-solid fa-pause text-orange-200/50 text-[40px]"></i>}
          </div>
       </div>
    </div>
  )
}

export default Video