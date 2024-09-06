import { createContext, useContext, useReducer, useRef, useState } from "react";
const initialState=''
export const PlayerContext=createContext()

 export function PlayerContextProvider({children}){
    const audioref=useRef()
    const seekbar=useRef()
    const seekbg=useRef()
    const[track,setTrack]=useState('')
    const[isPlaying,setIsPlay]=useState(false)
    const[currentIndex,setCurrentIndex]=useState()
    
   const [time, setTime] = useState({
      currentTime: {
       min:0,
       sec:0
     },
     TotalTime: {
        min:0,
        sec:0
     },
   });
   
   const nextTrack=()=>{
      if(currentIndex < track.length - 1)
         setCurrentIndex(currentIndex + 1)
   }
   const prevTrack=()=>{
      if(currentIndex > 0)
         setCurrentIndex(currentIndex - 1)
   }


   const play=()=>{
    audioref.current.play();
 
    setIsPlay(true)
    // console.log("play")
   }
   const pause=()=>{
    audioref.current.pause();
   //  console.log("pause")
    setIsPlay(false)
   }
   const reducer=(state,action)=>{
      // console.log(state)

   if(action.type === 'CANCEL' || action.type === 'SHOW')
      {
         return !state
      }
      }
     
      
         const[state,dispatchAction]=useReducer(reducer,initialState)
         // console.log(state)
       const ShowMenu=()=>{
        dispatchAction({type:'SHOW'})
      }
      const CancelMenu=()=>{
        dispatchAction({type:'CANCEL'})
        console.log('object')
      }
    const values = {
      state,
      nextTrack,
      prevTrack,
      audioref,
      seekbg,
      seekbar,
      isPlaying,
      pause,
      track,
      setTrack,
      time,
      setTime,
      play,
      ShowMenu,
      CancelMenu
    };
    return(
     <PlayerContext.Provider value={values}>
        {children}
      
     </PlayerContext.Provider>
    )
 }
 export const usePlayerContext=()=>{
    return useContext(PlayerContext)
 }