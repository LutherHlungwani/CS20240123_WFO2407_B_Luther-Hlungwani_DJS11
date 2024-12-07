import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addFavorites, removeFavorite, isFavorite } from "../utils/storage";
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-solid-svg-icons';

const FavoritesButton = ({ episode }) => {
    //State to track if the episode is a favorite
    const [isFav, setIsFav] = useState(false);
     //check if the episode is a favorite on component mount and when episode changes
    useEffect(() => {
      setIsFav(isFavorite(episode.episode));

    },[episode.episode]);
// toggle favourite status
    const toggleFavorite = () => {
        if (isFav){
         removeFavorite(episode.episode);   
        } else {
            addFavorites(episode);
        }
        setIsFav(!isFav);
    };

    return (
        <button 
            onClick={toggleFavorite} 
            className={`text-yellow-400 hover:text-yellow-500 ${isFav ? 'opacity-100' : 'opacity-50'}`} 
            aria-label={isFav ? `Remove ${episode.title} from favorites` : `Add ${episode.title} to favorites`}
        >

            {/* Display solid star if favorite, otherwise regular star */}
            <FontAwesomeIcon icon={isFav ? solidStar : regularStar} />
        </button>
    );

};

export default FavoritesButton;