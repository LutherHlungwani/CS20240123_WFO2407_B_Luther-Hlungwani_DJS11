import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import {fetchShowDetails} from '../utils/api';
import { getGenreTitles } from '../utils/genres';

const Show = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState();
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    const getShowDetails = async () => {
      try {
        const data = await fetchShowDetails(id);
        setShow(data);
        setSelectedSeason(data.seasons[0]); //Default to first season
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getShowDetails();
   }, [id]);

    if (loading) return <div className="text-center mt-10">Loading show details...</div>;

    const handleSeasonChange = (seasonId) => {
      const season = show.seasons.find((s) => s.id === seasonId);
      setSelectedSeason(season);
    ;}
    
    return (
        <div className="p-4">
        <button onClick={() => navigate('/')} className="text-blue-500 underline">
          Back to Shows
        </button>
        <h1 className="text-3xl font-bold mt-4">{show.title}</h1>
        <p className="text-gray-600">Genres: {getGenreTitles(show.genres)}</p>
        <p className="text-gray-500">Last Updated: {new Date(show.lastUpdated).toLocaleDateString()}</p>
      
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Seasons</h2>
          <div className="flex gap-2 mt-2">
            {show.seasons.map((seasons) => (
              <button
              key={season.id}
              className={`px-4 py-2 rounded ${
                selectedSeason.id === season.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSeasonChange(season.id)}
              >
                {season.title}
              </button>
            ))}
          </div>

        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold"> Episodes in {selectedSeason.title}</h2>
          <ul className="mt-2">
            {selectedSeason.episode.map((episode) => (
              <li key={episode.id} className="border-b py-2 flex justify-between items-center">
                <span>{episode.title}</span>
                <button className="text-blue-500 underline">Play</button>

              </li>
            ))}

          </ul>

        </div>
      </div>
    );
};

export default Show;