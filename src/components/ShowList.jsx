import {Link} from 'react-router-dom';
import { GENRE_MAP } from '../utils/constants';


  //ShowList components that displays a grid of show previews
const ShowList = ({shows}) => {

    

    return (
    // Grid container with responsive column layout
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
        {/* Map through the shows array and render a card for each show */}
        {shows.map((show) => (
            <div
              key={show.id}
              className='bg-white h-70 shadow-md rounded-lg overflow-hidden'
            >
                {/* Show Image */}
                <img 
                src={show.image}
                alt={show.title}
                className="h-50 w-full object-cover" 
                />
                {/* Show Details */}
                <div className="p-4 ">
                    {/* Show title */}
                    <h3 className="text-lg font-semibold">{show.title}</h3>
                    {/* Show genres */}
                    <p className="text-gray-600 text-sm overflow-hidden ">Genre: {show.genreIds?.length > 0
                                                                            ? show.genre.map((id) => GENRE_MAP[id]).join(', ')
                                                                            : 'Unknown'}
                                                                            </p>
                    
                    {/* Number of Seasons */}
                    <p className="text-sm text-gray-600">
                        Seasons: {show.seasons}
                    </p>
                    {/* Last Updated date */}
                    <p className='text-light-gray-600 text-sm'>  Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
                    {/* Link to show Details */}
                    <Link
                        to={`/show/${show.id}`}
                        className="mt-2 inline-block text-blue-500 hover:underline"
                    >
                        View Details
                    </Link>

              </div>
            </div>
        ))}
       

    </div>
   );
};

export default ShowList;