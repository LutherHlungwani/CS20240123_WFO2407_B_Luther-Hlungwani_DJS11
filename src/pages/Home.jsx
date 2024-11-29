import { useState, useEffect } from "react";
import { fetchPreviews } from '../utils/api';
import ShowList from '../components/ShowList';

/**
 * Home Component
 * @returns list of podcast shows fetched from API, with options to filter by genre.
 */


const Home = () => {
    //State to manage fetched shows, loading state, and genre filtering
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [genreFilter, setGenreFilter] = useState(null);

    
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
   ? shows.filter((show) => show.genreIds && show.genreIds.includes(genreFilter))
   : shows;
  
if (loading) return <div className="text-center mt-8">Loading...</div>;

return (

   
    
    <div>
        
    <select onChange={(e) => setGenreFilter(Number(e.target.value))}>
      <option value="">All Genres</option>
      <option value="1">Personal Growth</option>
      <option value="2">Investigative Journalism</option>
      <option value="3">History</option>
      <option value="4">Investigative Journalism</option>
      <option value="5">Investigative Journalism</option>
      <option value="6">Investigative Journalism</option>
      <option value="7">Investigative Journalism</option>
      <option value="8">Investigative Journalism</option>
      <option value="9">Kids and Family</option>
      
    </select>
    <ShowList shows={filteredShows} />
  </div>
    );
};

export default Home;