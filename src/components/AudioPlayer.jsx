import { useRef, useState, useEffect} from "react";

import { faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";


const AudioPlayer = ({ currentEpisode }) => {
  // State to track if audio is playing 
  const [isPlaying, setIsPlaying] = useState(false);
  // State to store current episode information
  const [currentEpisode, setCurrentEpisode]= useState(false);
  const [currentSeason, setCurrentSeason]= useState(null);
  //Ref for the audio element
  const audioRef = useRef(new Audio());

  //Effect to load the current episode from local storage on component mount
  useEffect(() => {
    const storedEpisode = getFromLocalStorage('currentEpisode');
    const storedSeason = getFromLocalStorage('currentSeason');
    if (storedEpisode) {
      setCurrentEpisode(storedEpisode);
      setCurrentSeason(storedSeason);
      audioRef.current.src= storedEpisode.file;
      audioRef.current.load();
    }
   
 
  },[]);

  //Effect to check for episode changes every second
  useEffect(() => {
    const handleStorageChange = () => {
      const newEpisode = getFromLocalStorage('currentEpisode');
      const newSeason = getFromLocalStorage('currentSeason');
      if (newEpisode && (!currentEpisode || newEpisode.file !== currentEpisode.file)) {
        setCurrentEpisode(newEpisode);
        setCurrentSeason(newSeason);
        audioRef.current.src = newEpisode.file;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    };

    
    //Cleanup interval on component uunmount
    window.addEventListener('storage', handleStorageChange);
    return() => window.removeEventListener('storage', handleStorageChange);

    
  }, [currentEpisode, isPlaying]);
  
  //Effect to add event listeners for play and pause events
  useEffect(() =>{
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    //Cleanup event listeners on component unmount
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };

  },[]);

  //Function to toggle play/pause
  const togglePlay = () => {
    if (audioRef.current.paused){
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const playNextEpisode = () => {
    if (currentSeason && currentEpisode) {
      const currentIndex = currentSeason.episodes.findIndex(ep => ep.episode === currentEpisode.episode);
      if (currentIndex < currentSeason.episode.length - 1) {
        saveToLocalStorage('currentEpisode', nextEpisode);
        setCurrentEpisode(nextEpisode);
        audioRef.current.src = nextEpisode.file;
        audioRef.current.load();
        audioRef.current.play();
      }
    }
  };
 
  const playPreviousEpisode = () => {
    if (currentSeason && currentEpisode) {
      const currentIndex = currentSeason.episodes.findIndex(ep => ep.episode === currentEpisode.episode);
      if (currentIndex > 0) {
        const previousEpisode = currentSeason.episodes[currentIndex - 1];
        saveToLocalStorage('currentEpisode', previousEpisode);
        audioRef.current.src = previousEpisode.file;
        audioRef.current.load();
        audio.current.play();
      }
    }
  };

  return (
    <div>
      {/* fixed audio player at the bottom of the screen */}
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
            
            <button onClick={playPreviousEpisode} disabled={!currentEpisode}>
              {/*Play/Pause button */}
              <FontAwesomeIcon icon={faBackward} className="text-white text-xl" />
            </button>
            <button onClick={togglePlay}>
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="text-white text-xl"
               />
            </button>

            <button onClick={playNextEpisode}>
              <FontAwesomeIcon icon={faForward} className="text-white text-xl" />
            </button>
          </div>
          <div className="pb-0">{children}</div>
      </div>
     </div>
   
  );
};


  



export default AudioPlayer;