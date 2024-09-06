import React from 'react'
import { HiMiniSpeakerWave } from 'react-icons/hi2'

function Speaker() {
  return (
    <div>
       <div className="lg:flex items-center hidden ">
            <div className="">
              <HiMiniSpeakerWave />
            </div>
            <div className="">
              <div className="w-[60vw] max-w-[200px] bg-[#333333] rounded-full cursor-pointer">
                <hr className="h-1 border-none w-24 bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Speaker
