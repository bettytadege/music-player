import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/menu/NavBar'
import { usePlayerContext } from './context/PlayerContext'
import Header from './pages/Header'
import RightBar from './pages/RightBar'
import Player from './components/player/Player'
import ProfileMenu from './components/ProfileMenu'


function App() {
 const{audioref,track,setTime,state}=usePlayerContext()
  const[isShow,setIsShow]=useState(false)
  
  const onPlaying=()=>{
    // seekbar.current.style.width=(Math.floor(audioref.current.currentTime/audioref.current.duration*100)+"%")
    console.log("audioref.current.duration");
    console.log(audioref.current.duration);
    console.log(audioref.current.currentTime);
    setTime({ currentTime: {
                min: Math.floor(audioref.current.currentTime / 60),
                sec: Math.floor(audioref.current.currentTime %60)
              },
              TotalTime: {
                             min: Math.floor(audioref.current.duration/60),
                            sec: Math.floor(audioref.current.duration%60)
                          }
            })
  }
  useEffect(() => {
  
    setTimeout(onPlaying, 1000);
  }, [audioref, setTime]);

   return (
     <>
       <div className="bg-black text-white w-full md:h-full lg:h-screen ">
        {state ? <ProfileMenu/>:
        <>
         <Header/>
         <div className="flex gap-4">
         <NavBar />
         <RightBar/>
          </div>
         <div className="">
         <audio preload='auto' ref={audioref} src={track.track_url} onTimeUpdate={()=> onPlaying() } ></audio>
  
          <Player/>
         </div>
         </>
        }
       </div>
     </>
   );
}

export default App
