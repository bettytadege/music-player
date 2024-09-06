import React, { useState } from 'react'
import PlayList from '../components/playlist-for-you/PlayList'
import MostListened from '../components/most-listen-music/MostListened'
import Tracks from '../components/Tracks-of-the- week/Tracks'

function RightBar({isShow,setIsShow}) {
  
  
  return (
   <>
 <div className="w-[93%]">
  <PlayList/>
  <div className=" lg:flex gap-8  md:overflow-scroll md:overflow-x-hidden scrollbarhide md:h-[70px]  ">
  <MostListened/>
  <Tracks/>
  </div>
</div>

   </>
  )
}

export default RightBar