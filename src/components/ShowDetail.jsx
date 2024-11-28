import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchShows }  from "../utils/api";
import SeasonDetail from "./SeasonDetails"
import AudioPlayer from "./AudioPlayer";


const ShowDetail = () => {
    const {id} = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentEpisode, setCurrentEpisode] = useState(null);

    useEffect(() => {
        const loadShow = async() => {
            try{
                const response = await fetchShows(id);
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching show',error);
            } finally {
                setLoading(false);
          }
        };
        loadShow();
    }, [id]);

    if (loading) return <p className="text-center mt-8">Loading...</p>;
    console.log(show.seasons);
    return (
        <div className="p-4">
            <h2 className="text-2xl p-4 pl-0 font-semibold">{show.title}</h2>
            <p className="text-gray-600">{show.description}</p>
            <div className="mt-4 space-y-4">
                {show.seasons.map((season) => (
                    <SeasonDetail 
                    key={season.season} 
                    season={season}
                    
                    />
                ))}
            </div>

            
            <AudioPlayer src={currentEpisode} />
            
        </div>
    );
};

export default ShowDetail;