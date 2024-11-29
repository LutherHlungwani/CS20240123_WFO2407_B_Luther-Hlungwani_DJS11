import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import FavoritesButton from "./FavoritesButton";
import { saveToLocalStorage } from "../utils/storage";



const SeasonDetail =  ({ season }) => {
     const handlePlayEpisode = (episode) => {
        saveToLocalStorage('currentEpisode', episode);
     };

    

    return(
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{season.title}</h3>
            <p className="text-gray-500 text-sm">{season.episodes.length} Episodes</p>
            <ul className="mt-2 space-y-1">
                {season.episodes.map((episode) => (
                    <div key={episode.episode} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
                       <div>
                        <h3 className="font-semibold">{episode.title}</h3>
                       </div>
                       <div className="flex items-center space-x-4">
                        <button onClick={() => handlePlayEpisode(episode)}
                                className="text-blue-500 hover:text-blue-700"
                                >
                                    <FontAwesomeIcon icon={faPlay} size="lg" />
                                </button>
                                <FavoritesButton episode={episode} />
                       </div>
                        
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SeasonDetail;
