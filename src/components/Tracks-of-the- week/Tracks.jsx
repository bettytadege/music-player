import React from 'react'
import TrackListItem from './TrackListItem'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../ui/Loading'
function Tracks() {
  const fetchData=async()=>{
    const res= await axios.get(`https://interview-ldfz.onrender.com/track-of-the-week`)
    // console.log(res.data)
    return res.data
  }
  const{data,error,isLoading}=useQuery('likedsong',fetchData)
  // console.log(data)
  if (isLoading) return <Loading/>
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="">
        <div className="pb-4">
          <h1 className="font-bold">Tracks of the Week</h1>
        </div>

        <div className="pt-4 bg-[#0D0D0D] w-[90%] lg:w-[100%] md:w-[70%] border border-[#333333]   rounded-xl  h-fit">
          <div className="overflow-scroll overflow-x-hidden scrollbarhide h-[150px]">
            {data.map((song) => (
   
              <TrackListItem
                 key={song.id}
                like={song.listened}
                name={song.album}
                img={song.poster_url}
                title={song.title}
              />
            ))
            }
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracks 