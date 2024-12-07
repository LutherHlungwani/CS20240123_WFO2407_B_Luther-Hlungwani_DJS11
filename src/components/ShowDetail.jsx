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
    // Add state for the current season
    const [currentSeason, setCurrentSeason] = useState(1);
    
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

            <div>
                <label htmlFor="season-select" className="mr-2">Season:</label>
                <select
                 id="season-select"
                 value={currentSeason}
                 onChange={(e)=> setCurrentSeason(Number(e.target.value))}
                 className="border p-2 rounded"
                 >
                    {show.seasons.map((season) => (
                        <option key={season.season} value={season.season}>
                            {season.title}
                        </option>
                    ))}
                 </select>
            </div>
              {/* Container for seasons */}
            <div className="mt-4 space-y-4">
                
                
                    <SeasonDetail 
                    key={season.season} 
                    season={show.seasons.find(s => s.season === currentSeason)}
                    
                    />
            </div>

            

            
        </div>
    );
};

export default ShowDetail;