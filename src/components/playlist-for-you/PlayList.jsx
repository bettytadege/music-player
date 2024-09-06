import React from 'react';
import PlayListItem from './PlayListItem';
import axios from 'axios';
import { useQuery } from 'react-query';
import { usePlayerContext } from '../../context/PlayerContext';
import Loading from '../../components/ui/Loading'

function PlayList() {
 
  const fetchData = async () => {
    const response = await axios.get(
      "https://interview-ldfz.onrender.com/playlist-for-you"
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery("retriveData", fetchData);
  if (isLoading) return <Loading/>
  if (error) return <div>Error: {error.message}</div>;
  const{track,setTrack}=usePlayerContext()
  const handleSelectedItem=(id)=>{
    const selectedItem=data.find(item =>item.id === id)
    setTrack(selectedItem)
  }
  const bgImage = (id) => {
    switch (id) {
      case "1":
        return "bg-img1";
      case "2":
        return "bg-img2";
      case "3":
        return "bg-img3";
      case "4":
        return "bg-img4";
      case "5":
        return "bg-img2";
      default:
        return " ";
    }
  };
  return (
    
    <div className="p-5 relative ">
      {/* <div className="absolute">
      <div className=" flex justify-end items-center">
      <FaChevronRight size={30} />
      </div>
      </div> */}
      <h1 className="font-bold tracking-wider text-xl">PlayList For You</h1>
      <div className="flex gap-3 pt-7 w-[95%] overflow-scroll overflow-y-hidden scrollbarhide">
        {data.map((item) => (
          <PlayListItem
          onClick={()=>handleSelectedItem(item.id)}
            key={item.id}
            track={`${item.num_of_tracks} Tracks`}
            title={item.title}
            desc={item.collection_moto || "chill this truck"}
            fill={
              item.id === "1"
                ? "#fd9c02"
                : item.id === "2"
                ? "#DC225A"
                : item.id === "3"
                ? "#234EFF"
                : item.id === "4"
                ? "#3BABD9"
                : item.id === "5"
                ? "#DC225A"
                : "black"
            }
            img={item.poster_url}
            bg={bgImage(item.id)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default PlayList;
