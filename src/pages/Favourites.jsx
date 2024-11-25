import {useState, useEffect} from 'react';
import { getFromLocalStorage, saveToLocalStorage, savetoLocalStorage} from '../utils/storage';

const Favorites = () => {
    const [ favorites, setFavorites] = useState([]);
    const [sortOption, setSortOption] = useState('title-asc');

    useEffect(() => {
        const storedFavorites = getFromLocalStorage('favorites');
        setFavorites(storedFavorites || []);

    },[]);


    const handleRemove = (episodeId) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== episodeId);
        setFavorites(updatedFavorites);
        saveToLocalStorage('favorites', updatedFavorites);

    };

    const sortFavorites = (option) => {
        let sorted;
        if (option === 'title-asc') {
            sorted = [...favorites]. sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === 'title-desc') {
            sorted = [...favorites]. sort((a, b) => b.title.lacaleCompare(a.title));
        } else if (option === 'recent') {
            sorted = [...favorites].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        } else if (option === 'oldest') {
            sorted = [...favorites].sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        }
        setFavorites(sorted);
    };

    return (
        <div className="p-4">
      <h1 className="text-2xl font-bold">Favorites</h1>
      <div className="mt-4">
        <label className="block text-sm font-semibold">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            sortFavorites(e.target.value);
          }}
          className="mt-2 border rounded p-2"
        >
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="recent">Most Recently Added</option>
          <option value="oldest">Oldest Added</option>
        </select>
      </div>

      <ul className="mt-6">
        {favorites.map(fav => (
          <li key={fav.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <p>{fav.title}</p>
              <p className="text-sm text-gray-500">
                {fav.showTitle} - {fav.seasonTitle}
              </p>
            </div>
            <button
              onClick={() => handleRemove(fav.id)}
              className="text-red-500 underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    );

};

export default Favorites;