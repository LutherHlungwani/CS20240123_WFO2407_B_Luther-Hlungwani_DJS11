import { useRef, useState, useEffect} from "react";
import { faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";


const AudioPlayer = ({ currentEpisode }) => {
  // State to track if audio is playing 
  const [isPlaying, setIsPlaying] = useState(false);
  // State to store current episode information
  const [currentEpisode, setCurrentEpisode]= useState(false);
  // State to track progress
  const [progress, setProgress] = useState(0);
  //Ref for the audio element
  const audioRef = useRef(new Audio());
  

  //Effect to load the current episode from local storage on component mount
  useEffect(() => {
    const storedEpisode = getFromLocalStorage('currentEpisode');
    if (storedEpisode) {
      setCurrentEpisode(storedEpisode);
      audioRef.current.src= storedEpisode.file;
      
    }
    const handleTimeUpdate = () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isPlaying) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isPlaying]);

  //Function to toggle play/pause
  const togglePlay = () => {
    if (audioRef.current.paused){
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
      {/* fixed audio player at the bottom of the screen */}
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    {currentEpisode ? (
                        <p className="truncate">{currentEpisode.title}</p>
                    ) : (
                        <p>Select an episode to play</p>
                    )}
                </div>
                <div className="flex items-center space-x-4">
                    <button >
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                    <button onClick={togglePlay}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button >
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>
            </div>
            <div className="mt-2 bg-gray-600 rounded-full h-1">
                <div 
                    className="bg-blue-500 h-1 rounded-full" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};


  



export default AudioPlayer;