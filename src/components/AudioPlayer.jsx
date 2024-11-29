import { useRef, useState, useEffect} from "react";

import { faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFromLocalStorage } from "../utils/storage";


const AudioPlayer = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode]= useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const storedEpisode = getFromLocalStorage('currentEpisode');
    if (storedEpisode) {
      setCurrentEpisode(storedEpisode);
      audioRef.current.src= storedEpisode.file;
      audioRef.current.load();
    }
   
 
  },[]);

  useEffect(() => {
    const checkForEpisodeChanges = () => {
      const storedEpisode = getFromLocalStorage('currentEpisode');
      if (storedEpisode && (!currentEpisode || storedEpisode.file !== currentEpisode.file)) {
        audioRef.current.src = storedEpisode.file;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    };
    
    const intervalId = setInterval(checkForEpisodeChanges, 1000);

    return() => clearInterval(intervalId);
  }, [currentEpisode, isPlaying]);
  
  useEffect(() =>{
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };

  },[]);

  const togglePlay = () => {
    if (audioRef.current.paused){
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
 

  return (
    <div>
       <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
          <div>
            {currentEpisode ? (
              <div>
                <strong>Now Playing </strong> {currentEpisode.title}
              </div>
            ) : (
              "Select an episode to play"
            )}
          </div>

          <div className="flex items-center gap-4">
            <button>
              <FontAwesomeIcon icon={faBackward} className="text-white text-xl" />
            </button>
            <button onClick={togglePlay}>
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="text-white text-xl"
               />
            </button>

            <button>
              <FontAwesomeIcon icon={faForward} className="text-white text-xl" />
            </button>
          </div>
          <div className="pb-0">{children}</div>
      </div>
     </div>
   
  );
};


  



export default AudioPlayer;