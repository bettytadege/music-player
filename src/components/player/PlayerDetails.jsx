import React from 'react'
import { usePlayerContext } from '../../context/PlayerContext'
import img1 from '../../assets/photo_12_2024-06-23_19-14-51.jpg'
function PlayerDetails() {
    const{seekbar,seekbg,isPlaying,pause,track,play,time,prevTrack,nextTrack}=usePlayerContext()
  return (
    <>
    <div className="flex gap-3 py-3 items-center">
            <div className="pl-2">
           
            <img src={ track.poster_url || img1} alt="" className="w-14 h-14 rounded-lg object-cover" />
            
            </div>
            <div className="flex flex-col">
              <a href="" className="truncate "> { track.title ||"Chill future"}</a>
              <a href="" className="text-sm text-[#9CA3AF] hover:underline">{track.collection_moto ||'this collection'}</a>
              </div>
          </div>
    </>
  )
}

export default PlayerDetails
