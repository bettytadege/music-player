import React, { useState } from 'react'

import { IoPlaySkipBack, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { IoIosPause, IoMdPlay } from 'react-icons/io'
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { usePlayerContext } from '../../context/PlayerContext';
import SeekBar from './SeekBar';
import Speaker from './Speaker';
import PlayerDetails from './PlayerDetails';
import PlayerButton from './PlayerButton';


function Player() {
 
  const{seekbar,seekbg,isPlaying,pause,track,play,time,prevTrack,nextTrack}=usePlayerContext()
  console.log(track)
  // const[next,setNext]=useState()
  // const handlePrev=()=>{
  //   console.log(track.id)
  //   setNext(track.id + 1)
  // }
  // const handleNext=()=>{}

  
  return (
    <>
     <div className="relative">
      <div className="border-t-[#333333] border-t  h-[5.2rem] hidden md:block ">
        <div className="flex  gap-[10rem] max-w-max justify-center items-center">
          <PlayerDetails/>
          <div className=" flex justify-center items-center gap-14">
          <PlayerButton/>
          <SeekBar/>
          <Speaker/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Player