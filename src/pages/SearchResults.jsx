import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPreviews } from "../utils/api";
import ShowList from "../components/ShowList";

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const searchShows = async () => {
            const searchParams = new URLSearchParams(location.search);
            const query = searchParams.get('q');

            if (query) {
                setLoading(true);
                try{
                    const response = await fetchPreviews();
                    const filteredShows = response.data.filter(show => 
                        show.title.toLowerCase().includes(query.toLowerCase()) ||
                        show.description.toLowerCase().includes(query.toLowerCase())
                    );
                    setResults(filteredShows);
                } catch (error){
                    console.error('Error searching shows:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        searchShows();
    }, [loading.search]);

    if (loading) return <div className="text-center mt-8">Loading...</div>

    return(
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {results.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <ShowList shows={results} />
            )}

        </div>
    );
};

export default SearchResults;