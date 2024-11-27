import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchShow } from "../utils/api";
import SeasonDetail from "./SeasonDetails";
import AudioPlayer from "./AudioPlayer";

const ShowDetail = () => {
    const {id} = useParams();
    const [show, setShow] = useState(null);
    const [load, setLoading] = useState(true);

    useEffect(() => {
        const loadShow = async() => {
            try{
                const response = await fetchShow(id);
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

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">{show.title}</h2>
            <p className="text-gray-600">{show.description}</p>
            <div className="mt-4 space-y-4">
                {show.seasons.map((season) => (
                    <SeasonDetail 
                    key={season.id} 
                    season={season}
                    onEpisodeSelect={handleSelectEpisode}
                    />
                ))}
            </div>

            {selectedEpisode && (
                <AudioPlayer src={selectedEpisode.file} />
            )}
        </div>
    );
};

export default ShowDetail;