import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchShows }  from "../utils/api";
import SeasonDetail from "./SeasonDetails"



const ShowDetail = () => {
    //Extract the 'id' parameter from the URL
    const {id} = useParams();
    //State to store the show details
    const [show, setShow] = useState(null);
    //State to track loading status
    const [loading, setLoading] = useState(true);
    
    //Effect to fetch show details when component mounts or id changes
    useEffect(() => {
        const loadShow = async() => {
            try{
                //Fetch show details using the API
                const response = await fetchShows(id);
                //Update the show state with fetched data
                setShow(response.data);
            } catch (error) {
                //Log any errors that occur during fetching
                console.error('Error fetching show',error);
            } finally {
                //Set loading to false regardless of sucess of failure
                setLoading(false);
          }
        };
        //Call the loadShow function
        loadShow();
    }, [id]); //Re-run effect if id changes

    //Show loading message while data is being fetched
    if (loading) return <p className="text-center mt-8">Loading...</p>;
    
    //Render show details once data is loaded
    return (
        <div className="p-4">
            {/* Show title */}
            <h2 className="text-2xl p-4 pl-0 font-semibold">{show.title}</h2>
            {/* Show description */}
            <p>{show.description}</p>
            {/* Container for seasons */}
            <div className="mt-4 space-y-4">
                {/* Map through seasons and render SeasonDetail component for each */}
                {show.seasons.map((season) => (
                    <SeasonDetail 
                    key={season.season} 
                    season={season}
                    
                    />
                ))}
            </div>

            

            
        </div>
    );
};

export default ShowDetail;