import React from 'react'
import { usePlayerContext } from '../../context/PlayerContext'
import { IoPlaySkipBack, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { IoIosPause, IoMdPlay } from 'react-icons/io'

function PlayerButton() {
    const{seekbar,seekbg,isPlaying,pause,track,play,time,prevTrack,nextTrack}=usePlayerContext()
  return (
    <div>
      <div className="flex items-center gap-3">
          <div className="" onClick={nextTrack}>
            <IoPlaySkipBack size={20} />
          </div>
          <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
            {isPlaying ? (
              <span onClick={pause}>
                <IoMdPlay color="black" size={19} />
              </span>
            ) : (
              <span onClick={play}>
                <IoIosPause color="black" size={19} />
              </span>
            )}
          </div>
          <div className="" onClick={prevTrack}>
            <IoPlaySkipForwardSharp size={20} />
          </div>
        </div>
    </div>
  )
}

export default PlayerButton
