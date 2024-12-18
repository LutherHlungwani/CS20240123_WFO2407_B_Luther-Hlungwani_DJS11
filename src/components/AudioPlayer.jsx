import { useRef, useState, useEffect} from "react";
import { faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";


const AudioPlayer = () => {
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
    const handleStorageChange = () => {
      const storedEpisode = getFromLocalStorage('currentEpisode');
      if (storedEpisode && (!currentEpisode || storedEpisode.episode !== currentEpisode.episode)) {
        setCurrentEpisode(storedEpisode);
        audioRef.current.src= storedEpisode.file;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      
      }
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange(); // Check on mount

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, [currentEpisode]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
        setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
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
            <div className="flex flex-col items-center">
                <div className="flex-1 mr-1">
                    {currentEpisode ? (
                        <p className="truncate text-sm">{currentEpisode.title}</p>
                    ) : (
                        <p>Select an episode to play</p>
                    )}
                </div>
                <div className="flex items-center justify-center space-x-4 mb-4">
                    <button  className="text-2xl">
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                    <button onClick={togglePlay} className="text-3xl">
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button  className="text-2xl">
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>
                
                <div className="w-full max-w-md bg-gray-600 rounded-full h-1">
                    <div 
                        className="bg-blue-500 h-1 rounded-full" 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
  );
};
  



export default AudioPlayer;