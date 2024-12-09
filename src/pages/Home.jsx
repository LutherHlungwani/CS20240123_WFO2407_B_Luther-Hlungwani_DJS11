import { useState, useEffect } from "react";
import { fetchPreviews } from '../utils/api';
import ShowList from '../components/ShowList';
import { GENRE_MAP } from "../utils/constants"
<uti></uti>;

/**
 * Home Component
 * @returns list of podcast shows fetched from API, with options to filter by genre.
 */


const Home = () => {
    //State to manage fetched shows, loading state, and genre filtering
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [genreFilter, setGenreFilter] = useState(null);
    const [sortOption, setSortOption] = useState('title-asc');

    
    //Fetch show previews when the component mounts
   useEffect(() => {
    const loadShows = async () => {
        try {
            const response = await fetchPreviews();
            const sortedShows = response.data.sort((a, b) => a.title.localeCompare(b.title));
            setShows(sortedShows);
        } catch (error) {
            console.error('Error fetching shows:', error);
        } finally {
            setLoading(false);
        }
    };
    loadShows();
   }, []);

   

   //Display loading state if shows are being fetched
   const filteredShows = genreFilter
   ? shows.filter((show) => show.genres && show.genres.includes(genreFilter))
   : shows;

   const sortedShows = [...filteredShows].sort((a, b) => {
    if (sortOption === 'title-asc') return a.title.localeCompare(b.title);
    if (sortOption === 'title-desc') return b.title.localeCompare(a.title);
    if (sortOption === 'date-desc') return new Date(b.updated) - new Date(a.updated);
    if (sortOption === 'date-asc') return new Date(a.updated) - new Date(b.updated);
    return 0;
   })
  
if (loading) return <div className="text-center mt-8">Loading...</div>;

return (

    <div>
        <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="date-desc">Most Recently Updated</option>
        <option value="date-asc">Least Recently Updated</option>
      </select>
      <select onChange={(e) => setGenreFilter(Number(e.target.value))}>
        <option value="">All Genres</option>
        {Object.entries(GENRE_MAP).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    
    <ShowList shows={sortedShows} />
  </div>
    );
};

export default Home;