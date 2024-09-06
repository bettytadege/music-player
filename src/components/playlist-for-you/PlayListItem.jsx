import React from 'react'
import { FaPlay } from 'react-icons/fa';
function PlayListItem({track,fill,img,title,desc,bg,...props}) {
 
  return (
    <>
      <div className="relative " {...props}>
        <div className="relative md:w-[260px] md:h-[240px]  h-[200px] w-[220px]">
          <img
            src={img}
            alt=""
            className="object-cover object-left-top w-full h-full rounded-3xl"
          />
          
          <div className={`absolute inset-0 rounded-3xl ${bg}`}></div>
          </div>
        <div className="pl-4 relative md:-top-[14.7rem] text-white pt-3">
          <p className="mb-4">{track}</p>
        </div>
        <div className="flex items-center gap-6 md:mx-4 relative md:-top-28 mx-4">
          <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
            <FaPlay size={13} fill={fill} />
          </div>
          <div>
            <p>{title.slice(0,11)}</p>
            <span className="text-xs">{desc}</span>
          </div>
        </div>
        </div>
       
      

      
    </>
  );
}

export default PlayListItem