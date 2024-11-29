import {Link} from 'react-router-dom';


export const GENRE_MAP = {
    1: 'Personal Growth',
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };

const ShowList = ({shows}) => {

    

    return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
        {shows.map((show) => (
            <div
              key={show.id}
              className='bg-white h-70 shadow-md rounded-lg overflow-hidden'
            >
                <img 
                src={show.image}
                alt={show.title}
                className="h-50 w-full object-cover" 
                />

                <div className="p-4 ">
                    <h3 className="text-lg font-semibold">{show.title}</h3>
                    <p className="text-gray-600 text-sm overflow-hidden ">Genre: {show.genreIds?.length > 0
                                                                            ? show.genre.map((id) => GENRE_MAP[id]).join(', ')
                                                                            : 'Unknown'}
                                                                            </p>
                    <p className='text-light-gray-600 text-sm'>  Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
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