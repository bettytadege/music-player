import React from 'react'
import { usePlayerContext } from '../../context/PlayerContext'

function SeekBar() {
    const{seekbar,seekbg,time}=usePlayerContext()
 
  return (
    <div>
      <div className="flex items-center gap-8 ">
        
        <div className="hidden md:block ">
          <div className="flex items-center gap-4">
            <p className="text-sm">
              {time.currentTime.min}:{time.currentTime.sec}
            </p>
            <div
              ref={seekbar}
              className="w-[60vw] lg:max-w-[400px] md:max-w-[300px]  bg-[#333333] rounded-full cursor-pointer"
            >
              <hr
                ref={seekbg}
                className="h-1 border-none  bg-green-500 rounded-full"
              />
            </div>
            <p className="text-sm">
              {time.TotalTime.min}:{time.TotalTime.sec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeekBar
