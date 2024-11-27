import {Link} from 'react-router-dom';


const ShowList = ({show}) => {
    return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {show.map((show) => (
            <div
              key={show.id}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
                <img 
                src={show.image}
                alt={show.title}
                className="h-48 w-full object-cover" 
                />

                <div className="p-4">
                    <h3 className="text-lg font-semibold">{show.title}</h3>
                    <p className="text-gray-600 text-sm">{show.description}</p>
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