import {Link} from 'react';
import { getGenreTitles } from '../utils/genres';

const ShowCard = ({show}) => (
    <div class="bg-white shadow rounded-lg p-4">
        <img src={show.image} alt={show.title} className="w-full h-32 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{show.title}</h2>
        <p className="text-sm text-gray-600">{getGenreTitles(show.genres)}</p>
        <p className="text-sm text-gray-500">Last updated: {new Date(show.lastUpdated).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Seasons: {show.seasons.length}</p>
        <Link to={`/show/${show.id}`} className="mt-2 inline-block text-blue-500">
            View Details
        </Link>
    </div>
);

export default ShowCard;