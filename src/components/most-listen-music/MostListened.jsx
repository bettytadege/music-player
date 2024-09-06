import React from 'react'
import img1 from '../../assets/photo_5_2024-06-23_19-14-50.jpg'

import { useQuery } from 'react-query'
import axios from 'axios'
import Loading from '../ui/Loading'
function LoFiMusic() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://interview-ldfz.onrender.com/most-listened"
    );
    // console.log(response.data)
    return response.data;
  };

  const { data, error, isLoading } = useQuery("data", fetchData);
  //  console.log(data)
  if (isLoading) return <Loading/>
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
    <div className=""> 
      <h1 className='pb-4 font-bold'>What You Listen to the most</h1>
      <div className=" py-4 bg-[#0D0D0D] lg:w-[100%] md:w-[65%] w-[90%] border border-[#333333] md:rounded-3xl  ">
       
       <div className="flex gap-2 overflow-scroll overflow-y-hidden scrollbarhide md:gap-3 lg:overflow-scroll lg:overflow-x-hidden scrollbarhide lg:h-[130px]  ">
       <div className="flex-shrink-0 pl-4">
            <img src={img1} alt="" className="w-20 md:w-48 md:h-52" />
          </div>
          <div className="flex gap-3 md:grid grid-cols-2">
          <img src={data[0].poster_url} alt="" className="lg:w-20  md:w-24 w-20" />
          <img src={data[1].poster_url} alt="" className="lg:w-20 md:w-24 w-20" />
          <img src={data[2].poster_url} alt="" className="lg:w-20 md:w-24 w-20" />
          <img src={data[3].poster_url} alt="" className="lg:w-20 md:w-24 w-20" />
          </div>
          <div className="rotate-text  text-[#859DFF] ">
           
          </div>
       </div>
            </div>
      
      </div>

    </>
  );
}

export default LoFiMusic