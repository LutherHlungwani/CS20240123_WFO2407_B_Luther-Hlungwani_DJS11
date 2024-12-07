
import { useState, useEffect } from 'react';
import {faPlay} from '@fontawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { getFavorites, removeFavorite, saveToLocalStorage } from '../utils/storage';
import { GENRE_MAP } from '../components/ShowList';

/** 
  * Favorites page
  *Displays the user's favorite podcast episodes and allows sorting and interaction
   */



const Favorites = () => {
  //state for managing list of favorites and sorting option
    const [ favorites, setFavorites] = useState([]);
    const [sortOption, setSortOption] = useState('title-asc');

   //Fetch the favorites list from storage when the component mounts
  useEffect(() => {
    setFavorites(getFavorites());
  },[]);
    
    //Sortin functions for different criteria
    const sortFuntions = {
      'title-asc': (a, b) => a.title.localeCompare(b.title),
      'title-asc': (a, b) => b.title.localeCompare(a.title),
      'date-added': (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
      
    };

    //Update sort option when user selects a new select a new sorting method
    const sortedFavorites = () => favorites.sort(sortFuntions[sortOption] || sortFuntions['title-asc']); 
    
    //Play the selected episode by saving it to local storage
    const handleSortChange = (e) => {
      setSortOrder(e.target.value);
    };

    const handlePlayEpisode = (episode) => {
      saveToLocalStorage('currentEpisode', episode);
    };

    const getGenres = (genreIds) => {
      if (!genreIds || genreIds.length === 0) return 'unkwown';
      return genreIds.map(id => GENRE_MAP[id] || 'Unknown').join(', ');
    };

    


    return (
      <div>
        <h2 className="text-2xl font bold mb-4"> Your Favorite Episodes</h2>
        <div className='mb-4'>
        <label htmlFor="sort" className="mr-2">Sort by:</label>
        <select 
         id="sort"
         value={sortOption}
         onChange={handleSortChange}
         className="border p-2 rounded"
         >
           <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="date-added">Most Recently Added</option>
         </select>
      </div>
      <div className="space-y-4">
        {sortedFavorites.length === 0 ? (
          <p>No favorites added yet</p>
        ) : (
          <div className="space-y-4">
            {sortedFavorites.map((episode) => (
              <div
              key={episode.episode}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow"
              >
                <div>
                  <h3 className="font-semibold">{episode.title}</h3>
                  <p className="text-sm text-gray-500">Genres: {getGenres(episode.genreIds)}</p>
                  <p className="text-sm text-gray-500">Added: {new Date(episode.addedAt).toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                  onClick={() => handlePlayEpisode(episode)}
                  className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                  <FavoritesButton />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
      
      
    );
};
export default Favorites;