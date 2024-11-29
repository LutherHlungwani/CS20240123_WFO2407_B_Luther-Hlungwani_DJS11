import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addFavorites, removeFavorite, isFavorite } from "../utils/storage";
import {faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-solid-svg-icons';

const FavoritesButton = ({ episode }) => {
    const [isFav, setIsFav] = useState(false);
     
    useEffect(() => {
      setIsFav(isFavorite(episode.episode));

    },[episode.episode]);

    const toggleFavourite = () => {
        if (isFav){
         removeFavorite(episode);   
        } else {
            addFavorites(episode);
        }
        setIsFav(!isFav);
    };

    return (
        <button onClick={toggleFavourite} className={`text-yellow-400 hover:text-yellow-500 ${isFav ? 'opacity-100' : 'opacity-50'}`} aria-label={isFav ? `Remove ${episode.title} from favorites` : `Add ${episode.title} to favorites`}>

            <FontAwesomeIcon icon={isFav ? solidStar : regularStar} />
        </button>
    );

};

export default FavoritesButton;