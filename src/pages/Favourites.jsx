
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { getFavorites, removeFavorite, saveToLocalStorage } from '../utils/storage';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [sortOption, setSortOption] = useState('title-asc');

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);
  
  const sortFunctions = {
    'title-asc': (a, b) => a.title.localeCompare(b.title),
    'title-desc': (a, b) => b.title.localeCompare(a.title),
    'date-added': (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  };

  const sortedFavorites = [...favorites].sort(sortFunctions[sortOption] || sortFunctions['title-asc']);
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePlayEpisode = (episode) => {
    saveToLocalStorage('currentEpisode', episode);
  };

  const handleRemoveFavorite = (episodeNumber) => {
    removeFavorite(episodeNumber);
    setFavorites(getFavorites());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Episodes</h2>
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
                  <p className="text-sm text-gray-500">Episode: {episode.episode}</p>
                  <p className="text-sm text-gray-500">Added: {new Date(episode.addedAt).toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlayEpisode(episode)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                  <button
                    onClick={() => handleRemoveFavorite(episode.episode)}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
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