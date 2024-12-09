import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);

        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <input 
                type="text"
                placeholder="Search podcasts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search podcasts"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            >
                Search
            </button>
    
        </form>
    );
};

export default SearchBar;

